export const Eliminar = (index, tareas, settareas) => {
    settareas(tareas.filter((_, i) => i !== index));
};