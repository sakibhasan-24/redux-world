// import { configureStore } from "@reduxjs/toolkit";
// import { reducerForCustomer } from "../customer/customerSlice";
// import { accountReducer } from "../account/accountSlice";

// const store = configureStore({
//   reducer: {
//     account: accountReducer,
//     customer: reducerForCustomer,
//   },
// });

// // const store = createStore(rootReducer, applyMiddleware(thunk));
// export default store;
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "../account/accountSlice"; // Import the account reducer
import customerReducer from "../customer/customerSlice"; // Import the customer reducer

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer, // Add the customer reducer
  },
});

export default store;
