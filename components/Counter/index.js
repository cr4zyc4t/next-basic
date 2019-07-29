import Counter from "./Counter";
import { counterIncrease, counterDecrease } from "../../store/actions/counter";
import { connect } from "react-redux";

const mapState = (state) => ({
  counter: state.counter,
});

const mapAction = {
  counterIncrease,
  counterDecrease,
};

export default connect(mapState, mapAction)(Counter);
