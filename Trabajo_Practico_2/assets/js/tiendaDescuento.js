let cantidad = parseInt(prompt("Ingrese la cantidad de artículos que compró"));

let precio = parseInt(prompt("Ingrese el precio de artículos que compró"));
let preciototal = cantidad * precio;
let descuento = preciototal * 0.85;


switch (true) {
    case isNaN(cantidad) || isNaN(precio):
        console.log("ingrese valores númericos")
        break;
    
    case (precio <= 0 || cantidad <= 0):
        console.log("ingrese un precio o cantidad mayor a 0")
        break;

    case (cantidad > 10 && preciototal > 20000):
        console.log("su descuento del 15% es", descuento)
        break;

    default:
        console.log("la compra no supera la cantidad o el precio, por lo que no tiene descuento, su compra fue de ", preciototal)
        break;
}