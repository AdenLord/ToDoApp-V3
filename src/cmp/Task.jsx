import { $ } from 'react-jquery-plugin'
import { useState } from 'react';

const Task = ({text, title}) => {
    $(document).ready(function(){
        const taskdiv =   $("#taskBox")
        $('.taskDeleteBtn').click(function(e){
            e.stopPropagation();
            $(this). parentsUntil(taskdiv).remove();
        });
    });

    const doneTaskHandler = (e) => {
        e.stopPropagation();
        setDoneTask(!doneTask)
    }

    const [select , setSelect] = useState("false");
    const [doneTask , setDoneTask ] = useState("false");

    return ( 
        <div done={doneTask ? 'false' : 'true'} 
        onClick={()=> setSelect(!select)}  
        className={select ? "task" : " select task"}>

            <div className='textBox'>
                <h5 >{title}</h5>
                <p>{text}</p>
            </div>

            <div className='btnBox'>
                <input className='mybtn taskDeleteBtn' type="button" value="delete" />

                <input onClick={ doneTaskHandler }
                 className={doneTask ? "mybtn taskDoneBtn" : "finTask mybtn taskDoneBtn"}  
                  type="button"
                 value={doneTask ? "undone" : "done"} />
            </div>
        </div>
     );
}
 
export default Task;
