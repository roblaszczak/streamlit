import pandas as pd
import streamlit as st

options = ("female", "male")
i1 = st.radio("radio 1", options, 1)
st.write("value 1:", i1)

i2 = st.radio("radio 2", options, 0, format_func=lambda x: x.capitalize())
st.write("value 2:", i2)

i3 = st.radio("radio 3", [])
st.write("value 3:", i3)

i4 = st.radio("radio 4", options, disabled=True)
st.write("value 4:", i4)

i5 = st.radio("radio 5", options, horizontal=True)
st.write("value 5:", i5)

i6 = st.radio("radio 6", pd.DataFrame({"foo": list(options)}))
st.write("value 6:", i6)


if st._is_running_with_streamlit:

    def on_change():
        st.session_state.radio_changed = True

    st.radio("radio 7", options, 1, key="radio7", on_change=on_change)
    st.write("value 7:", st.session_state.radio7)
    st.write("radio changed:", "radio_changed" in st.session_state)
