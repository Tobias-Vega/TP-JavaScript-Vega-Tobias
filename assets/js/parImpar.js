let num = parseInt(prompt("Ingrese un número que sea par o impar"));

numResiduo = num % 2;
//Anotación: Los números negativos también pueden ser pares o impares

if (numResiduo == 0) {
console.log("El número es par")
} else if (numResiduo == 1 || num < 0) {
    console.log("El número es impar")
} else console.log("El valor que ingresó no es un número")