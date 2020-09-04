import React,{useState} from 'react'
import TasksList from "./TasksList";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const TASKS_STATUSES=["UnStarted","Active","Completed"];
const TasksPage = (props) => {
    const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 const[title,setTitle]=useState("");
 const[description,setDescription]=useState("");
 const onChangeTitle=(e)=>{
     setTitle(e.target.value);
 };
 const onChangeDescription=(e)=>{
    setDescription(e.target.value);
};
const onCreateTask = (e)=>
{
 e.preventDefault();
 props.onCreateTask({
     title,
     description,
 });
 resetForms();   
}
const resetForms=()=>{
  setTitle("");
  setDescription("");
  setShow(false);
};
const renderTaskLists =() =>{
  const {tasks} =props
  return  TASKS_STATUSES.map((status,id) => {
     const statusTasks=tasks.filter((task) => task.status === status)
     return(
         <div className="card col-md-3 p-0 m-3 text-center" key={id}>
        <TasksList
         key={status}
          status={status}
           tasks={statusTasks}
           onChangeStatus={props.onChangeStatus}
           onRemoveTask={props.onRemoveTask}
            />
         </div>
     )
  })

};
    return (
        <div className="container-fluid my-5" >
           <div className="jumbotron py-2 header">
               <div className="row" >
               <div className="col-md-2">
               <button className=" main-button " onClick={handleShow} >
               <FontAwesomeIcon style={{fontSize:"20px"}} icon={faPlus}/>
               </button>
               </div>
               <div className="col-md-10">
                   <h2 className="display-4 text-center">
                   Task Manager
                   </h2>
               </div>
               </div>
                <Modal  show={show} onHide={handleClose}>
                <Modal.Header className="header"  closeButton>
                <Modal.Title style={{color:"#fff"}} >Enter new Task</Modal.Title>
                </Modal.Header>
                    <form onSubmit={onCreateTask} >
                        <Modal.Body style={{backgroundColor:"#e9ecef"}} >
                        <div className="form-group">
                                <input 
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                onChange={onChangeTitle}
                                required
                            />
                            </div>
                            <div className="form-group">
                                <textarea 
                                type="text"
                                className="form-control"
                                placeholder="Description" 
                                onChange={onChangeDescription}
                                />
                                </div>
                        </Modal.Body>
                        <Modal.Footer style={{backgroundColor:"#e9ecef"}} >
                            <Button variant="secondary" onClick={handleClose}>
                            Close
                            </Button>
                            <Button type="submit" style={{background:"#f5ba13"}} onClick={handleClose}>
                            Save Changes
                            </Button>
                        </Modal.Footer>
                    </form>
        
                </Modal>
               </div>
               <div className="row d-flex justify-content-center position-relative" style={
                  { background:"#e9ecef"}}>
                  {renderTaskLists()}
               </div>
           </div> 
    )
}

export default TasksPage
