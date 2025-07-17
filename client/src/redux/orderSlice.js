import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getorder = createAsyncThunk("order/get", async () => {
  try {
    let result = await axios.get("http://localhost:5000/order/");
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const addorder = createAsyncThunk("order/add", async (neworder) => {
  try {
    let result = await axios.post("http://localhost:5000/order/add", neworder);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const deleteorder = createAsyncThunk("order/delete", async (id) => {
  try {
    let result = await axios.delete(`http://localhost:5000/order/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const editorder = createAsyncThunk(
  "order/edit",
  async ({ id, edited }) => {
    try {
      let result = await axios.put(`http://localhost:5000/order/${id}`, edited);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  orderlist: null,
  status: null,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getorder.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getorder.fulfilled, (state, action) => {
        state.status = "success";
        state.orderlist = action.payload.data.orders;
      })
      .addCase(getorder.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(addorder.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addorder.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(addorder.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(deleteorder.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteorder.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(deleteorder.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(editorder.pending, (state) => {
        state.status = "pending";
      })
      .addCase(editorder.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(editorder.rejected, (state) => {
        state.status = "fail";
      });
  },
});

// Action creators are generated for each case reducer function

export default orderSlice.reducer;