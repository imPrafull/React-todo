import React, { useState, useEffect } from 'react';
import '../App.css';

import Todo from './Todo';

function TodoList({todos, setTodos, todoFilter}) {

    const [filteredTodos, setFilteredTodos] = useState(todos);

    useEffect(() => {
        setFilteredTodos(filterTodos[todoFilter]);
    }, [todos, todoFilter])

    const filterTodos = {
        'complete': todos.filter(todo => todo.completed === true),
        'incomplete': todos.filter(todo => todo.completed === false),
        'all': todos
    }

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