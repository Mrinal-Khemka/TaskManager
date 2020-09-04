import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const TASKS_STATUSES=["UnStarted","Active","Completed"];
const Task = (props) => {

const  onChangeStatus=(e)=>{
        props.onChangeStatus(props.task.id,e.target.value)
    }
    const onRemoveTask=()=>{
        props.onRemoveTask(props.task.id)
    }
    return (
        <div>
        <form onChange={onChangeStatus} >
         <br/>
          <select className="form-control" defaultValue={props.task.status} >
             {TASKS_STATUSES.map(status=>(
              <option  value={status} key={status}>{status}</option>
             ))} ;
          </select>
        </form>
            <h5 className="card-title mt-3 text-uppercase px-2 " >{props.task.title}</h5>
            <p className="card-text mb-3 text-muted font-weight-bold px-2" >{props.task.description}</p>
           <FontAwesomeIcon className=" float-right m-3" style={{color :"orange",fontSize:"20px"}} icon={faTrash} onClick={onRemoveTask}/>
        </div>
    )
}
export default Task
