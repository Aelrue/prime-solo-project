import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* addToy() {
  console.log("here in the addToy saga", action.payload);
  // try {
  // const config = {
  //   headers: { "Content-Type": "application/json" },
  //   withCredentials: true,
  // };

  // const response = yield axios.get("/api/addtoy", config);
  // console.log("RESPONSE", response);
  //
  //   yield axios.post("/api/addtoy", action.payload);
  //   yield put({ type: "SET_TOYS", payload: response.data });
  // } catch (error) {
  //   console.log("User get request failed", error);
  // }
}

function* addedToySaga() {
  yield takeLatest("ADD_TOY", addToy);
}

export default addedToySaga;