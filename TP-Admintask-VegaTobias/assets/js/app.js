let task = ["Matematica", "Programacion", "Ingles", "Base de atos"]



for (let i = 0; i < task.length; i++) {
    console.log(task[i])
}
let elecciontarea;
let agregartarea = 1;

while(elecciontarea != 0) {
    elecciontarea = prompt("Bienvenido al adminsitrador de tareas. Eliga la funcionalidad que quiere realizar: \n1-AGREGAR TAREA" + "\n2-LISTAR TAREAS" + "\n3-EDITAR TAREA" + "\n4-ELIMINAR TAREA" + "\n0-SALIR")

    switch (true) {
    case 1:
        console.log("1")
        
        break;
    case 2:
        console.log("2")
        break;
    
    case 3:
        console.log("3")
        break;

    case 4:
        console.log("4")
        break;

    case 0:
        console.log("Hasta luego")
        break;

    default:
        console.log("La funcionalidad ingresada no existe");
        break;
}
    
}

