import React, { useState, useEffect } from 'react';
import './App.css';
// Importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [ inputText, setInputText ] = useState('');
  const [ todos, setTodos ] = useState([]);
  const [ todoFilter, setTodoFilter ] = useState('all');
  const [ filteredTodos, setFilteredTodos ] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    filterTodos();
    saveLocalTodos();
  }, [todos, todoFilter])

  const filterTodos = () => {
    switch (todoFilter) {
      case 'complete':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'incomplete':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === 'null') {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Prafull's Todo list</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setTodoFilter={setTodoFilter} />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
