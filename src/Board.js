import {useState} from 'react';

import Header from './Components/Header';
import Column from './Components/Column'
import AddColumn from './Components/AddColumn';

const Board = () => {

    const [columns, setColumns] = useState([
        {id:1,name:'To Do'},
        {id:2,name:'Doing'},
    ]);

    const [tasks, setTasks] = useState([
        {id:1,name:'Task 1',desc:'Description',column:1},
        {id:2,name:'Task 2',desc:'Description',column:1},
        {id:3,name:'Task 3',desc:'Description',column:2},
    ]);


    return (
        <div className="container-fluid">
            <Header />
            <div className="columns row flex-nowrap">
                {
                    columns.map(c=> <Column  
                                        Column={c} 
                                        key={c.id}  
                                        tasks={tasks} 
                                        setTasks={setTasks} 
                                    />)
                } 
                
                <AddColumn columns={columns} setColumns={setColumns} />
            </div>
        </div>
    )
}

export default Board;
