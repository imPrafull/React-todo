import React from 'react';
import '../App.css';

import Todo from './Todo';

function TodoList({todos, setTodos, filteredTodos}) {
    return (
        <div className="todo-list">
            <ul>
                { 
                    filteredTodos.map(todo => (
                        <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
                    )) 
                }
            </ul>
        </div>
    )
}

export default TodoList;