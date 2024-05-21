import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  users: [],
  error: null,
  u_postLoading: false,
  u_getLoading: false,
  u_updateLoading: false,
  u_logoutLoading: false,
  u_deleteLoading: false,
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Post User
    userPostStart: (state) => {
      state.u_postLoading = true;
    },
    userPostSuccess: (state, action) => {
      state.u_postLoading = false;
      state.currentUser = action.payload;
    },
    userPostFailure: (state, action) => {
      state.u_postLoading = false;
      state.error = action.payload;
    },

    // Update User
    userUpdateStart: (state) => {
      state.u_updateLoading = true;
    },
    userUpdateSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.u_updateLoading = false;
    },
    userUpdateFailure: (state, action) => {
      state.error = action.payload;
      state.u_updateLoading = false;
    },

    // Get User
    userGetStart: (state) => {
      state.u_getLoading = true;
    },
    userGetSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.u_getLoading = false;
    },
    userGetFailure: (state, action) => {
      state.error = action.payload;
      state.u_getLoading = false;
    },

    // Logout User
    userLogoutStart: (state) => {
      state.u_logoutLoading = true;
    },
    userLogoutSuccess: (state, action) => {
      state.currentUser = null;
      state.error = null;
      state.u_logoutLoading = false;
    },
    userLogoutFailure: (state, action) => {
      state.error = action.payload;
      state.u_logoutLoading = false;
    },

    // Delete User
    userDeleteStart: (state) => {
      state.u_deleteLoading = true;
    },
    userDeleteSuccess: (state) => {
      state.currentUser = null;
      state.error = null;
      state.u_deleteLoading = false;
    },
    userDeleteFailure: (state, action) => {
      state.error = action.payload;
      state.u_deleteLoading = false;
    },

    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const {
  userPostStart,
  userPostSuccess,
  userPostFailure,

  userUpdateStart,
  userUpdateSuccess,
  userUpdateFailure,

  userGetStart,
  userGetSuccess,
  userGetFailure,

  userLogoutStart,
  userLogoutSuccess,
  userLogoutFailure,

  userDeleteStart,
  userDeleteSuccess,
  userDeleteFailure,
  clearErrors,
} = userReducer.actions;

export default userReducer.reducer;
