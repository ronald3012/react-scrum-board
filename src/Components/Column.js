import {Form} from 'react-bootstrap';
import Task from './Task';


const Column = ({Column:{id, name}, tasks,setTasks}) => {

    const newTask = (e)=>{

        e.preventDefault();
        // Get column id
        const idColumn = e.target.parentElement.id;
        // Get descripcion
        const description = e.target.querySelector('input').value;
        // Get last id
        const lastId = Math.max(...[...tasks].map(t => t.id)) +1;
        const task = {id:lastId,name:description,desc:'Description',column:Number(idColumn.replace('column',''))};

        setTasks([...tasks,task]);
        e.target.reset();
    }

   
    const hover = (e) =>{
        e.preventDefault(); 
        if(e.target.classList.contains('column')){
            e.target.style.border = 'dotted 3px darkgray';
        }
    }
    const leave= (e) =>{
        e.preventDefault();
        e.target.style.border = 'none';
    }
    const drop = (e)=>{

        e.stopPropagation();

        if(e.target.classList.contains('column')){

            const idEle = e.dataTransfer.getData('id');
            e.target.style.border = 'none';
            // change task column
            const column = Number(e.target.id.replace('column',''));
            const newArray = JSON.parse(JSON.stringify(tasks));
            newArray.map(t=> {
                    if (t.id === Number(idEle.replace('task',''))) {
                        t.column = column;
                    }
                return t
            })
            setTasks(newArray);
        }
    }

    return(
        <div className="col bg-white column" 
            onDragOver={hover} 
            onDragLeave={leave}
            onDrop={drop}
            id={'column'+id}
        >
            <h3>{name}</h3>
            <ul>
                {tasks
                    .filter(t => t.column === id)
                        .map(t=> <Task key={t.id} Task={t} />)
                   
                }
            </ul>
            <Form className="formTask" onSubmit={newTask}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Write a task:" className="border-0 outline-none" autoComplete='off' />
                </Form.Group>
            </Form>
        </div>
    )
}


export default Column;