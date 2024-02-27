import Form from './Form';
import TaskBox from './TaskBox';
import { useState } from 'react';


const Home = () => {
    const [ inputText, setInputText ] = useState('');
    const [ inputTitle, setInputTitle ] = useState('');
    const [ tasks, setTasks ] = useState([]);

    return ( 
        <div>
            <Form inputText={inputText}
                setInputText={setInputText}
                inputTitle={inputTitle}
                setInputTitle={setInputTitle}
                tasks={tasks}
                setTasks={setTasks}
            />

            < TaskBox
                tasks={tasks}
                setTasks={setTasks}   
             />
        </div>
     );
}
 
export default Home;