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
}
