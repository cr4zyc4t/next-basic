import { takeLatest, call, put } from "redux-saga/effects";
import { TABLE_DATA_REQ, tableAddItem } from "../actions/table";
import axios from "axios";

function* makeTableDataRequest({ payload: { length = 50 } }) {
  let response = null;
  try {
    response = yield call(axios, {
      url: "http://localhost:4000/table/new-item",
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
}

export default function* watchTableDataRequest() {
  yield takeLatest(TABLE_DATA_REQ, makeTableDataRequest);
}