const textButtom = document.getElementById('text-btn')
const imgButtom = document.getElementById('img-btn')
const modeButtom = document.getElementById('mode-btn')



const textAside = document.getElementById('aside-text')
const imgAside = document.getElementById('aside-img')
const mainContainer = document.getElementById('main-container')


//funcion cambia de color claro u oscuro 
textButtom.addEventListener('click', () => hideTextAside())
imgButtom.addEventListener('click', () => hideImgAside())
modeButtom.addEventListener('click', ()=> changeMode())

const hideTextAside = () => {
    imgAside.classList.add('hidden');
    textAside.classList.remove('hidden');
}

const hideImgAside = () => {
    textAside.classList.add('hidden');
    imgAside.classList.remove('hidden');
}

//const changeMode = () => {
//    bothAsides[0].classList.add('dark-asides')
//    bothAsides[1].classList.add('dark-asides')
//console.log(bothAsides)
//}

const changeMode = () => {
    textAside.classList.toggle('dark-aside');
    imgAside.classList.toggle('dark-aside');
    mainContainer.classList.toggle('main-container-dark');
}
    if (modeButton.innerHTML === "Modo oscuro") {
        buttonMode.innerHTML = "Modo claro";
    }else {
        buttonMode.innerHTML = "Modo oscuro"; 
    }





//MEME

const urlInput = document.getElementById('url-input');
const memeImg = document.getElementById('meme-img');

urlInput.addEventListener('input', (e)=> changeBackground(e));

const changeBackground = (e) => {
    memeImg.style.backgroundImage = `url('${e.target.value}')`
}

//FILTROS 

const brighInput = document.getElementById('bright-input');
const contrastInput = document.getElementById('constrast-input');

console.log(brighInput.value)
console.log(contrastInput.value)

const filtros = () => {
    console.log(e.target.value)
    memeImg.style.filter = `brightness(${brighInput.value}) opacity(0.8) blur(0px) contrast(${contrastInput.value}%) grayscale(0%) hue-rotate(0deg) sepia(0%) saturate(100%) invert(0)`
}

brighInput.addEventListener('input', ()=> filtros(e))
contrastInput.addEventListener('input', ()=> filtros(e))









// cada vez que hay un evento se genera el evento obejto- evento cargado de informacion. input guarda el valor del input, lo que tiene adentro, lo que pegamos. 

// otra opcion para el modo oscuro modo claro desde un boton 


