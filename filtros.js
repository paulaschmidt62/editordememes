//FILTROS 
let memeImg = document.getElementById('ingresa_img')
const cambioFiltros =()=>{
    const brightnessRng = document.getElementById('brightness').value
    const opacityRng = document.getElementById('opacity').value
    const contrastRng = document.getElementById('contrast').value
    const blurRng = document.getElementById('blur').value
    const grayscaleRng = document.getElementById('grayscale').value
    const sepiaRng = document.getElementById('sepia').value
    const hueRng = document.getElementById('hue').value
    const saturateRng = document.getElementById('saturate').value
    const invertRng = document.getElementById('invert').value
    
    memeImg.style.filter = `brightness(${brightnessRng}) opacity(${opacityRng}) blur(${blurRng}px) contrast(${contrastRng}%) grayscale(${grayscaleRng}%) hue-rotate(${hueRng}deg) sepia(${sepiaRng}%) saturate(${saturateRng}%) invert(${invertRng})`
  
  }

  const reestrablecerFiltros = () => {
    const brightnessRng = document.getElementById('brightness').value
    const opacityRng = document.getElementById('opacity').value
    const contrastRng = document.getElementById('contrast').value
    const blurRng = document.getElementById('blur').value
    const grayscaleRng = document.getElementById('grayscale').value
    const sepiaRng = document.getElementById('sepia').value
    const hueRng = document.getElementById('hue').value
    const saturateRng = document.getElementById('saturate').value
    const invertRng = document.getElementById('invert').value
    
    memeImg.style.filter = `brightness(${brightnessRng}) opacity(${opacityRng}) blur(${blurRng}px) contrast(${contrastRng}%) grayscale(${grayscaleRng}%) hue-rotate(${hueRng}deg) sepia(${sepiaRng}%) saturate(${saturateRng}%) invert(${invertRng})`
    
  }
  
  let inicializarFiltros = ()=>{
    document.getElementById('brightness').addEventListener('change', cambioFiltros)
    document.getElementById('opacity').addEventListener('change', cambioFiltros)
    document.getElementById('blur').addEventListener('change', cambioFiltros)
    document.getElementById('contrast').addEventListener('change', cambioFiltros)
    document.getElementById('grayscale').addEventListener('change', cambioFiltros)
    document.getElementById('hue').addEventListener('change', cambioFiltros)
    document.getElementById('sepia').addEventListener('change', cambioFiltros)
    document.getElementById('saturate').addEventListener('change', cambioFiltros)
    document.getElementById('invert').addEventListener('change', cambioFiltros) 

    document.getElementById('reset').addEventListener('click', reestrablecerFiltros)
    }
  
   // window.onload = inicializarFiltros