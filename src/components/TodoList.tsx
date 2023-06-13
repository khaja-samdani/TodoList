import React from 'react'
import { modal } from './modal'
import SingleTodo from './SingleTodo'
interface Props{
    todos:modal[],
    setTodos:React.Dispatch<React.SetStateAction<modal[]>>,

}
const TodoList:React.FC<Props> = ({todos,setTodos}) => {
  return (
    <div>
        {todos.map((item,id:number)=>{
            return(
                <div className='single__todo__wrapper'>
                <SingleTodo todo={item} key={item.id} todos={todos} setTodos={setTodos} />
                </div>
            )
        })}
    </div>
  )
}

export default TodoList