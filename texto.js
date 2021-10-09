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


  
  
  //window.onload= inicializarTexto;