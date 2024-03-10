const initialStateForCustomer = {
  fullName: "",
  email: "",
  phnNo: "",
  createdAt: "",
};

export const reducerForCustomer = (state = initialStateForCustomer, action) => {
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
export const createAccount = (
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

export const updateCustomer = (fullName) => {
  return {
    type: "customer/update",
    payload: fullName,
  };
};
