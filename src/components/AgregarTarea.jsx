import React, { useState } from 'react'
export const AgregarTarea = ({ settareas })=>{
   
  const [newt,setnew] = useState ('');
  
  const Add = (e) => {
    e.preventDefault();
    settareas(prevTareas => [...prevTareas, newt]);
    setnew('');
  };

  return (
  <>
  <form onSubmit={Add}> 
    <input type="text" className='EstiloTarea' placeholder="Escriba una tarea" value={newt}
    onChange={(e) => setnew(e.target.value)}/>

    <button className='btagregar' type="submit">Agregar Tarea</button>
  </form>


  </>
  )
export const AgregarTarea = () => {
  return <form>
    <input type="text" className='EstiloTarea' name='AgregarTarea' placeholder="Escriba una tarea" />
    <button type="submit">Agregar</button>
  </form>
}
