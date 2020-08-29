import React from 'react';
import Todo from './Todo'

function TodoList({todos, setTodos, filteredTodos}) {
    return (
        <div>
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