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

// Renders a modal form for adding a new user, manages form state, and handles modal
export const addorder = createAsyncThunk("order/add", async (neworder) => {
  try {
    let result = await axios.post("http://localhost:5000/order/add", neworder);
    return result;
  } catch (error) {
    console.log(error);
  }
});

// Deletes an order by ID, handling the request and response
export const deleteorder = createAsyncThunk("order/delete", async (id) => {
  try {
    let result = await axios.delete(`http://localhost:5000/order/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

// Edits an existing order by ID, sending updated data to the server
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

// Initial state for the order slice, including order list and status
const initialState = {
  orderlist: null,
  status: null,
};

// Redux slice for managing order state, including actions and reducers
// It handles fetching, adding, deleting, and editing orders with appropriate status updates
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // handling get actions
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

      // handling add actions
      .addCase(addorder.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addorder.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(addorder.rejected, (state) => {
        state.status = "fail";
      })

      // handling delete actions
      .addCase(deleteorder.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteorder.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(deleteorder.rejected, (state) => {
        state.status = "fail";
      })

      // handling edit actions
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