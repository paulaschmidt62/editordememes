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

/*********** filtros **********/
const actualizarFiltros = () => {
    const brightness = document.getElementById('brightness').value;
    const opacity = document.getElementById('opacity').value;
    const contrast = document.getElementById('contrast').value;
    const blur = document.getElementById('blur').value;
    const grayscale = document.getElementById('grayscale').value;
    const sepia = document.getElementById('sepia').value;
    const hue = document.getElementById('hue').value;
    const saturate = document.getElementById('saturate').value;
    const invert = document.getElementById('invert').value;
  
    $(
      'imagememe'
    ).style.filter = `brightness(${brightness}) opacity(${opacity}) blur(${blur}px) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${hue}deg) sepia(${sepia}%) saturate(${saturate}%) invert(${invert})`
  }
  
  const reestrablecerFiltros = () => {
    document.getElementById('brightness').value = 1
    document.getElementById('opacity').value = 1
    document.getElementById('contrast').value = 100
    document.getElementById('blur').value = 0
    document.getElementById('grayscale').value = 0
    document.getElementById('sepia').value = 0
    document.getElementById('hue').value = 0
    document.getElementById('saturate').value = 100
    document.getElementById('invert').value = 0
  
    actualizarFiltros()
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
