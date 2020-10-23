import React from "react";
// format date
import moment from "moment";
// remove row
import { removeTask } from "../../actions/taskActions";
// update checklist
import Check from "./Check";

import { connect } from "react-redux";


const Task = ({ task, removeTask }) => {
  const handleRemove = (task) => {
    removeTask(task);
  };

  return (
    <tr>
      <th scope="row">{task.task}</th>
      <td>{moment(task.date.toDate()).calendar()}</td>
      <td>
        <Check
        checked={task.checked}
        />
      </td>
      <td>
        <span
          className="material-icons text-danger"
          style={{ cursor: "pointer" }}
          onClick={() => handleRemove(task)}
        >
          delete
        </span>
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTask: (task) => dispatch(removeTask(task)),
  };
};

export default connect(null, mapDispatchToProps)(Task);
