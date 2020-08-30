import React, { useState, useEffect } from 'react';
import './App.css';
// Importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [ inputText, setInputText ] = useState('');
  const [ todos, setTodos ] = useState([]);
  const [ todoFilter, setTodoFilter ] = useState('all');

  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    saveLocalTodos();
  }, [todos, todoFilter])

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
      <TodoList todos={todos} setTodos={setTodos} todoFilter={todoFilter} />
    </div>
  );
}

export default App;
