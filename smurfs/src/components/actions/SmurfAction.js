import axios from "axios";

export const FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_START";
export const FETCHING_SMURF_FAILURE = "FETCHING_SMURF_FAILURE";

export const getSmurf = () => dispatch => {
  dispatch({ type: FETCHING_SMURF_START });

  axios.get(
    "http://localhost:3333/smurfs"
      .then(res => {
        console.log("this is inside axios call in SmurfAction", res);
        dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log("err", err);
        dispatch({
          type: FETCHING_SMURF_FAILURE,
          payload: `${err.response.message} with response code ${err.response.code}`
        });
      })
  );
};
