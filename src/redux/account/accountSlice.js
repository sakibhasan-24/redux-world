// import { createSlice } from "@reduxjs/toolkit";

// const initialStateForAccount = {
//   balance: 0,
//   whyLoan: "",
//   loan: 0,
// };

// export const accountReducer = (state = initialStateForAccount, action) => {
//   switch (action.type) {
//     // case "LOAN_REQUESTED":
//     case "account/deposit":
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//       };
//     case "account/withdraw":
//       return {
//         ...state,

//         balance: state.balance - action.payload,
//       };
//     case "account/loanRequest":
//       //   if (state.loan > 0) return state;
//       return {
//         ...state,
//         balance: state.balance + action.payload.amount,
//         loan: state.loan + action.payload.amount,
//         whyLoan: action.payload.loanNeededFor,
//         payLoanTime: action.payload.payLoanTime,
//       };
//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         balance: state.balance - state.loan,
//         whyLoan: "",
//       };

//     default:
//       return state;
//   }
// };

// export const depositMoney = (amount) => {
//   //   console.log(amount, currency);

//   return {
//     type: "account/deposit",
//     payload: amount,
//   };
// };
// export const withdrawMoney = (amount) => {
//   return {
//     type: "account/withdraw",
//     payload: amount,
//   };
// };
// export const loanRequest = (amount, loanNeededFor, payLoanTime = 3) => {
//   return {
//     type: "account/loanRequest",
//     payload: {
//       amount,
//       loanNeededFor,
//       payLoanTime,
//     },
//   };
// };
// export const payLoan = () => {
//   return { type: "account/payLoan" };
// };

import { createSlice } from "@reduxjs/toolkit";

const initialStateForAccount = {
  balance: 0,
  whyLoan: "",
  loan: 0,
};

const accountSlice = createSlice({
  name: "account",
  initialState: initialStateForAccount,
  reducers: {
    depositMoney: (state, action) => {
      state.balance += action.payload;
    },
    withdrawMoney: (state, action) => {
      state.balance -= action.payload;
    },
    loanRequest: (state, action) => {
      state.balance += action.payload.amount;
      state.loan += action.payload.amount;
      state.whyLoan = action.payload.loanNeededFor;
      state.payLoanTime = action.payload.payLoanTime;
    },
    payLoan: (state) => {
      state.loan = 0;
      state.balance -= state.loan;
      state.whyLoan = "";
    },
  },
});

export const { depositMoney, withdrawMoney, loanRequest, payLoan } =
  accountSlice.actions;
export default accountSlice.reducer;
