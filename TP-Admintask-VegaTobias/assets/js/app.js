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
    if(lista.length === 0) {
        alert('No hay tareas para editar')
    } else {
        let editar = prompt('Ingrese el nombre de la tarea que desea editar');
    if (lista.includes(editar)) {
        let reemplazar = prompt('Ingrese el nombre de la tarea que reemplazará a la anterior');
        if(task.includes(reemplazar)) {
            let buscarTarea = lista.indexOf(editar);
            lista[buscarTarea] = reemplazar;
            alert('La tarea ' + editar + ' fue reemplazada por la tarea ' + reemplazar);
        } else {
            alert('La tarea que quiere reemplazar no existe');
        }  
    } else {
        alert('El nombre de la tarea para editarla no se encuentra en la lista. Asegurese de revisar su lista de tareas');
    }
    }
    

}

function eliminarTarea() {
    let eliminar = prompt('Ingrese el nombre de la tarea que desea eliminar');
    if(lista.includes(eliminar)) {
        let buscarTarea = lista.indexOf(eliminar);
        lista.splice(buscarTarea,1);
        alert('La tarea ' + eliminar + ' fue eliminada');
    } else {
        alert('El nombre de la tarea que quiere eliminar no se encuentra en la lista. Asegúrese de revisar su lista de tareas');
    }

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