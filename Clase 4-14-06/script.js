//REPASO- Ejersicio 14-funciones

//es impar(numero)
//crear una funcion esImpar que tome ocmo argumento un numeor y devuelva true si dicho numero es impar o false si no lo es 

//TIP: un unmeor es impar si diviido por 2 el resto (o modulo) de es aoperacion no es 0 

// esImpar(2) //flase
//esImpar (3) //true 

//operador modelo =>
//las funciones tienen una fuction, las usamos para obtener ciertos datos y tener otros resultados. adentro de cada funcion hay un mundo

function esImpar(numero) {
    return (numero % 2) === 1;
}

console.log(esImpar(15)) 
console.log(esImpar(346))

//dos == compara valor 
//tres === compara valor y TIPO DE DATO 
console.log(1 === '1');  //true
console.log(1 === '1');  //false

//operadores relacionales
//operadores de igualdad


// operadores relacionales 
// > mayor que 
// < menor que 
// = igual que 

//if (condicion) {
    // Entra en esta sección si se cumple la condición
//} else {
    // Entra en esta sección si no se cumple la condición
//}

const puedeVerPelicula = (edad, tieneAutorizacion) => {
    if(edad >= 15) {
        console.log('se cumple la condiicon y el usuario es mayor de edad')
        return true;
    }else if (tieneAutorizacion) {
        console.log('no es mayor de edad pero si se cumple la condiicon de tener autorizacion')
        return true;
    }else {
        console.log('no se cumple ninguna condicion el usuario no puede ver la')
        return false;
    }
}


console.log(puedeVerPelicula(12, false))  //false
console.log(puedeVerPelicula(12, true)) //true
console.log(puedeVerPelicula(16, false))  //true
console.log(puedeVerPelicula(18, true))  //false


//OPERADORES PARA COMPARAR COSAS
//OPERADORES RELACIONALES: para comparar
//OPERADORES DE IGUALDAD : para ver si son iguales o no 



