import React,{useRef} from 'react'
import './style.css'

interface Props{
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>,
    handleAdd:(e:React.FormEvent)=>void
  }
const InputTextFiled:React.FC<Props> = ({todo,setTodo,handleAdd}) => {
    const inputRef=useRef<HTMLInputElement>(null)

  return (
    <form className='input' onSubmit={(e)=>{
        handleAdd(e);
        inputRef.current?.blur()
    }}>
        <input type="text" placeholder='Enter the task' value={todo} className='input__text'
        onChange={(e)=>setTodo(e.target.value)}
        />
        <button className='submit__button'>Go</button>
    </form>
  )
}

export default InputTextFiled