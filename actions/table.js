export const TABLE_SET_DATA = "TABLE_SET_DATA";
export const tableSetData = (data) => ({
  type: TABLE_SET_DATA,
  payload: {
    data,
  },
});

export const TABLE_DATA_REQ_START = "TABLE_DATA_REQ";
export const tableDataRequestStart = (length, interval) => ({
  type: TABLE_DATA_REQ_START,
  payload: {
    length,
    interval,
  },
});

export const TABLE_DATA_REQ_STOP = "TABLE_DATA_REQ_STOP";
export const tableDataRequestStop = () => ({
  type: TABLE_DATA_REQ_STOP,
});

export const TABLE_ADD_ITEM = "TABLE_ADD_ITEM";
export const tableAddItem = (item, length) => ({
  type: TABLE_ADD_ITEM,
  payload: {
    item,
    length,
  },
});
