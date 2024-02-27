

const Form = ({ tasks, setTasks,inputTitle, setInputTitle,selectTask, setSelectTask, inputText, setInputText }) => {

    const addTaskHandler = (e) => {
        e.preventDefault();
        setTasks([
            ...tasks,{ title : inputTitle , text : inputText , select: false }
        ])
        setInputText("");
        setInputTitle("");
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
        <input type="button" value="delete" />
    </div>
     );
}
 
export default Form;