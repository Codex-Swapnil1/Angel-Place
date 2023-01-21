import * as types from "./actionTypes";

const intstate = {
  isLoading: false,
  isError: false,
  token: "",
  data: [],
  message:"",
  error:""
};

const reducer = (state = intstate, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.getuser_register_request:
     
      return { ...state, isLoading: true, isError: false, data: [] };

    case types.getuser_register_success:
      return { ...state, isLoading: false, isError: false, message: payload };

    case types.getuser_register_failure:
      return { ...state, isLoading: false, isError: true ,error:payload };


      case types.LOGIN_REQ:return {...state, isLoading:true,isError:false,token:""}

      case types.LOGIN_SUCC:return {...state, isLoading:false , isError:false , token:payload}

      case types.LOGIN_FAILURE:return {...state, isLoading:false ,isError:true, }

    default:
      return state;
  }
};

export { reducer };
