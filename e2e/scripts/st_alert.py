import streamlit as st

st.error("This is an error")
st.warning("This is a warning")
st.info("This is an info message")
st.success("This is a success message")

st.error("This is an error", icon="🚨")
st.warning("This is a warning", icon="⚠️")
st.info("This is an info message", icon="👉🏻")
st.success("This is a success message", icon="✅")

# This is here so we can test the distance beween the success message and the
# "Done!" text below.
st.write("Done!")
