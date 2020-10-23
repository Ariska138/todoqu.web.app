import React from 'react';

const Task = ({task}) => {
    return (
        <tr>
      <th scope="row">{task.task}</th>
      <td>2020/10/22</td>
      <td><span className="material-icons" style={{cursor:"pointer"}}>
check_circle</span></td>
      <td><span className="material-icons text-danger" style={{cursor:"pointer"}}>
delete
</span></td>
    </tr>
    );
}

export default Task;