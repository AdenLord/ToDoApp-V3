import Task from "./Task";
import Col from 'react-bootstrap/Col';

const TaskBox = ({tasks, setTasks}) => {
    return (
        <div id='taskBox'>
            { tasks.map((task) => (
            <Task
                key={task.id}
                title = {task.title}
                text = {task.text}
            /> 
            )) }
        </div>
     );
}
 
export default TaskBox;