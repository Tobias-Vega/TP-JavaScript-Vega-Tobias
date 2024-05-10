let edad = parseInt(prompt("Ingrese su edad"))

if (edad >= 0 && edad <= 12) {
    console.log("usted es un niño")
} else if (edad >= 13 && edad <=19) {
    console.log("usted es un adolescente") 
} else if (edad >= 20 && edad <= 59) {
    console.log("usted es un adulto")
} else if (edad >= 60 && edad < 120) {
    console.log("usted es un adulto mayor")
} else console.log ("el valor ingresado no es valido, por favor ingrese un numero mayor a 0")
