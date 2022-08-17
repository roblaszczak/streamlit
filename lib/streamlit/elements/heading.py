from typing import cast, Optional, TYPE_CHECKING
from streamlit.proto.Heading_pb2 import Heading as HeadingProto
from streamlit.string_util import clean_text

if TYPE_CHECKING:
    import sympy

    from streamlit.delta_generator import DeltaGenerator


class HeadingMixin:
    def header(self, body: str, anchor: Optional[str] = None) -> "DeltaGenerator":
        """Display text in header formatting.

        Parameters
        ----------
        body : str
            The text to display.

        anchor : str
            The anchor name of the header that can be accessed with #anchor
            in the URL. If omitted, it generates an anchor using the body.

        Example
        -------
        >>> st.header('This is a header')

        """
        header_proto = HeadingProto()
        if anchor is not None:
            header_proto.anchor = anchor
        header_proto.body = clean_text(body)
        header_proto.tag = "h2"
        return self.dg._enqueue("heading", header_proto)

    def subheader(self, body: str, anchor: Optional[str] = None) -> "DeltaGenerator":
        """Display text in subheader formatting.

        Parameters
        ----------
        body : str
            The text to display.

        anchor : str
            The anchor name of the header that can be accessed with #anchor
            in the URL. If omitted, it generates an anchor using the body.

        Example
        -------
        >>> st.subheader('This is a subheader')

        """
        subheader_proto = HeadingProto()
        if anchor is not None:
            subheader_proto.anchor = anchor
        subheader_proto.body = clean_text(body)
        subheader_proto.tag = "h3"

        return self.dg._enqueue("heading", subheader_proto)

    def title(self, body: str, anchor: Optional[str] = None) -> "DeltaGenerator":
        """Display text in title formatting.

        Each document should have a single `st.title()`, although this is not
        enforced.

        Parameters
        ----------
        body : str
            The text to display.

        anchor : str
            The anchor name of the header that can be accessed with #anchor
            in the URL. If omitted, it generates an anchor using the body.

        Example
        -------
        >>> st.title('This is a title')

        """
        title_proto = HeadingProto()
        if anchor is not None:
            title_proto.anchor = anchor
        title_proto.body = clean_text(body)
        title_proto.tag = "h1"

        return self.dg._enqueue("heading", title_proto)

    @property
    def dg(self) -> "DeltaGenerator":
        """Get our DeltaGenerator."""
        return cast("DeltaGenerator", self)
