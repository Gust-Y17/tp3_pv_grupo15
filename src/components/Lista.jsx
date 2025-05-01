import { Eliminar } from "./EliminarTarea"; // Asegúrate de que el nombre del archivo coincida

export const Listas = ({ tareas, setTareas }) => {
  return (
    <ul>
      {tareas.map((tarea, index) => (
        <li key={index}>
          {tarea}
          <button
            className="btn-eliminar"
            onClick={() => Eliminar(index, tareas, setTareas)}
          >
            ELIMINAR
          </button>
        </li>
      ))}
    </ul>
  );
};