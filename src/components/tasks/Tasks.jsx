import React from 'react'; //imr <tab>
import Task from './Task';


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

export default Tasks;