let num1 = parseFloat(prompt("ingrese el primer número"));
let num2 = parseFloat(prompt("ingrese el segundo número"));
let num3 = parseFloat(prompt("ingrese el tercer número"));

alert("el primer numero es " + num1 + " el segundo numero " + num2 + " El tercer numero " + num3)

console.log("el primer número es ", num1);
console.log("el segundo número es ", num2);
console.log("el tercer número es ", num3);

if (num1 <= num2 && num2<= num3) {
    console.log(num1, num2, num3)
} else if (num1 <= num3 && num3 <= num2) {
    console.log(num1, num3, num2)
} else if (num2 <= num3 && num3 <= num1) {
    console.log(num2, num3, num1)
} else if (num2 <= num1 && num1<= num3) {
    console.log(num2, num1, num3)
} else if (num3 <= num2 && num2 <= num1) {
    console.log(num3, num2, num1)
} else if (num3 <= num1 && num1 <= num2) {
    console.log(num3, num1, num2)
} else console.log("el valor que ingresó no es un número")