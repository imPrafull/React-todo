import React from 'react';
import '../App.css';

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
        <div className="todo-item">
            <li>{todo.text}</li>
            <div className="buttons" >
                <button onClick={completeHandler} >{todo.completed ? <i className="fas fa-times"></i> : <i className="fas fa-check"></i>}</button>
                <button onClick={deleteHandler} ><i className="fas fa-trash-alt"></i></button>
            </div>
        </div>
    )
}

export default Todo;