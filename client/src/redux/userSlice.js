import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// This file contains the user slice for Redux, which manages user-related state and actions.
// restful API consumption
export const userRegister = createAsyncThunk("user/register", async (user) => {
  try {
    let response = await axios.post("http://localhost:5000/user/register", user);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const userlogin = createAsyncThunk("user/login", async (user) => {
  try {
    let response = await axios.post("http://localhost:5000/user/login", user);
    return await response;
  } catch (error) {
    console.log(error);
  }
});

export const userCurrent = createAsyncThunk("user/current", async () => {
  try {
    let response = await axios.get("http://localhost:5000/user/current", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return await response;
  } catch (error) {
    console.log(error);
  }
});

export const deleteuser = createAsyncThunk("user/delete", async (id) => {
  try {
    let result = await axios.delete(`http://localhost:5000/user/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const getuser = createAsyncThunk("user/get", async () => {
  try {
    let result = await axios.get("http://localhost:5000/user/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const edituser = createAsyncThunk("user/edit", async ({ id, edited }) => {
    try {
      let result = await axios.put(`http://localhost:5000/user/${id}`, edited);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);





// Initial state for the user slice
// It contains the user object, status of the request, and a list of users.
const initialState = {
  user: null,
  status: null,
  userlist: []
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },




// Extra reducers to handle the async actions defined above
// These reducers update the state based on the status of the async actions.
extraReducers: (builder) => {
    builder
    // register
      .addCase(userRegister.pending, (state) => {
        state.status = "pending";
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.status = "successsss";
      state.user = action.payload.data.newUserToken;
      localStorage.setItem("token", action.payload.data.token);
      })
      .addCase(userRegister.rejected, (state) => {
        state.status = "fail";
      })

      // login
    .addCase(userlogin.pending, (state) => {
        state.status = "pending";
      })
      .addCase(userlogin.fulfilled, (state, action) => {
          state.status = "successsss";
      state.user = action.payload.data.user;
      localStorage.setItem("token", action.payload.data.token);
      })
      .addCase(userlogin.rejected, (state) => {
        state.status = "fail";
      })

      // current user
          .addCase(userCurrent.pending, (state) => {
        state.status = "pending";
      })
      .addCase(userCurrent.fulfilled, (state, action) => {
          state.status = "successsss";
      state.user = action.payload?.data.user;
      })
      .addCase(userCurrent.rejected, (state) => {
        state.status = "fail";
      })

      // get user
      .addCase(getuser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getuser.fulfilled, (state, action) => {
          state.status = "successsss";
      state.userlist = action.payload?.data.users;
      })
      .addCase(getuser.rejected, (state) => {
        state.status = "fail";
      })

  },
});

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions;

export default userSlice.reducer;
