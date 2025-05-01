export const Listas = ({ tareas }) => {
  return (
    <ul>
      {tareas.map((tarea, index) => (
        <li key={index}>{tarea}
          <button className="btn-eliminar">ELIMINAR</button> 
         
        </li>
      ))}
    </ul>
  )
}