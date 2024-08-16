import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import "../context/styles/TodoList.css"
const TodoList = () => {
  const { todos, removeTodo } = useContext(TodoContext);

  return (
    <div className="output">
        <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default TodoList;
