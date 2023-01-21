import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

import * as types from "./actionTypes";

const Get_user_req_fn = () => {
  return { type: types.getuser_register_request };
};

const Get_user_register_succ_fn = (payload) => {
  return { type: types.getuser_register_success, payload: payload };
};

const Get_user_register_error_fn = (payload) => {
  return { type: types.getuser_register_failure, payload };
};

const get_login_req_fn = () => {
  return { type: types.LOGIN_REQ };
};
const get_login_succ_fn = (token) => {
  return { type: types.LOGIN_SUCC, payload: token };
};
const get_login_failure_fn = () => {
  return { type: types.LOGIN_FAILURE };
};

const Login_handeler = (payload) => (dispatch) => {
  dispatch(get_login_req_fn());
  return axios
    .post("http://localhost:8080/user/login", payload)
    .then((res) => {
       
      dispatch(get_login_succ_fn(res.data.accesstoken))
    
    })
    .catch((err) => {
      console.log(err,"error");
      dispatch(get_login_failure_fn());
    });
};

const Register = (payload) => (dispatch) => {
  dispatch(Get_user_req_fn());
  return axios
    .post("http://localhost:8080/user/register", payload)
    .then((res) => {
      console.log(res.data.msg);

      dispatch(Get_user_register_succ_fn(res.data.msg));
    })
    .catch((err) => {
     

      dispatch(Get_user_register_error_fn(err.response.data.err));
    });
};

export {
  Get_user_register_error_fn,
  Get_user_register_succ_fn,
  Get_user_req_fn,
  Register,
  Login_handeler,
};
