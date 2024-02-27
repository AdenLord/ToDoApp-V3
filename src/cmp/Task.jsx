import { $ } from 'react-jquery-plugin'
import { useState } from 'react';

const Task = ({text, title}) => {
    $(document).ready(function(){
        $('.taskDeleteBtn').click(function(){
            $(this).parent().remove();
        });

        $('.taskDoneBtn').click(function(){
            $(this).parent().attr('select', 'true');
        })
    });

    const [select , setSelect] = useState("false");

    return ( 
        <div onClick={()=> setSelect(!select)}  className={select ? "task" : " select task"}>
            <h5 >{title}</h5>
            <p>{text}</p>
            <input className='taskDeleteBtn' type="button" value="delete" />
            <input className='taskDoneBtn' type="button" value="done" />
        </div>
     );
}
 
export default Task;

// onClick={() => setSelectTask(!selectTask)} className={selectTask ? "select" : ""}