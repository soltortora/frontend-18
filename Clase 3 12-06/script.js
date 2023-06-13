//METODOS DE STRING

//FUNCIONES NATIVAS son para aplicarla sobre un strem o un numero, pero son para aplciar sobre algo, sobre un dato que ya tenemos mensaje.length()

let mensaje = 'Hola chicas esto es un mensaje'; 
let telefonoFijo ='1122565432'

console.log(mensaje.length); //para contar caracteres
console.log(mensaje.toUpperCase()); //para cambiar a mayuscula
console.log(mensaje.toLowerCase()); //pasar cambiar minuscula
console.log(mensaje.slice(0,10)) //para cortar una cadena de caracteres recibe como paramtro 2 valores, el inico y el final del recorte, el segundo paramtro es opcional, y puede ser un numero negativo 

console.log(mensaje.includes('z')); //si quiero saber si mi cadena de caracteres incluye un caracter especifico 

console.log(mensaje.indexOf(a)); 
console.log(mensaje.indexOf(z)); // me devuelve el numero de la primera concindcencia que encuentra 

console.log(mensaje.replace('chicas', 'chiques')); //recibe dsos paramtros el primero es la palabra o cacrater a reemplazar y el segundo la plaabra o cacrater con la que quiere reemplazar //replace( reemplaza la prmer concindencia y replaceAll()remplaza todas las coincidencias


//METODOS DE NUMERO 

let edad =33
let edad2=45
let edad4=21
//para converitr a un dato a tipo number 
console.log(Number(telefonoFijo));

// El objeto Math, ofrece un numeor random, calculo matematico que devuelve un numeor entre 0 y 1 
console.log(Math.random());

//Como trbajar con numeros aleatorios, 

//min  compara edad 1 y edad 2 sacando el menor  
console.log(Math.min(edad1, edad2)); 

//max dentro de los parametros el mayor 
console.log(Math.max(edad1, edad2, edad4));

//round, redondeado un numero decimal hacia el entero mas cercano

console.log(Math.round());

//ceil redondea un numero haceicmal, hacia arriba 
console.log(Math.ceil(1.5));

//floor, redondea un numeor decimal, hacia abajo 
console.log(Math.floor(1.5));




