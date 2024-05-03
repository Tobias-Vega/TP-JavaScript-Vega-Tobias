let dia = parseInt(prompt("ingrese un número que será representado para un día de la semana: 1.Lunes 2.Martes. 3 Miércoles 4. Jueves 5. Viernes 6.Sábado 7.Domingo"));

switch (dia) {
    case 1:
        console.log("El día es Lunes")
        break;
    case 2:
        console.log("El día es Martes")
        break;
    case 3:
        console.log("El día es Miércoles")
        break;
    case 4:
        console.log("El día es Jueves")
        break;
    case 5:
        console.log("El día es Viernes")
        break;
    case 6:
        console.log("El día es Sábado")
        break;
    case 7:
        console.log("El día es Domingo")
        break;
    default:
        console.log("El día no existe. Ingrese un número del 1 al 7")
        break;
}