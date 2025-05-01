
//import reactLogo from './assets/react.svg'
import { useState } from 'react';
  import { Listas } from '../components/Lista.jsx';
  import { AgregarTarea } from '../components/AgregarTarea.jsx';

  function App() {
    const [tareas,settareas] = useState([]);
  return (
    <>
      <div className='EscribirLista'>
        <h1>Lista de Tareas</h1>

        <div className='Cantidad de Tareas'> 
          <h3>Numero de Tareas: {tareas.length}</h3>
        </div>

        <div className='AgregadoTarea'>
           <h3>Agregar Tarea</h3>
           <AgregarTarea settareas={settareas}/>
        </div>

       <Listas tareas={tareas}/>
      </div>
  
  
         
    </>
 )
 }  
export default App
