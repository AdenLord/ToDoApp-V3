import shortid from 'shortid';

const Form = ({ tasks, setTasks,inputTitle, setInputTitle, inputText, setInputText }) => {

    const addTaskHandler = (e) => {
        e.preventDefault();
        setTasks([
            ...tasks,{ id :shortid.generate() ,title : inputTitle , text : inputText }
        ])
        setInputText("");
        setInputTitle("");
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
    <div>
        <h2>title</h2>
        <input onChange={inputTitleHandler} value={inputTitle} type="text" />

        <h2>task</h2>
        <input onChange={inputTextHandler} value={inputText} type="text" />

        <input onClick={ addTaskHandler } id="AddBtn" type="button" value="Add" />
        <input onClick={ deleteHandler } type="button" value="delete tasks" />
    </div>
     );
}
 
export default Form;