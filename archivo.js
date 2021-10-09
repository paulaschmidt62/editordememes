
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
const header = document.querySelector(".header")



btnColorMode.addEventListener("click", () => {
    fondo.classList.toggle("containerClaro");
    fondoAsideImg.classList.toggle('.contengralClaro')
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
    domtoimage.toBlob(container_meme).then((blob) => {
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

}

const ocultarTextoInfMeme = () => {
  let ocultar2 = document.getElementById('text-inf-meme');
  ocultar2.classList.toggle('close');
}

const ocultarTodo = ()=>{
  ocultarTextoInfMeme()
  ocultarTextoSupMeme()
}


/*
//CAMBIAR FUENTE
let cambiarFuente = () => {
  let fuente = document.getElementById('seleccionarFuentes').value

  document.getElementById('text-sup-meme').style.fontFamily = fuente
  document.getElementById('text-inf-meme').style.fontFamily = fuente
}


//CAMBIAR ALINEACION
let derecha = document.getElementById('botonTizquierdo')
let centro= document.getElementById('botonTcentro')
let izquierda= document.getElementById('botonTderecho')

const alineacionD = () => {
  document.getElementById('text-sup-meme').style.textAlign = 'right'
  document.getElementById('text-inf-meme').style.textAlign = 'right'
}
const alineacionC = () => {
  document.getElementById('text-sup-meme').style.textAlign = 'center'
  document.getElementById('text-inf-meme').style.textAlign = 'center'
}
const alineacionI = () => {
  document.getElementById('text-sup-meme').style.textAlign = 'left'
  document.getElementById('text-inf-meme').style.textAlign = 'left'
}

//CAMBIAR CONTORNO
let contOs = document.getElementById('contornoOscuro')
let contCl= document.getElementById('contornoClaro')
let contTr= document.getElementById('ninguno')

const claro = () => {
  document.getElementById('text-sup-meme').style.textShadow = '0 0 5px #fff'
  document.getElementById('text-inf-meme').style.textShadow = '0 0 5px #fff'
}
const oscuro = () => {
  document.getElementById('text-sup-meme').style.textShadow = '0 0 5px #000'
  document.getElementById('text-inf-meme').style.textShadow = '0 0 5px #000'
}
const transparente = () => {
  document.getElementById('text-sup-meme').style.textShadow = '0 0 5px transparent'
  document.getElementById('text-inf-meme').style.textShadow = '0 0 5px transparent'
}

//CAMBIAR TAMAÑO DE FUENTE
let inputTamano = document.getElementById('tamnoFuentes') 

const cambiarTam = () => {
  document.getElementById('text-sup-meme').style.fontSize = inputTamano.value+'px'
  document.getElementById('text-inf-meme').style.fontSize = inputTamano.value+'px'
}




let inicializarTexto = () => {
  document.getElementById('seleccionarFuentes').addEventListener('change',cambiarFuente)
  derecha.addEventListener('click',alineacionD)
  centro.addEventListener('click',alineacionC)
  izquierda.addEventListener('click',alineacionI)

  contOs.addEventListener('click',oscuro)
  contCl.addEventListener('click',claro)
  contTr.addEventListener('click',transparente)

  inputTamano.addEventListener('click', cambiarTam)

}


window.onload= inicializarTexto;
*/


let inicializar = ()=>{
  inicializarTexto()
  inicializarFiltros()
}

window.onload = inicializar