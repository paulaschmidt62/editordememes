/******CAMBIOS DE COLUMNA IMAGEN > COLUMNA TEXTO ******/
const mostrarImagen = () => { 
  document.getElementById("columnaImagen").classList.remove("ocultar");
  document.getElementById("columnaTexto").classList.add("ocultar"); 
} 

const mostrarTexto = () => {
  document.getElementById("columnaImagen").classList.add("ocultar");
  document.getElementById("columnaTexto").classList.remove("ocultar"); 
}

  document.getElementById("botonImg").addEventListener("click", () => {
    mostrarImagen()
    
  })

  document.getElementById("botonTexto").addEventListener("click", () => {
    mostrarTexto()
    
  })




// CAMBIO DE MODO OSCURO A CLARO
//Falta cambiar el contorno blanco a negro del nav y el color de la letra

const btnColorMode = document.querySelector(".btn-color-mode")
const fondo = document.querySelector(".container")
const fondoAsideImg = document.querySelector(".contengral")
const fondoAsideTxt = document.querySelector(".contengralTxt")
const header = document.querySelector(".header")



btnColorMode.addEventListener("click", () => {
    fondo.classList.toggle("containerClaro");
    fondoAsideImg.classList.toggle("contengralClaro");
    fondoAsideTxt.classList.toggle("contengralClaro");
    header.classList.toggle("headerClaro");

})

/*****************para la cruz de cerrar ventana**********/    
document.getElementById("cerrar-p-tex").addEventListener("click", () => {
  document.getElementById("columnaTexto").classList.add("ocultar")
  iniciarPaneles()  
  })
  
  document.getElementById("cerrar-p-img").addEventListener("click", () =>{
  document.getElementById("columnaImagen").classList.add("ocultar")
  iniciarPaneles()
  })




/********************************************************** */
///////////////////ingreso url imagen///////////////
document.getElementById("url-imagen").addEventListener("input", IngresaImgMeme = () =>{
  let ingresourl= document.getElementById("url-imagen")
  let ingresomeme= document.getElementById("ingresa_img")

  ingresomeme.style.backgroundImage= `url(" ${ingresourl.value} ")`
})



//DESCARGAR IMAGEN
const boton_img_cargada = document.getElementById("boton_descarga_img_cargada")

boton_img_cargada.onclick = () => {
    domtoimage.toBlob(ingresa_img).then((blob) => {
        window.saveAs(blob, "memazo.jpg");
    });
};

/////////////color y blendmode fondo/////////////////
/////colocar los values en el index////////////////

let ingresomeme= document.getElementById("ingresa_img")

colorFondo.addEventListener("input", function(){
   ingresomeme.style.backgroundColor = colorFondo.value
})


let selectFondo = document.getElementById("select-fondo")

selectFondo.addEventListener("change", function (){
  ingresomeme.style.backgroundBlendMode =  selectFondo.value
})







///////////////color y fondo texto///////////////////


let topText= document.getElementById("text-sup-meme")
let bottomText = document.getElementById("text-inf-meme")

let colorText = document.getElementById("colorTexto")

colorText.addEventListener("input", function(){
  let colorsec= colorText.value

  topText.style.color = colorsec
  bottomText.style.color = colorsec
})

let fondoText = document.getElementById("colorFondoTexto")

fondoText.addEventListener("input", mostrarFondo)

function mostrarFondo(){
  let colorsec= fondoText.value

  topText.style.backgroundColor = colorsec
  bottomText.style.backgroundColor = colorsec
}





/******COLUMNA IMAGEN ******/
/*********** filtros **********/
const actualizarFiltros = () => {
  const brightness = $('brightness').value
  const opacity = $('opacity').value
  const contrast = $('contrast').value
  const blur = $('blur').value
  const grayscale = $('grayscale').value
  const sepia = $('sepia').value
  const hue = $('hue').value
  const saturate = $('saturate').value
  const invert = $('invert').value
  $(
    'container_meme'
  ).style.filter = `brightness(${brightness}) opacity(${opacity}) blur(${blur}px) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${hue}deg) sepia(${sepia}%) saturate(${saturate}%) invert(${invert})`
}
const reestrablecerFiltros = () => {
  $('brightness').value = 1
  $('opacity').value = 1
  $('contrast').value = 100
  $('blur').value = 0
  $('grayscale').value = 0
  $('sepia').value = 0
  $('hue').value = 0
  $('saturate').value = 100
  $('invert').value = 0
 
actualizarFiltros()

}


/*
const inicializarImagen = () => {
  $('IngresaImgMeme').addEventListener('input', actualizarFiltros)
  $('brightness').addEventListener('change', actualizarFiltros)
  $('opacity').addEventListener('change', actualizarFiltros)
  $('contrast').addEventListener('change', actualizarFiltros)
  $('blur').addEventListener('change', actualizarFiltros)
  $('grayscale').addEventListener('change', actualizarFiltros)
  $('sepia').addEventListener('change', actualizarFiltros)
  $('hue').addEventListener('change', actualizarFiltros)
  $('saturate').addEventListener('change', actualizarFiltros)
  $('invert').addEventListener('change', actualizarFiltros)
  $('').addEventListener('click',actualizarFiltros)
*/

//no funcionan los filtros




/******COLUMNA TEXTO******/
/*********** texto superior e inferior > meme **********/
const $=(id) => document.getElementById(id)

const actualizarTextos = () => {
  $('text-sup-meme').textContent = $('text-sup-input').value;
  $('text-inf-meme').textContent = $('text-inf-input').value;
}

document.getElementById("text-sup-input").addEventListener("input", actualizarTextos)
document.getElementById("text-inf-input").addEventListener("input", actualizarTextos)



const ocultarTextoSupMeme = () => {
 let ocultar = document.getElementById('text-sup-meme');
 ocultar.classList.toggle('close');
 //$('ingresa_img').style.height = 80%;
 //LA IMG SE DESACOMODA CUANDO SE EJECUTA LA FUNCION
}

const ocultarTextoInfMeme = () => {
  let ocultar2 = document.getElementById('text-inf-meme');
  ocultar2.classList.toggle('close');
  // MISMO PROBLEMA QUE LINEA 150
}

//CAMBIAR FUENTE
//no funciona, solo toma el primer tipo de letra
const cambiarFuente = () => {
  const fuente = $('seleccionarFuentes').value

  $('text-sup-meme').style.fontFamily = fuente
  $('text-inf-meme').style.fontFamily = fuente
}

cambiarFuente();

const inicializarTexto = () => {
  $('seleccionarFuentes').addEventListener('change',cambiarFuente)
}


//CAMBIAR ALINEACION
const alineacion = () => {
  
}


/*********** fondo transparente **********/

const FondoTransparente = () => {
  document.getElementById("text-sup-meme").classList.remove("top");
  document.getElementById("text-inf-meme").classList.remove("top");
}

document.getElementById("text-sup-meme").addEventListener("input", FondoTransparente)
document.getElementById("text-inf-meme").addEventListener("input", FondoTransparente)

//no funciona tampoco






/*********** contorno del texto **********/
function ContornoClaro(){
  let claro = document.getElementById('text-sup-meme');
  claro.classList.toggle('contorno-claro')
  
}
function ContornoOscuro(){
  let oscuro = document.getElementById('text-sup-meme');
  oscuro.classList.toggle('contorno-oscuro')
  
}
document.getElementById('ContornoClaro').addEventListener('click',ContornoClaro)

//no funciona con ID tampoco si utilizamos el button.  

