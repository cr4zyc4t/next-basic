import { COUNTER_DECREASE, COUNTER_INCREASE } from "../actions/counter";

export default function counterReducer(state = 0, action) {
  switch (action.type) {
    case COUNTER_DECREASE:
      return state - 1;
    case COUNTER_INCREASE:
      return state + 1;
    default:
      return state;
  }
}