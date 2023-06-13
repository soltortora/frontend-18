var nombre = 'Sol';
var nombre = 'Valeria';


let apellido = 'Ferrer';
const mensaje = 'mensaje de prueba';

apellido = 'Petriella';

//nombres de variable empiezan en minuscula. nombreEmpleado, que empieza con mayucula
//variables pueden cambiar. mensaje no se puede cambiar el valor por que es una constante, en cambio apellido si mensaje = 'hola, bienvenide'; a las constantes no se les puede cambiar el valor

console.log (apellido)

//TIPOS DE DATOS 
//datos primitivos 
//string = cadenas de caracteres
//number = numeros
//boolean =true /flase 
//undefined =no definido 
//null = nulo 
//NaN= not a Number 

let name = prompt ('Ingresa tu nombre', 'nombre')

let lastName = prompt ('Ingresa tu apellido', 'apellido')
let age = prompt ('Ingresa tu edad', 'edad')

console.log ('nombre', name);
console.log ('apellido', lastName);
console.log ('edad', age)

alert('Hola ${name}') //le falta comillas invertidas, no las encontre :(

let primerNumero = prompt('ingrese un numero', '')
let segundoNumero =prompt('ingrese un numero para ser sumado', '')
let resultado = Number (primerNumero) + Number(segundoNumero);

alert ('El resultado es ${resultado}') //falta comillas invertidas 




