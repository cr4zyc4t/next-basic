import { TABLE_SET_DATA, TABLE_ADD_ITEM } from "../actions/table";
import { createReducer } from "../utils/common";

const initialState = {
  data: [],
};
const tableReducer = createReducer(initialState, {
  [TABLE_SET_DATA]: (state, { data }) => {
    return {
      ...state,
      data,
    };
  },
  [TABLE_ADD_ITEM]: (state, { item, length }) => ({
    ...state,
    data: [
      item,
      ...state.data,
    ].slice(0, length),
  }),
});

export default tableReducer;