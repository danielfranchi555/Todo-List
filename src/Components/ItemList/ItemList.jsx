import React from 'react'
import './ItemList.scss'
import trash from '../Icons/trash.png'

const ItemList = ({tasks,deleteTask,deleteAll,setCheck}) => {
 
  const myStyle = {
    textDecoration:'linethrough'
  } 

   if(tasks.length === 0){
   return <p className='text-center' style={{fontFamily:'sans-serif',fontSize:'30px',color:'black'}}> No hay tareas</p>
  } 
  return (
    <div className='list-Container' >
        <ul className='ul-List'>
            {tasks.map((item)=>(
            <li className='d-flex bg-' key={item.id} style={ {justifyContent:'space-between'}} >
              <div >
            <input type="checkbox" className={item.completed?'background-color:red':'background-color:blue'} checked={item.completed} onChange={()=>setCheck(item.id)} />
              </div>
            <div  >
           <p>{item.task} </p> 
            </div>
            <div> 
               <button className='btn' onClick={()=>deleteTask(item.id)}> <img src={trash} className='icon-delete' alt="" /> </button>
            </div>
          </li>
        ))} 
        </ul>
        {tasks.length > 0 && 
           <div className='div-button-delete-all'>
            <button  onClick={()=>deleteAll()} className='btn btn-danger'>Delete All</button>
           </div>
        }
    </div>
  )
}

export default ItemList