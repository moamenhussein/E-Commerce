import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchData = createAsyncThunk("bankSlice/fetchData", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});
export const bankSlice = createSlice({
  initialState: [],
  name: "bankSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      return state =action.payload
    })
  },
});
export const {} = bankSlice.actions;
export default bankSlice.reducer;
