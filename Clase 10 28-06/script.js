//cuando invocamos una funcion, lo que le pasamos entre parentesis es el argumento. 

//EVENTOS: acontecimietnos,interacciones con elementos de un sitio web o una app 

//EVENT HANDLER- manejador de eventos
const caja = document.getElementById('box')
const boton = document.getElementById('boton')

const cambioDeColor = () => { //agarra la caja y le pone el color red
   // console.log('me ejecute')
    caja.style.backgroundColor = 'red'
    
}

boton.addEventListener('click', () => cambioDeColor(colorcito));


//escuchador de eventos, que evento estamos esperando, y que espermos que suceda. EEVNTO QUE ESPERO Y LA FUNCION QUE EJECUTO CON ESTE FORMATO () =>

//Eventos de mouse y teclado 
//el objeto EVENT -> se carga con un monton de informacion.

//const input = document.getElementById('my-input');

const escribiendo = (e) => {
console.log('escribiendo', e)
}

input.addEventListener('input', (evento) => escribiendo(evento)) //Argumento y parametro -> la E estructura la funcion o la declara funcion escribiedno que recibbe un paramtro que muestra en consola. cunado la ejecuta, mencinono o llamo no se llama de la misma manera. captura el evento (evento) y se pasa a la funcion 

// me interesa el value y el target- capturar el valor del input : manera de obtener el valor de un input 

//input.addEventListener('input', (evento) => escribiendo (evento))


//Callbacks

//function myDisplayer(some){
//    document.getElementById("demo").innerHTML = some
//}


const input = document.getElementById('my-input');
const obtenerColor = (e) => {
    console.log(e.target.value)
    colorcito = e.target.valor;
}

input.addEventListener('input', (evento) => obtenerColor(evento))


