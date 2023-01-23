import React, { useState } from 'react'
import './Form.scss'
const Form = ({addTask}) => {
  const input = {
    id:'',
    task:'',
    completed:false,
  }

const [valueInput,setValueInput]= useState(input)

const handleChange=(e)=>{
  setValueInput({...valueInput,
  [e.target.name]:e.target.value
  })
}

const handleSubmit = (e)=>{
e.preventDefault()
if(!valueInput.task){
  alert('ingresa la tarea ')
}else{
  addTask(valueInput)
}
setValueInput(input)
console.log(valueInput)
}
  return (
    <div className='Form-Container  mt-5 '>
        <form action="" onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Add to task'
            name='task'
            onChange={handleChange}
            value={valueInput.task}
            className='form-control text-center'
             />
             <div className='text-center'>
                           <input type="submit" value='Add' className='btn  btn btn-outline-primary mt-3'/>

             </div>
        </form>
    </div>
  )
}

export default Form