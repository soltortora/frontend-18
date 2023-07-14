//Usando las funciones anteriores(obtener NombreCompleto, saludar y gritar), defini una funcion saludarGritando que reciba como argumentos un nombre y un apellido y devuelva un saludo como signos de exclamacion. 

//const obtenerNombreCompleto = (nombre, apellido) =>{
//    return `${nombre} ${apellido}`  //recibe 2 argumentos y devuelve un string 
//}

//const saludar = (nombre) => {
//    return `Hola ${nombre}, un gusto conocerte` //RECIBE UN ARGUMENTO Y LO DEVUELVE CON SALUDO
//}

//const gritar = (string)=> {
//    return `¡${string}!` //recibe un argumento y lo devuelve con signos de exclamacion
//}
//Lo que pasa en esta funcion queda en esta funcion
//const saludarGritando = (nombre, apellido) => {
//    const NombreCompleto = obtenerNombreCompleto(nombre, apellido);
//    console.log(NombreCompleto);
//    const saludo = saludar(NombreCompleto); //nombreCompleto es quien compacta y guarda ambos
//    console.log(saludo);
//    const grito = gritar(saludo);
//    console.log(grito);
//}

//saludarGritando('Ada', 'Lovelace');
//obtenerNombreCompleto('sofia', 'ferrer') //ARGUMENTOS- tienen un valor no son algo generico 

//SEGUNDO-EJEMPLO 
//Defini una funcion sumarPorcentaje que tome como argumento un numero y un porcentaje y devuelva la sima de dicho numero con la de su porcentaje.Usar la funcion calcularPorcentaje para obtener el porcentaje a sumar
//Defini una funcion calcularPorcentaje que tome por parametros un numero y un porcentaje y devuelva el valor del porcentaje correspondiente al numero 

// javascrpcio es un lenguaje no tipado, las variables o funciones reciben cualqueir dato que le manden. Alser un lenguaje no tipado, hay que poner restricciones para que no explote todo. 

const calcularPorcentaje = (numero, porcentaje) => {
return Number(numero) * Number(porcentaje) / 100
}

const sumarPorcentaje = (numero, porcentaje) => {
return num + calcularPorcentaje(num, por)

}
console.log(sumarPorcentaje(100, 15))

//sumarPorcentaje(10, 50)
//15
//sumarPorcentaje(200, 10)
//220



