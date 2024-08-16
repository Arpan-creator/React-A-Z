import React from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import  './App.css'


function App() {
  return (
    <TodoProvider>
      <div className="TodoApp">
      <h1>
        Todo List is Here
      </h1>
      <TodoForm/>
      <TodoList/>
      </div> 
    </TodoProvider>
  )
}

export default App;
