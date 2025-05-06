import React from 'react';

export const ItemsLista = ({ tarea, index, realizadas, setRealizadas, eliminarTarea }) => {

  const marcarComoRealizada = () => {
    const nuevasRealizadas = [...realizadas];
    nuevasRealizadas[index] = !nuevasRealizadas[index];
    setRealizadas(nuevasRealizadas);
  };

  return (
    <li 
      key={index}
      style={{ 
        display: 'flex', 
      }}
    >
      {/* Solo el texto se tacha */}
      <span style={{ textDecoration: realizadas[index] ? 'line-through' : 'none' }}>
        {tarea}
      </span>

      <button className='btagregar' onClick={marcarComoRealizada}>
        {realizadas[index] ? 'Desmarcar' : 'Realizado'}
      </button>

      <button className='btagregar' onClick={eliminarTarea}>
        Eliminar
      </button>
    </li>
  );
};

