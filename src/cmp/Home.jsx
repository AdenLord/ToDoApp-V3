import Form from './Form';
import TaskBox from './TaskBox';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home = () => {
    const [ inputText, setInputText ] = useState('');
    const [ inputTitle, setInputTitle ] = useState('');
    const [ tasks, setTasks ] = useState([]);

    return ( 
        <Container>
            <Row>
                <Form inputText={inputText}
                    setInputText={setInputText}
                    inputTitle={inputTitle}
                    setInputTitle={setInputTitle}
                    tasks={tasks}
                    setTasks={setTasks}
                />
            </Row>

            <Row>
                < TaskBox
                    tasks={tasks}
                    setTasks={setTasks}   
                />
            </Row>
        </Container>
     );
}
 
export default Home;