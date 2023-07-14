// Condicionales -> 

//condicion => true / false 

//Estrcutra basica de los condicionales 
const condicion = true  //condicion ya guarda TRUE.
if (condicion) {
    //bloque de codigo que se ejecuta si mi condicon se cumpla
    console.log('Entre en el ig, mi condicion se cumplio')
} else {
    console.log('Mi condicion no se cumplio')
}

//Lo que este entre parentesis tiene que dar true la condicion entera. 

//(!condicion) -> ! lo vuelve negativo

const numero1 =10
const numero2 = "10"

// == , ===, >, <, <=, !. !=, !==    -->validan datos y retornann un boleano que se puede usar en un if. 

console.log(numero1 == numero2) //true
console.log(numero1 === numero2) //false 
console.log(numero1 > numero2) //false

//Tipos de datos primitivos: string, number, null, undefined, NaN, boolean 
//corresponden a un truthy o falsy -> caa tipo de dato corrsponden a un tipo verdadero o un tipo falso.

const nombre = "pilar"

if (nombre) {
    console.log ("Entre en el if")
}else {
    console.log("Entre en el else")
}

//Si no tiene caracter/string para javascrip es un DATO falso FALSY, un  string que si tiene algo es de tipo TRUTHY

const num1 = prompt('ingrese un numero')

if (isNaN(num1)) { //isNan funcion nativa de javascript que pregunta por lo que sirve de argumenta y devuelve o un true o un false 
    console.log("Entre en el if")
}



//switch -> evalua algo entre parentesis y pregunta si hay un caso que conindida y ejecuta algo

const diaDeLaSemana = prompt("Ingresa un numero del 1 al 7")

switch(diaDeLaSemana){
    case 1:
        console.log("Es lunes")
        break
}
// && evaluan dos o mas condiciones, primero evalue esto y despues otra cosa  => la unica forma de que mi condicon se cumpla es que TODOS mis terminos den true 
//const num1 =10
//const num2 =20
//const condicion =true 

//if (num2 > num1 && condicion) { //operador && separa terminos
//    console.log("Me cumpli")
//}else {
//    console.log("No me cumpli")
//}

// || La unica forma de que mi condicion NO se cumpla es que ninguno de mis terminos sean true 


//ESCRIBIR UN PROGRAMA QUE EVALUE SI LA PERSONA ES APTA PARA SACAR LA LICENCIA DE CONDUCIR 

//const edad =18
//const sabeManejar = true

//if (edad >= 18 && sabeManejar){  
    console.log('Toma tu licencia')
//}else{
//    console.log('Todavia no podes manejar')
//}

//Funciones nativas 

// .Length -> es un metodo nativo de java, devuelve la cantidad de carcterires que tiene un string 

//const nombre = "Pilar figueroa"

//console.log(nombre.length)  ->devuelve cantidad de caracteres

//toUpperCase => devuelve el mismo string que recibe o conel cual se ejecuta pero todo en mayuscula 

//console.log(nombre.toUpperCase())


//tolowerCase => devuelve el mismo string pero en minuscula

//console.log(nombre.tolowerCase)

//slice() => cortar el string a partir de la posciion del caracter que le indiquemos 

//const apellido = nombre.slice(6)
//console.log(apellido)
//desde, hasta 
//const primeraLetra = nombre.slice(0, 1)
//console.log(primeraLetra)

//SI QUIERO LA PRIMER LETRA EN MAYUSCULA 

//const primerLetraMayuscula = primeraLetra.toUpperCase()
//const resultadoFinal = nombre.replace("p", primeraLetraMayuscula)
//console.log(resultadoFinal)

//REPLACE -> el primer argumento es aquello que quiero reemplazar, y el segundo es por lo que va a ser reemplazado. 

//Operador ternario => es un condicional mas. 

//const num1 = 10
//const num2 = 20

//num1 > num2 ? console.log("Entre en el if ") : console.log("Entra en el else")


//es fraccionMayorAUno(fraccion)
//Crear una funcion esFraccionMayorAUno que tome como argumento un string fraccion(en el formato "enumerador/denominador") y devuelva true si dicha fraccion es mayor a 1 o false de lo contrario 

// "1/2" el entero tiene dos partes -> ANALIZAR LA CONSIGNA, COMPRENDER Y ANALIZAR LA CONSIGNA. DIVIDIR EL RESULTADO Y FIJARME SI ES MAYOR A 1

//const esFraccionMayorAUno = (fraccion) => {
//  const num1 = Number(fraccion.slice(0, 1))
//const num2 = Number(fraccion.slice(2))
//    const resultado =numerador / denominador 
//    if (resultado > 1){
//       return true
//    }else {
//        return false 
//    }
//}



