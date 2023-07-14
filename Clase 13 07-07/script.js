

const colorPiquer = document.getElementById('color-piquer')
const colorName = document.getElementById('color-name')
console.log(colorName);

const cambiarFondoMeme = () => {
    console.log(colorPiquer.value);
    colorName.innerHTML = `${colorPiquer.value}`;
}


colorPiquer.addEventListener('input', () => cambiarFondoMmeme());
