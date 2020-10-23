import React from 'react'; //imr <tab>
import Task from './Task';
//read data form firebase
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const Tasks = () => { // slr <tab>
    return (
        <table className="table table-striped table-dark">
  <thead>
    <tr className="text-info">
      <th scope="col">Tasks</th>
      <th scope="col">Added On</th>
      <th scope="col">Status</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <Task/>
  </tbody>
</table>
    );
}

//read data
const mapStateToProps = state => {
  console.log(state);
  const tasks = state.firestore.ordered.tasks;
  return {
    tasks
  }
}

export default compose(connect(mapStateToProps), firestoreConnect(ownProps => [{
  collection: "tasks",
  oderby: ["date","desc"]
}]))(Tasks);