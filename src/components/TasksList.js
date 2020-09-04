import React from 'react';
import Task from "./Task";
const TasksList = (props) => {
    return (
         <div>
          <div className="card-header text-uppercase text-center font-weight-bold header" >
           <h4>{props.status}</h4>
          </div>
         {props.tasks.map(task=>{
           return( <Task key={task.id} task={task} onChangeStatus={props.onChangeStatus}   onRemoveTask={props.onRemoveTask}/>)
         })}
            </div>
         
    );
};

export default TasksList;
