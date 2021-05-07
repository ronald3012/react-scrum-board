import React from 'react';
import {Form} from 'react-bootstrap';

const AddColumn = ({columns,setColumns}) => {

    const newColumn = (e)=>{

        e.preventDefault();
        // Get descripcion
        const name = e.target.querySelector('input').value;
        // Get last id
        const lastId = Math.max(...[...columns].map(t => t.id)) +1;
        const column = {id:lastId,name};

        setColumns([...columns,column]);
        e.target.reset();
    }

    return (
        <div className="col column">
            <Form onSubmit={newColumn}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="New column" autoComplete='off' />
                </Form.Group>
            </Form>
        </div>
    )
}

export default AddColumn;
