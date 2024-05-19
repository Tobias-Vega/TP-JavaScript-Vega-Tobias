let task = ['Matematica', 'Programacion','Ingles', 'Base de Datos'];
let lista = [];
let eleccionTarea;

function agregarTarea() {
    let agregar = prompt('¿Qué tarea desea agregar?');
    if (task.includes(agregar)) {
        alert('Se agregó la tarea: ' + agregar);
        lista.push(agregar);
    } else {
        alert('La tarea no existe');
    }
}

function listarTarea() {
    if (lista.length === 0) {
        return 'No hay tareas en la lista';
    } else {
        let listaTareas = '';
        for (let i = 0; i < lista.length; i++) {
            listaTareas += `${i+1}. ${lista[i]}\n`;
        }
        return listaTareas;
    }

}

function editarTarea() {

}

function eliminarTarea() {

}

while (eleccionTarea !== 0) {
    eleccionTarea = parseInt(prompt('Bienvenido al Administrador de tareas. Elija la funcionalidad que desea realizar\n' +
    '1-AGREGAR TAREA\n' +
    '2-LISTAR TAREA\n' +
    '3-EDITAR TAREA\n' +
    '4-ELIMINAR TAREA\n' +
    '0-SALIR'
    ));
    switch(eleccionTarea) {
        case 1:
            agregarTarea()
            break;
        case 2:
            alert('Lista de tareas:\n' + listarTarea());
            break;
        case 3:
            editarTarea();
            break;
        case 4:
            eliminarTarea();
            break;
        case 0:
            alert('Hasta luego');
            break;
        default:
            alert('La funcionalidad ingresada no existe');
            break;
    }
}