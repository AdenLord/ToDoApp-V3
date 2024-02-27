import Task from "./Task";

const TaskBox = ({tasks, setTasks}) => {
    return ( 
        <div>
            { tasks.map((task) => (
               <Task
                title = {task.title}
                text = {task.text}
               /> 
               )) }
        </div>
     );
}
 
export default TaskBox;