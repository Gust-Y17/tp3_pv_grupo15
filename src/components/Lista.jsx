
import { Eliminar } from "./EliminarTarea";
import { ItemsLista } from "./ItemsLista"; //tachado
import React, { useState } from 'react'

export const Listas = ({ tareas, setTareas }) => {
  //  Nuevo estado para saber qué tareas están realizadas
  const [realizadas, setRealizadas] = useState(
    new Array(tareas.length).fill(false)
  );

  return (
    <ul>
      {tareas.map((tarea, index) => (
        <ItemsLista
          key={index}
          index={index}
          tarea={tarea}
          realizadas={realizadas}
          setRealizadas={setRealizadas}
          eliminarTarea={() => Eliminar(index, tareas, setTareas)} 
        />
      ))}
    </ul>
  );
};