import React from 'react';
import { combineReducers } from 'redux';
import {FirebaseReducer, firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";

const rootReducer = combineReducers({
    firebase: FirebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer;