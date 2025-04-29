import { useState } from 'react'
//import reactLogo from './assets/react.svg'
  import './App.css';
  import { Listas } from './components/Lista.jsx';
  function App() {
  
  return (
    <>
      <div className='EscribirLista'>
        <h1>Lista de Tareas</h1>
        <div className='Cantidad de Tareas'> 
          <h3>Numero de Tareas:4</h3>
          <h3>Pendientes:3</h3>
  
        </div>
        <div className='AgregadoTarea'>
           <h3>Agregar Tarea</h3>
           <AgregarTarea/>
        </div>
       <Listas/>
      </div>
  
  
        <Listas/>
    </>
 )
 }  
export default App;
