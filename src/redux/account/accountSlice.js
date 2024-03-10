const initialStateForAccount = {
  balance: 0,
  whyLoan: "",
  loan: 0,
};
export const accountReducer = (state = initialStateForAccount, action) => {
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
      //   if (state.loan > 0) return state;
      return {
        ...state,
        balance: state.balance + action.payload.amount,
        loan: state.loan + action.payload.amount,
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

export const depositMoney = (amount) => {
  return {
    type: "account/deposit",
    payload: amount,
  };
};
export const withdrawMoney = (amount) => {
  return {
    type: "account/withdraw",
    payload: amount,
  };
};
export const loanRequest = (amount, loanNeededFor, payLoanTime = 3) => {
  return {
    type: "account/loanRequest",
    payload: {
      amount,
      loanNeededFor,
      payLoanTime,
    },
  };
};
export const payLoan = () => {
  return { type: "account/payLoan" };
};
