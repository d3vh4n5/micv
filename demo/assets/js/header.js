import { 
    comportamientoDinamico,
    comportamientoDefinido,
    breakpoint,
} from "./sidebarFunctions.js";



// Dos camios, el de escuchar el ancho del monitor (screen.width) 
// tiene un comportamiento completamente definido, y por el else
// conviene escuchar el ancho de la ventana del navegador y tiene un
// comportamiento más dinámico.

let anchoPantalla = window.screen.width

document.addEventListener("DOMContentLoaded", function() {
    if (anchoPantalla < breakpoint){
        comportamientoDefinido()
    } else {
        comportamientoDinamico()
        window.addEventListener('resize', ()=>{
            comportamientoDinamico()
        })
    }
});
