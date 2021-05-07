const Task = ({Task:{name,id}}) => {
    const DragStart = (e)=>{
        e.dataTransfer.setData('id', e.target.id);
    }

    return <li id={'task'+id} draggable="true" onDragStart={DragStart}>{name}</li>
}

export default Task;
