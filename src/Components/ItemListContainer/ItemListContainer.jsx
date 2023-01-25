import React, { useState } from "react";
import Form from "../Form/Form";
import ItemList from "../ItemList/ItemList";
import'./ItemListContainer.scss'

export const ItemListContainer = () => {


  const [tasks,setTasks]= useState([])


  const addTask = (data)=>{
    data.id = Date.now()
    setTasks([...tasks,data])
  }
  console.log(tasks)
  const deleteTask = (id)=>{
    console.log(id)
    setTasks(tasks.filter((item)=> item.id != id))
  }

  const deleteAll = ()=>{ 
    setTasks([])
  }

  const setCheck = (id)=>{
  setTasks(tasks.map((item)=>{
   return  item.id === Number(id) ? {...item, completed:!item.completed}:{...item}
    }))

  }
  return (
    <div className="item-List-Container mt-5 py-5" >
      <h1 className="text-center">Todo List</h1>
      <Form tasks={tasks} addTask={addTask} setTasks={setTasks}></Form>
      <ItemList tasks ={tasks} deleteTask={deleteTask} setCheck={setCheck}  className='container' deleteAll={deleteAll}/>
    </div>
  );
};
