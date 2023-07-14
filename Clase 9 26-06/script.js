//DOM -> document object model 
//

//entorno de ejecucion, el navegador que interpreta nuestro codigo.
//objeto WINDOW que nos provee metodos como
//let nombre = prompt('Ingrese su nombre')
//alert(`el nombre ingresado es ${nombre}`)

//Variables espacio de memoria donde alojamos o guardamos un dato o un trozo de informacion para despues poder acceder a esa informacion 

//getElementById, por etiqueta 
const inputNombre = document.getElementById('name');
//console.log(inputNombre)
//const parrafos = document.getElementsByTagName('p');
//console.log(parrafos) 

const parrafoRojo = document.getElementsByClassName('red');
//console.log(parrafoRojo)
const parrafos2 = document.querySelector('.parrafo', 'parrafo');
//console.log(parrafos2)
const todosParrafos = document.querySelectorAll('.parrafo')
//console.log(todosParrafos)

//console.log(parrafoRojo[0].classList)
//console.log(parrafoRojo[0].innerText)

//TP 
inputNombre.setAttribute('maxlenght', '30')
inputNombre.setAttribute('minlength', '10')

const imgUrl = prompt('Ingrese la url de su imagen elegida')
const imagen = document.getElementById('meme-img')

console.log(imgUrl)

imagen.setAttribute('src', imgUrl)

listaDeParrafosRojos[0].style.color = 'red'   //MODO CLARO Y MODO OSCURO -si y no 

//si la propiedad de css se escribe font-size en java es fontSize 

const parrafoVerde = document.getElementsByClassName('parrafo-verde')
parrafoVerde.classList.remove('green') //ya no se ve el parrafo verde 

const titulo = document.getElementsByTagName('h2');
titulo[0].classList.remove('modo-claro');
titulo[0].classList.add('modo-oscuro')

//a lo ultimo podemos llamar a modo oscuro, para que active. El css es hoja de estilo en cascada. AGREGAR CLASE MODO OSCURO. 


