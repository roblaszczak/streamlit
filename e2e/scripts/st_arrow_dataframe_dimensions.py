import streamlit as st
import numpy as np
import pandas as pd

# Explicitly seed the RNG for deterministic results
np.random.seed(0)

data = np.random.randn(100, 100)

df = pd.DataFrame(data)
st._arrow_dataframe(df)
st._arrow_dataframe(df, 250, 150)
st._arrow_dataframe(df, width=250)
st._arrow_dataframe(df, height=150)
st._arrow_dataframe(df, 5000, 5000)
