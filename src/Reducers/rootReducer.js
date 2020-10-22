import React from 'react';
import { combineReducers } from 'redux';
import {FirebaseReducer, firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
    firebase: FirebaseReducer,
    firestore: firestoreReducer,
    task: taskReducer
});

export default rootReducer;