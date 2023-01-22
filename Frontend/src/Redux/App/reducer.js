import * as types from "./actionTypes";

const intstate = {
  isLoading: false,
  isError: false,
  data: [],
};

const reducer = (state = intstate, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.GETDATA_req:
      return { ...state, isLoading: true, isError: false, data: [] };

    case types.GETDATASUCCESS_succ:
      return { ...state, isLoading: false, isError: false, data: payload };

    case types.GETDATAERROR_err:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};

export { reducer };
