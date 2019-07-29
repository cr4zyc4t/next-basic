import { all, fork } from "redux-saga/effects";
import watchTableDataRequest from "./watchTableDataRequest";

function* rootSagas() {
  yield all([
    fork(watchTableDataRequest),
  ]);
}

export default rootSagas;