// const initialStateForCustomer = {
//   fullName: "",
//   email: "",
//   phnNo: "",
//   createdAt: "",
// };

// export const reducerForCustomer = (state = initialStateForCustomer, action) => {
//   switch (action.type) {
//     case "customer/create":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         email: action.payload.email,
//         phnNo: action.payload.phnNo,
//         createdAt: action.payload.createdAt,
//       };
//     case "customer/update":
//       return {
//         ...state,
//         fullName: action.payload,
//       };

//     default:
//       return state;
//   }
// };
// export const createAccount = (
//   fullName,
//   email,
//   phnNo,
//   createdAt = new Date().toISOString()
// ) => {
//   return {
//     type: "customer/create",
//     payload: {
//       fullName,
//       email,
//       phnNo,
//       createdAt,
//     },
//   };
// };

// export const updateCustomer = (fullName) => {
//   return {
//     type: "customer/update",
//     payload: fullName,
//   };
// };

import { createSlice } from "@reduxjs/toolkit";

const initialStateForCustomer = {
  fullName: "",
  email: "",
  phnNo: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState: initialStateForCustomer,
  reducers: {
    createAccount(state, action) {
      //   const { fullName, email, phnNo, createdAt } = action.payload;
      //   console.log(action.payload);
      state.fullName = action.payload;
      state.email = action.payload;
      state.phnNo = action.payload;
      state.createdAt = new Date().toISOString();
    },
    updateCustomer(state, action) {
      state.fullName = action.payload;
    },
  },
});

// console.log(customerSlice);

export const { createAccount, updateCustomer } = customerSlice.actions;
export default customerSlice.reducer;
