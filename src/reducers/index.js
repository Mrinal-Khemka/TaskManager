import { EDIT_TASK,CREATE_TASK,REMOVE_TASK} from "../actions/types";

const initialState = [
    {
        id:1,
        title:"react application",
        description:" application to manage task",
        status:"UnStarted"
    }
];
const tasks=(state={tasks: initialState },action)=>{
const {payload}= action;
  switch(action.type){
      case EDIT_TASK:{
        return{
            tasks:state.tasks.map(task=>{
                        if(task.id===payload.id){
                            return Object.assign({},task,payload.params)
                        }
                        return task;
                    })
        }  
      }
      case CREATE_TASK:{
          return{
              tasks:state.tasks.concat(action.payload)
          }
      }
      case REMOVE_TASK:{
          return{
              tasks:state.tasks.filter(task => task.id!==action.id)
          }
      }
      default:
          return state;
  }
    
};
export default tasks;