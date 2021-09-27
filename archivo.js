/******CAMBIOS DE COLUMNA IMAGEN > COLUMNA TEXTO ******/
const mostrarImagen = () => { 
    document.getElementById("columnaImagen").classList.remove("ocultar"); 
    document.getElementById("columnaTexto").classList.add("ocultar"); 
}

const mostrarTexto = () => {
    document.getElementById("columnaImagen").classList.add("ocultar");
    document.getElementById("columnaTexto").classList.remove("ocultar");
}
<<<<<<< HEAD
document.getElementById("botonImg").addEventListener("click", mostrarImagen)
document.getElementById("botonTexto").addEventListener("click", mostrarTexto)
=======

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

>>>>>>> 181332c8a7cea4c5ef82823e4408c6b228e3d647

/*****************para la cruz de cerrar ventana**********/    
document.getElementById("cerrar-p-tex").addEventListener("click", () => {
  document.getElementById("columnaTexto").classList.add("ocultar")
})

document.getElementById("cerrar-p-img").
addEventListener("click", () =>{
  document.getElementById("columnaImagen").classList.add("ocultar")
})
/********************************************************** */


<<<<<<< HEAD
/******COLUMNA IMAGEN ******/
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






/******COLUMNA TEXTO******/
/*********** texto superior e inferior > meme **********/
const $=(id) => document.getElementById(id)

const actualizarTextos = () => {
    $('text-sup-meme').textContent = $('text-sup-input').value
    $('text-inf-meme').textContent = $('text-inf-input').value
}

document.getElementById("text-sup-input").addEventListener("input", actualizarTextos)
document.getElementById("text-inf-input").addEventListener("input", actualizarTextos)
=======
window.onload=mostrarPaneles
>>>>>>> 181332c8a7cea4c5ef82823e4408c6b228e3d647
