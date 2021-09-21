//Modo oscuro- modo claro
const cambiarColor = () =>{
    let colorFondo = document.getElementById("lightMode");
        if (colorFondo.classList.contains("colorMode")){
            colorFondo.classList.remove("colorMode");
        }
        else{
            colorFondo.classList.add("colorMode");
        }
}