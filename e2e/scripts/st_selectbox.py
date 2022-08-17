import streamlit as st

options = ("male", "female")
i1 = st.selectbox("selectbox 1", options, 1)
st.write("value 1:", i1)

i2 = st.selectbox("selectbox 2", options, 0, format_func=lambda x: x.capitalize())
st.write("value 2:", i2)

i3 = st.selectbox("selectbox 3", [])
st.write("value 3:", i3)

more_options = [
    "e2e/scripts/components_iframe.py",
    "e2e/scripts/st_warning.py",
    "e2e/scripts/st_container.py",
    "e2e/scripts/st_dataframe_sort_column.py",
    "e2e/scripts/app_hotkeys.py",
    "e2e/scripts/st_info.py",
    "e2e/scripts/st_echo.py",
    "e2e/scripts/st_json.py",
    "e2e/scripts/st_experimental_get_query_params.py",
    "e2e/scripts/st_markdown.py",
    "e2e/scripts/st_color_picker.py",
    "e2e/scripts/st_expander.py",
]
i4 = st.selectbox("selectbox 4", more_options, 0)
st.write("value 4:", i4)

i5 = st.selectbox("selectbox 5", options, disabled=True)
st.write("value 5:", i5)

if st._is_running_with_streamlit:

    def on_change():
        st.session_state.selectbox_changed = True

    st.selectbox("selectbox 6", options, 1, key="selectbox6", on_change=on_change)
    st.write("value 6:", st.session_state.selectbox6)
    st.write("select box changed:", "selectbox_changed" in st.session_state)
