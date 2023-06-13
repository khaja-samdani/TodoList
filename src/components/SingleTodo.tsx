import React,{useState} from 'react'
import { modal } from './modal'
import { AiFillEdit,AiFillDelete } from 'react-icons/ai'
import { MdOutlineDone } from 'react-icons/md'
import './style.css'
interface Props {
    todo: modal,
    key: any,
    todos: modal[],
    setTodos: React.Dispatch<React.SetStateAction<modal[]>>,
}
const SingleTodo: React.FC<Props> = ({
    todo,
    key,
    todos,
    setTodos
}) => {
    const [edit,setEdit]=useState<boolean>(false)
    const [editTodo,setEditTodo]=useState<string>(todo.todo)

    const handleIsDelete=(id:any)=>{
        setTodos(
            todos.filter((todo)=>todo.id !== id)
        )
    }

    const handleIsDone=(id:any)=>{
        setTodos(
            todos.map((todo)=>todo.id === id ?{...todo,isDone:!todo.isDone}:todo)
        )
    }
const handleSubmit=(e:React.FormEvent,id:any)=>{
    e.preventDefault()
    setTodos(
        todos.map((todo)=>todo.id ===id ?{...todo,todo:editTodo}:todo)
    )
    setEdit(false)
}

   
    return (
        <form className='todos__single' onSubmit={(e)=>handleSubmit(e,todo.id)}>
            {edit ? <input value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} /> : <div className='todo__text'> {todo.isDone ? (<s>{todo.todo}</s>):(todo.todo)}</div>}
            <div className='icons__wrapper'>
                <span className='icon' onClick={()=>{
                    if (!edit && !todo.isDone){
                        setEdit(!edit)
                    }
                }}> <AiFillEdit /></span>
                <span className='icon' onClick={()=>handleIsDelete(todo.id)}><AiFillDelete /></span>
                <span className='icon' onClick={()=>handleIsDone(todo.id)}><MdOutlineDone /></span>
            </div>
        </form>
    )
}

export default SingleTodo