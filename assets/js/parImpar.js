let num = parseInt(prompt("Ingrese un número que sea par o impar"));

numResiduo = num % 2;

if (num >= 0 && numResiduo == 0) {
console.log("El número es par")
} else if (num >= 0 && numResiduo == 1) {
    console.log("El número es impar")
} else console.log("El valor que ingresó no puede ser determinado como par o impar")