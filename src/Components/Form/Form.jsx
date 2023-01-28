import React, { useEffect, useState } from 'react'
import './Form.scss'

const Form = ({addTask,dataToEdit,updateTask}) => {
  const input = {
    id:null,
    task:'',
    completed:false,
  }

const [valueInput,setValueInput]= useState(input)

useEffect(()=>{
  if(dataToEdit){
    setValueInput(dataToEdit)
  }
},[dataToEdit])

const handleChange=(e)=>{
  setValueInput({...valueInput,
  [e.target.name]:e.target.value
  })
}

const handleSubmit = (e)=>{
e.preventDefault()

if(!valueInput.task){
  return alert('ingresa la tarea')
}

if(valueInput.id === null){
  addTask(valueInput)
}else{
  updateTask(valueInput)
}

setValueInput(input)
}
  return (
    <div className='Form-Container  mt-4 '>
            <form action="" className='d-flex' style={{justifyContent:'center',alignItems:'flex-end'}} onSubmit={handleSubmit}>
          <div className='div-input'>
            <input 
            type="text" 
            placeholder='Add to task'
            name='task'
            onChange={handleChange}
            value={valueInput.task}
            className='  form-control'

             />
          </div>
            
             <div className='text-center' style={{marginLeft:'5px'}}>
                           <input type="submit" value='+' className='btn btn-Add btn btn-dark -l mt-3'/>

             </div>
        </form>
      
    
    </div>
  )
}

export default Form