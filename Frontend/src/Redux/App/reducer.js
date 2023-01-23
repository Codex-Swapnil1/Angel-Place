import * as types from "./actionTypes";

const intstate = {
  isLoading: false,
  isError: false,
  data: [],
  cart:[]
};

const reducer = (state = intstate, action) => {
  const { payload, type } = action;

  switch (type) {
    //get data
    case types.GETDATA_req:
      return { ...state, isLoading: true, isError: false, data: [] };

    case types.GETDATASUCCESS_succ:
      return { ...state, isLoading: false, isError: false, data: payload };

    case types.GETDATAERROR_err:
      return { ...state, isLoading: false, isError: true };

    // add product into bag -
    case types.ADD_PRODUCT_REQUEST:
      return { ...state, isLoading: true };

    case types.ADD_PRODUCT_SUCCESS:

    console.log(payload, "payloaddd")

      return { ...state, isLoading: false, data: payload };

    case types.ADD_PRODUCT_ERROR:
      return { ...state, isLoading: false, isError: true };
    
    default:
      return state;
  }
};

export { reducer };
