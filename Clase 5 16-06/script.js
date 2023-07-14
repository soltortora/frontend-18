//Defini una funcion ContarPalabas que reciba como argumento un string str y devuelva la cantidad de palabras que posee 

//contarPalabras ('javascript')
//1
//contarPalabras ('ada Lovelace')
//2
//contarPalabras ('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos')

const contarPalabrasCorto = (mensaje) => {
    return mensaje.split ('').length
}

const contarPalabras = (mensaje) => {
    let mensajeCortado =mensaje.split('')
    let num = mensajeCortado.length
    return num 
}

console.log(contarPalabras ('javascript'));
console.log(contarPalabras ('ada lovelace'));
console.log(contarPalabras ('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos'));

//CONDICIONALES
//operadores && => y , || => or    para validar dos cosas 

// crear una funcion puedeAvanzar que tome como argumento un string ocn el color del semafoto y devuelva true si puede avanzar o false si no. Si no se ingresa un color valido, debe devolver un string que diga: Error: color de semafoto invalido 

const puedeAvanzar = (color) => {
    if (color.tolowerCase() === 'verde') {
        return true 
    } else if (color.tolowerCase() === 'rojo' || color.tolowerCase() === 'amarillo') {
        return false  //return corta la ejecucion de la funcion 
    } 
    return alert(`Ërror: color de semaforo ${color} es invalido`)
}

puedeAvanzar('verde')  //true
puedeAvanzar('amarillo')  //false
puedeAvanzar('rojo')  //false
puedeAvanzar('lila')  // 'Erorr: color de semaforo invalido'


// estanEnRango(valor, minimo, maximo)
//Crear una funcion estaEnRango que tome como argumentos tres numeros, un valor, un numero minimo y un numero maximo. y devuelva true si es el valor se encunetra entre los numero minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que esta dentro del rango)


const estaEnRango = (valor, minimo, maximo) => {
    if (valor >= minimo){
        if (valor >=minimo && valor <= maximo){ 
            return true;
        }  
        return false
    }
}

estaEnRango(3, 1, 10) // true
estaEnRango(1, 1, 10) // true
estaEnRango(10, 1, 10) // true
estaEnRango(12, 1, 10) // false
estaEnRango(-3, 1, 10) // false

//SWITCH si pasa tal cosa ejecuto esto, sino esto

const semaforo = () => {
    switch (color) {
        case 'value':
            puedePasar = true;
            break;
        case 'amarillo':
            puedePasar = false;
        break;
        case 'rojo':
            puedePasar = false;
            break;
        default:
            puedePasar = alert('color invalido')
            break;
    }
    console.log(puedePasar)
}

semaforo('rojo');
semaforo('frutilla');


//Expresiones regulares -> tienen una sintaxis bastante compleja. /[]/

