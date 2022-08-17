from typing import cast, Optional, TYPE_CHECKING

from streamlit.errors import StreamlitAPIException
from streamlit.proto.Alert_pb2 import Alert as AlertProto
from streamlit.string_util import clean_text, is_emoji

if TYPE_CHECKING:
    from streamlit.delta_generator import DeltaGenerator
    from streamlit.type_util import SupportsStr


def validate_emoji(maybe_emoji: Optional[str]) -> str:
    if maybe_emoji is None:
        return ""
    elif is_emoji(maybe_emoji):
        return maybe_emoji
    else:
        raise StreamlitAPIException(
            f'The value "{maybe_emoji}" is not a valid emoji. Shortcodes are not allowed, please use a single character instead.'
        )


class AlertMixin:
    def error(
        self,
        body: "SupportsStr",
        *,  # keyword-only args:
        icon: Optional[str] = None,
    ) -> "DeltaGenerator":
        """Display error message.

        Parameters
        ----------
        icon : None
            An optional parameter, that adds an emoji to the alert.
            The default is None.
            This argument can only be supplied by keyword.
        body : str
            The error text to display.

        Example
        -------
        >>> st.error('This is an error', icon="🚨")

        """
        alert_proto = AlertProto()
        alert_proto.icon = validate_emoji(icon)
        alert_proto.body = clean_text(body)
        alert_proto.format = AlertProto.ERROR
        return self.dg._enqueue("alert", alert_proto)

    def warning(
        self,
        body: "SupportsStr",
        *,  # keyword-only args:
        icon: Optional[str] = None,
    ) -> "DeltaGenerator":
        """Display warning message.

        Parameters
        ----------
        icon : None
            An optional parameter, that adds an emoji to the alert.
            The default is None.
            This argument can only be supplied by keyword.

        body : str
            The warning text to display.

        Example
        -------
        >>> st.warning('This is a warning', icon="⚠️")

        """
        alert_proto = AlertProto()
        alert_proto.body = clean_text(body)
        alert_proto.icon = validate_emoji(icon)
        alert_proto.format = AlertProto.WARNING
        return self.dg._enqueue("alert", alert_proto)

    def info(
        self,
        body: "SupportsStr",
        *,  # keyword-only args:
        icon: Optional[str] = None,
    ) -> "DeltaGenerator":
        """Display an informational message.

        Parameters
        ----------
        icon : None
            An optional parameter, that adds an emoji to the alert.
            The default is None.
            This argument can only be supplied by keyword.

        body : str
            The info text to display.

        Example
        -------
        >>> st.info('This is a purely informational message', icon="ℹ️")

        """

        alert_proto = AlertProto()
        alert_proto.body = clean_text(body)
        alert_proto.icon = validate_emoji(icon)
        alert_proto.format = AlertProto.INFO
        return self.dg._enqueue("alert", alert_proto)

    def success(
        self,
        body: "SupportsStr",
        *,  # keyword-only args:
        icon: Optional[str] = None,
    ) -> "DeltaGenerator":
        """Display a success message.

        Parameters
        ----------
        icon : None
            An optional parameter, that adds an emoji to the alert.
            The default is None.
            This argument can only be supplied by keyword.

        body : str
            The success text to display.

        Example
        -------
        >>> st.success('This is a success message!', icon:"✅")

        """
        alert_proto = AlertProto()
        alert_proto.body = clean_text(body)
        alert_proto.icon = validate_emoji(icon)
        alert_proto.format = AlertProto.SUCCESS
        return self.dg._enqueue("alert", alert_proto)

    @property
    def dg(self) -> "DeltaGenerator":
        """Get our DeltaGenerator."""
        return cast("DeltaGenerator", self)
