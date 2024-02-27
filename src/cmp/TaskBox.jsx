import Task from "./Task";
import shortid from 'shortid';

const TaskBox = ({tasks, setTasks}) => {
    return ( 
        <div id="taskBox">
            { tasks.map((task) => (
               <Task
                key={shortid.generate()}
                title = {task.title}
                text = {task.text}
               /> 
               )) }
        </div>
     );
}
 
export default TaskBox;