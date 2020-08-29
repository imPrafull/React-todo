import React from 'react';

function Todo({ todo, todos, setTodos}) {
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return { ...item, completed: !item.completed }
            }
            return item;
        }));
    }

    return (
        <div>
            <li>{todo.text}</li>
            <button onClick={completeHandler} >{todo.completed ? 'Not Done' : 'Done'}</button>
            <button onClick={deleteHandler} >Delete</button>
        </div>
    )
}

export default Todo;