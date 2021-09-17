const mostrarPaneles=()=>{
    document.getElementById("botonImg").addEventListener("click", mostrarImagen)

    document.getElementById("botonTexto").addEventListener("click", mostrarTexto)

}


const mostrarImagen=()=>{
    document.getElementById("columnaImagen").classList.remove("ocultar")

    document.getElementById("columnaTexto").classList.add("ocultar")
}

const mostrarTexto=()=>{
    document.getElementById("columnaImagen").classList.add("ocultar")

    document.getElementById("columnaTexto").classList.remove("ocultar")
}



/*****************para la cruz de cerrar ventana**********/    
document.getElementById("cerrar-p-tex").addEventListener("click", () => {
    document.getElementById("columnaTexto").classList.add("ocultar")
})

document.getElementById("cerrar-p-img").
addEventListener("click", () =>{
    document.getElementById("columnaImagen").classList.add("ocultar")
})
/********************************************************** */


window.onload=mostrarPaneles