import createSagaMiddleware from "redux-saga";
import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import rootSagas from "./sagas";

/**
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
* @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR 
*/
const makeStore = (initialState, { isServer }) => {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = !isServer && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    name: "Next Basic",
    trace: true,
    traceLimit: 10,
  }) : compose;
  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(
      thunk,
      sagaMiddleware,
    )
  ));

  sagaMiddleware.run(rootSagas);

  return store;
};

export default makeStore;