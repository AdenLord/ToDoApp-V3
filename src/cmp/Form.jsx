import shortid from 'shortid';

const Form = ({ tasks, setTasks,inputTitle, setInputTitle, inputText, setInputText }) => {

    const addTaskHandler = (e) => {
        let titleValue =document.querySelector('#input-title');
        let textValue =document.querySelector('#input-text');

        if( titleValue.value == "" || textValue.value == "" ){
            alert('error!!')
        }else{
            e.preventDefault();
            setTasks([
                ...tasks,{ id :shortid.generate() ,title : inputTitle , text : inputText }
            ])
            setInputText("");
            setInputTitle("");
        }
    }

    const deleteHandler = () =>{
        let allTasks = document.querySelectorAll('#taskBox > div.select');
        for( let i = 0; i < allTasks.length; i++){
            allTasks[i].remove();
        }
    }

    const inputTitleHandler = (e) => {
        setInputTitle(e.target.value);
    }

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    return ( 
    <div id='form'>
        <h2>title</h2>
        <input id='input-title' onChange={inputTitleHandler} value={inputTitle} type="text" />

        <h2>task</h2>
        <input id='input-text' onChange={inputTextHandler} value={inputText} type="text" />

        <input className='mybtn' onClick={ addTaskHandler } id="AddBtn" type="button" value="Add" />
        <input className='mybtn' onClick={ deleteHandler } type="button" value="delete tasks" />
    </div>
     );
}
 
export default Form;