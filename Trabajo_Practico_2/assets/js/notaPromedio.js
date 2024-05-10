let nota1 = parseInt(prompt("Ingrese su nota en el primer cuatrimestre"));
let nota2 = parseInt(prompt("Ingrese su nota en el segundo cuatrimestre"));
let nota3 = parseInt(prompt("Ingrese su nota en el tercer cuatrimestre"));
let promedio = (nota1 + nota2 + nota3) / 3; 

if (nota1 > 10 || nota1 < 0 || nota2 > 10 || nota2 < 0 || nota3 > 10 || nota3 < 0) {
    console.log("Las notas son invalidas")
} else if (promedio >= 1 && promedio <= 3 ) {
    console.log("Nota insuficiente")
} else if (promedio >= 4 && promedio <= 5) {
    console.log("Nota regular")
} else if (promedio >= 6 && promedio <= 7) {
    console.log("Nota buena")
} else if (promedio >= 8 && promedio <= 9) {
    console.log("Nota muy buena")
} else if (promedio == 10) {
    console.log("Nota sobresaliente")
} else console.log("el valor ingresado no es número")