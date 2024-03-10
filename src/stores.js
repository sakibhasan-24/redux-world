import { combineReducers, createStore } from "redux";

const initialStateForAccount = {
  balance: 0,
  whyLoan: "",
  loan: 0,
};

const initialStateForCustomer = {
  fullName: "",
  email: "",
  phnNo: "",
  createdAt: "",
};
const accountReducer = (state = initialStateForAccount, action) => {
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
        balance: state.balance + action.payload.amount,
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

const reducerForCustomer = (state = initialStateForCustomer, action) => {
  switch (action.type) {
    case "customer/create":
      return {
        ...state,
        fullName: action.payload.fullName,
        email: action.payload.email,
        phnNo: action.payload.phnNo,
        createdAt: action.payload.createdAt,
      };
    case "customer/update":
      return {
        ...state,
        fullName: action.payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  account: accountReducer,
  customer: reducerForCustomer,
});
const store = createStore(rootReducer);
// store.dispatch({
//   type: "account/deposit",
//   payload: 100,
// });
// console.log(store);
//console.log(store.getState());

const depositMoney = (amount) => {
  return {
    type: "account/deposit",
    payload: amount,
  };
};
const withdrawMoney = (amount) => {
  return {
    type: "account/withdraw",
    payload: amount,
  };
};
const loanRequest = (amount, loanNeededFor, payLoanTime) => {
  return {
    type: "account/loanRequest",
    payload: {
      amount,
      loanNeededFor,
      payLoanTime,
    },
  };
};
const payLoan = () => {
  return { type: "account/payLoan" };
};

// action for customer

const createAccount = (
  fullName,
  email,
  phnNo,
  createdAt = new Date().toISOString()
) => {
  return {
    type: "customer/create",
    payload: {
      fullName,
      email,
      phnNo,
      createdAt,
    },
  };
};

const updateCustomer = (fullName) => {
  return {
    type: "customer/update",
    payload: fullName,
  };
};
store.dispatch(depositMoney(10));

store.dispatch(withdrawMoney(1));
store.dispatch(loanRequest(2, "home", "3 months"));

store.dispatch(payLoan());
store.dispatch(createAccount("abc", "abc@gmail.com", "9876543210"));
store.dispatch(updateCustomer("xyz"));
console.log(store.getState());
