import { call, put, delay, take, fork, cancel, race, cancelled } from "redux-saga/effects";
import { TABLE_DATA_REQ_START, tableAddItem, tableDataRequestStart, TABLE_DATA_REQ_STOP, tableDataRequestStop } from "../actions/table";
import axios from "axios";

function* makeTableDataRequest(length) {
  let response = null;
  response = yield call(axios, {
    url: "api/table/new-item",
    method: "get",
    responseType: "json",
  });
  const newItem = {
    ...response.data,
  };
  yield put(tableAddItem(newItem, length));
}

function* startRequestData({ payload: { length = 50, interval = 500 } }) {
  let lastRequestTask = null;
  while (true) {
    if (lastRequestTask) {
      yield cancel(lastRequestTask); // cancel is no-op if the task has already terminated
    }
    try {
      lastRequestTask = yield call(makeTableDataRequest, length);
    } catch (error) {
      alert(`${error.name} ${error.message}`);
      break;
    }

    yield delay(interval);
  }
}

export default function* watchTableDataRequest() {
  // const lastRequestTask = null;
  while (true) {
    const action = yield take(TABLE_DATA_REQ_START);
    yield race({
      task: call(startRequestData, action),
      cancel: take(TABLE_DATA_REQ_STOP),
    });
  }
}