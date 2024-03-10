import { createStore } from "redux";

const initialState = {
  balance: 0,
  whyLoan: "",
  loan: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case "LOAN_REQUESTED":
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,

        balance: state.balance - action.payload,
      };
    case "account/loanRequest":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        whyLoan: action.payload.loanNeededFor,
        payLoanTime: action.payload.payLoanTime,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        balance: state.balance - state.loan,
        whyLoan: "",
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
store.dispatch({
  type: "account/deposit",
  payload: 100,
});
// console.log(store);
console.log(store.getState());

store.dispatch({
  type: "account/loanRequest",
  payload: {
    amount: 12000,
    loanNeededFor: "Buy A car",
    payLoanTime: 2,
  },
});

console.log(store.getState());
