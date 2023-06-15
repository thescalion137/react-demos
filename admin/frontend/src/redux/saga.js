import { all, fork } from "redux-saga/effects";
import authSaga from "./auth/saga";
import eventSaga from "./event/saga";
import blogSaga from "./blog/saga";

export default function* rootSaga() {
  yield all([fork(authSaga), fork(eventSaga), fork(blogSaga)]);
}
