let task = ['Matematica', 'Programacion', 'Ingles', 'Base de Datos'];
let lista = [];



let elecciontarea;
let agregar;
let numeroTarea = 1

function agregarTarea() {
    agregar = prompt('¿Qué tarea desea agregar?');
    if(task.includes(agregar)) {
        alert('Se agrego la tarea: ' + agregar);
        lista.push(agregar);
    } else {
        alert('La tarea no existe');
    }
}

function listarTarea() {
    for (let i = 0; i < lista.length; i++) {
        return numeroTarea, '-', lista;
        numeroTarea = numeroTarea + 1;
    }
}

function editarTarea() {

}

function eliminarTarea() {

}

while(elecciontarea != 0) {
    elecciontarea = parseInt(prompt('Bienvenido al adminsitrador de tareas. Eliga la funcionalidad que quiere realizar: \n1-AGREGAR TAREA' + '\n2-LISTAR TAREAS' + '\n3-EDITAR TAREA' + '\n4-ELIMINAR TAREA' + '\n0-SALIR'));

    switch (elecciontarea) {
    case 1:
        agregarTarea();
        
        break;
    case 2:
        listarTarea();
        alert(listarTarea());
        break;
    
    case 3:
        document.write("Editar tarea");
        break;

    case 4:
        document.write("Eliminar tarea");
        break;

    case 0:
    alert('Hasta luego');
        break;

    default:
        alert("La funcionalidad ingresada no existe");
        break;
}
    
}

