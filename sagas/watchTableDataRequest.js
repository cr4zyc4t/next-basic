import { takeLatest, call, put, delay } from "redux-saga/effects";
import { TABLE_DATA_REQ, tableAddItem, tableDataRequest } from "../actions/table";
import axios from "axios";

function* makeTableDataRequest({ payload: { length = 50, interval = 500 } }) {
  let response = null;
  try {
    response = yield call(axios, {
      url: "api/table/new-item",
      method: "get",
      responseType: "json",
    });
  } catch (error) {
    alert(`${error.name} ${error.message}`);
    return;
  }
  const newItem = {
    ...response.data,
  };
  yield put(tableAddItem(newItem, length));
  yield delay(interval);
  yield put(tableDataRequest(length, interval));
}

export default function* watchTableDataRequest() {
  yield takeLatest(TABLE_DATA_REQ, makeTableDataRequest);
}