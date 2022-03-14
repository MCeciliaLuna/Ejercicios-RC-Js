//Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.

alert('Un Mensaje')

//Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
document.write('Hello world')

//Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

const num1 = 3
const num2 = 5

document.write(`<br> ${num1 + num2}`)

//Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»

const nombreUsuario = prompt('Ingrese un nombre de usuario')

document.write(`<br> Hola ${nombreUsuario}`)

//Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

const numeroPedido1 = parseInt(prompt('Ingrese un número'))
const numeroPedido2 = parseInt(prompt('Ingrese un número'))

document.write(`<br> ${numeroPedido1 + numeroPedido2}`)

//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
const mayor = Math.max(parseInt(prompt('Ingrese un número')), parseInt(prompt('Ingrese otro número')))

document.write(`<br>${mayor}`)

//Escribe un programa que pida un número y diga si es divisible por 2

if (numeroPedido1 % 2 === 0) {
  document.write(`<br>${numeroPedido1} es divisible por dos`)
} else if (numeroPedido2 % 2 === 0) {
  document.write(`<br>${numeroPedido2} es divisible por dos`)
} else {
  document.write(`<br> ningún número ingresado es divisible por dos`)
}

// Escribe un programa que pida una frase y escriba las vocales que aparecen

var text = prompt("Escribe una frase");
var nText = text.length;
var i;

for (i = 0; i < nText; i++) {
if (text.substr(i,1) === "a" || text.substr(i,1) === "e" || text.substr(i,1) === "i" || text.substr(i,1) === "o" || text.substr(i,1) === "u" || text.substr(i,1) === "A" || text.substr(i,1) === "E" || text.substr(i,1) === "I" || text.substr(i,1) === "O" || text.substr(i,1) === "U") {
document.write(`<br> ${text.substr(i,1)}`);
}
}

// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

const otroNumeroPedido = parseInt(prompt("Escribe un número"));
if (otroNumeroPedido % 2 === 0 || otroNumeroPedido % 3 === 0 || otroNumeroPedido % 5 === 0 || otroNumeroPedido % 7 === 0) {
document.write(`<br>${otroNumeroPedido} Es divisible por 2, 3, 5 o 7`);
} else {
document.write(`<br>${otroNumeroPedido} No es divisible ni por 2, ni por 3, ni por 5, ni por 7`);
}

// Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

if (otroNumeroPedido % 2 === 0 || otroNumeroPedido % 3 === 0 || otroNumeroPedido % 5 === 0 || otroNumeroPedido % 7 === 0) {
  if (otroNumeroPedido % 2 === 0) {
  document.write(`<br>${otroNumeroPedido} Es divisible por 2`);
  }
  if (otroNumeroPedido % 3 === 0) {
  document.write(`<br>${otroNumeroPedido} Es divisible por 3`);
  }
  if (otroNumeroPedido % 5 === 0) {
  document.write(`<br>${otroNumeroPedido} Es divisible por 5`);
  }
  if (otroNumeroPedido % 7 === 0) {
  document.write(`<br>${otroNumeroPedido} Es divisible por 7`);
  }
  } else {
  document.write(`<br>${otroNumeroPedido} No es divisible ni por 2, ni por 3, ni por 5, ni por 7`);
  }
  
