const boton = document.getElementById("boton");
const color = document.getElementById("contendor-color");
const hexColor = document.getElementById("hex-color");

const generarColorHexAleatorio = ()=>{
    let digitos = "0123456789ABCFEF";
    let colorHex = "#";
    for (let i = 0; i < 6; i++) {
        let indiceAleatorio = Math.floor(Math.random()*16)
        colorHex += digitos[indiceAleatorio];
    } 
    return colorHex;
};

boton.addEventListener('click',()=>{
    let colorAleatorio = generarColorHexAleatorio();
    color.style.backgroundColor = colorAleatorio;
    hexColor.textContent = "HEX: " + colorAleatorio;
});
