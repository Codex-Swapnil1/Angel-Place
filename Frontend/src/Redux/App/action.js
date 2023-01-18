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
  return (dispatch) => {
    dispatch(getdatareq_fn());

   
    return axios
      .get("https://jsonplaceholder.typicode.com/photos", payload)
      .then((res) => {
        dispatch(getdatasucc_fn(res.data));
      })
      .catch((error) => {
        dispatch(getdataerror_fn());
      });
  };
}

export { getdataerror_fn, getdatareq_fn, getdatasucc_fn, getprData };
