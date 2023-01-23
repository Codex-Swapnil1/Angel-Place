import axios from "axios";
import * as types from "./actionTypes";

const getdatareq_fn = () => {
  return { type: types.GETDATA_req };
};

const getdatasucc_fn = (payload) => {
  return { type: types.GETDATASUCCESS_succ, payload };
};

const getdataerror_fn = () => {
  return { type: types.GETDATAERROR_err };
};

function getprData(payload) {
  console.log(payload)
  return (dispatch) => {
    dispatch(getdatareq_fn());

    return axios
      .get(`http://localhost:8080/api/products`, payload)
      .then((res) => {
        dispatch(getdatasucc_fn(res.data.products));
      })
      .catch((error) => {
        dispatch(getdataerror_fn());
      });
  };
}

//add to cart function
export const addProductData = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_PRODUCT_REQUEST });
  return axios
    .post('http://localhost:8080/user/addcart', payload, {
      headers: { "Content-Type": "application/json",
      Authorization:( localStorage.getItem("token") )}

    })
    .then((res) => {
      console.log(res.data.userinfo,"user")
      dispatch({ type: types.ADD_PRODUCT_SUCCESS, payload: res.data.userinfo });
      // console.log(res.data)
    })
    .catch((err) => dispatch({ type: types.ADD_PRODUCT_ERROR }));
};

export { getdataerror_fn, getdatareq_fn, getdatasucc_fn, getprData };
