import React from "react";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
import MainLayout from "../layouts/main";
import createSagaMiddleware from "redux-saga";
import rootSagas from "../sagas";

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

class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </Provider>
        <style jsx global>
          {`
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
              "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
              sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
              monospace;
          }
          `}
        </style>
      </Container>
    );
  }

}

export default withRedux(makeStore)(MyApp);