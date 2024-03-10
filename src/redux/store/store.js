import { combineReducers, createStore } from "redux";
import { accountReducer } from "../account/accountSlice";
import { reducerForCustomer } from "../customer/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: reducerForCustomer,
});

const store = createStore(rootReducer);
export default store;
