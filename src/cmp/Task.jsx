import { $ } from 'react-jquery-plugin'
import { useState } from 'react';

const Task = ({text, title}) => {
    $(document).ready(function(){
        $('.taskDeleteBtn').click(function(e){
            e.stopPropagation();
            $(this).parent().remove();
        });
    });

    const doneTaskHandler = (e) => {
        e.stopPropagation();
        setDoneTask(!doneTask)
    }

    const [select , setSelect] = useState("false");
    const [doneTask , setDoneTask ] = useState("false");

    return ( 
        <div done={doneTask ? 'false' : 'true'} onClick={()=> setSelect(!select)}  className={select ? "task" : " select task"}>
            <h5 >{title}</h5>
            <p>{text}</p>
            <input className='mybtn taskDeleteBtn' type="button" value="delete" />
            <input onClick={ doneTaskHandler } className='mybtn taskDoneBtn' type="button" value="done" />
        </div>
     );
}
 
export default Task;
