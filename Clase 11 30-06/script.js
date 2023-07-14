//Callbacks => funcion que se llama denntro de otra funcion. ES UNA FUNCION QUE VAMOS A PASAR COMO PARAMETRO EN OTRA FUNCION 

const mainContainer =document.getElementById('main.container') //DECLARO LA FUNCION 
const resultado = document.createElement('p')

const mostrar = (algo) => {
resultado.innerHTML = algo;
mainContainer.appendChild(resultado)
resultado.style.color = 'green'
}
mostrar('hola')

//appendChild -> mete una porcion de codigo dentro de otra. 


const calculadora = (num1, num2, myCallback) => {
let sum = num1 + num2; //suma estos dos numeros, llama a la callback y le pasa. CUANDO DECLARO LA FUNCION ESPERA 3 PARAMTROS, DOS NUMEROS Y UNA FUNCION.
myCallback(sun); //resultado de esa suma. guarda el resultado en la variable suma. 
}

calculadora(5, 5, mostrar); //num1,num2 y una funcion -cuando la invoco o la llamo tengo. CUANDO LA LLAMO LE PASO UN VALOR- ESO ES ARGUMENTO 

//---------------------//

//Propagacion de eventos (bubbiling) - propagacion de un evento desde adentro hacia afuera.  Los eventos se propagan hacia arriba, a sus padres a menos que capturemos el objeto evento y le apliquemos el metodo .stopPropagation

//stopPropagation

//creando HTML- 

//Modificando HTML

//innerHTML - introduce texto a html
//Templates de HTML 

//Distincon entre validacion de formulario del lado del cliente  y del lado del servidor-  el cliente desde el lado del clinete es el front- antes de validar la info a la base de datos. 


//required: es un atributo que se agrega a la etiqueta input y lo hace un campo obligatorio 
//minlenght and maxlenghtpara valdiar largo en caracteres
//min and max:es para validar numeros minimos y maximos 
//type
//pattern: regular expression 


const mailInput = document.getElementById('mail');

const boton = document.getElementById('submit-btn');

boton.addEventListener('click', () => enviarFormulario())

const enviarFormulario = () => {
    if (mailInput.value.includes('yahoo')) {
        alert('El formato de mail es muy antiguo')
    }
}

//Todos los input tienen por defectp un valor value.Lo veamos o no lo veamos, de eso se puede acceder, asi se vea o no se vea. 