import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
//redux
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './Reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
//firebase
import {getFirebase, ReactReduxFirebaseProvider} from "react-redux-firebase";
import firebaseConfig from "./config/firebaseConfig";
import {createFirestoreInstance} from "redux-firestore";

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({getFirebase})));

//react-redux-firebase props
const rrfProps = {
  firebaseConfig,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
