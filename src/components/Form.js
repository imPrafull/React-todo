import React from 'react';
import '../App.css';

function Form({ inputText, setInputText, todos, setTodos, setTodoFilter }) {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);
        setInputText('');
    }
    const inputSelectHandler = (e) => {
        setTodoFilter(e.target.value)
    }
    return (
        <form>
            <input placeholder="What do you want to do?" type="text" value={inputText} onChange={inputTextHandler} />
            <button type="submit" onClick={submitTodoHandler} >
                <i className="fas fa-plus"></i>
            </button>
            <div className="custom-select">
                <select onChange={inputSelectHandler} name="todos">
                    <option value="all">All</option>
                    <option value="complete">Complete</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </div>
        </form>
    )
}

export default Form;