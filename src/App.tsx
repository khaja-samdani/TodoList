import React, { useState } from 'react';
import './App.css';
import InputTextFiled from './components/InputTextFiled';
import { modal } from './components/modal';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<modal[]>([])
  const handleAdd = (e: React.FormEvent) => {
    if (todo) {
      e.preventDefault()
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo("")
    } else {
      alert('please enter text')
    }
  }
  console.log(todos)
  return (
    <div className='App'>
      <div className='header'>
        TASKIFY
      </div>
      <InputTextFiled todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App