import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import makeStore from "../store";

function ReduxContainer({ children, store }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

const WithRedux = withRedux(makeStore)(ReduxContainer);
export default WithRedux;