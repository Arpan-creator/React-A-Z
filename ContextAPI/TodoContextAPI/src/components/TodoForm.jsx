import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import "../context/styles/TodoForm.css"
const TodoForm = () => {
  const [inputValue, setInputValue] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo({
        id: Date.now(),
        text: inputValue
      });
      setInputValue('');
    }
  };

  return (
    <form className="formm" onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Add a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
