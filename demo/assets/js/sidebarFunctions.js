const btnCerrar = document.querySelector('.btn-cerrar')
export const breakpoint = 992;
const sidebar = document.querySelector('#offcanvasScrolling')
let cerradoPrimeraVez = localStorage.getItem('SDVista') || false; // Pasar afuera?

function sidenavHandler(){
    sidebar.classList.toggle('show');
    btnCerrar.addEventListener('click', ()=>{
        localStorage.setItem('SDVista', true)
        sidenavHandler();
    })
}

export function comportamientoDefinido(){
    let contiene = sidebar.classList.contains('show');

    if(!cerradoPrimeraVez && contiene){
        btnCerrar.addEventListener('click', ()=>{
            localStorage.setItem('SDVista', true);
            sidenavHandler()
        })
    } else if (cerradoPrimeraVez && contiene){
        sidebar.classList.remove('show');
    }
}


export function comportamientoDinamico(){
    let contiene = sidebar.classList.contains('show')

    // Ancho del área de contenido de la ventana del navegador, excluyendo barras de desplazamiento
    let anchoVentana = window.innerWidth || document.documentElement.clientWidth;
    // Ancho del área de contenido de la ventana del navegador, incluyendo barras de desplazamiento
    let anchoVentanaConScroll = window.innerWidth;

    if (anchoVentanaConScroll < breakpoint && !contiene && !cerradoPrimeraVez){
        sidebar.classList.add('show')
        
    } else if (anchoVentanaConScroll < breakpoint && contiene && cerradoPrimeraVez){
        sidebar.classList.remove('show')
    } else if (anchoVentanaConScroll < breakpoint && !contiene && !cerradoPrimeraVez){
        sidebar.classList.add('show')
        
    } else if (anchoVentanaConScroll < breakpoint && contiene && !cerradoPrimeraVez){
        btnCerrar.addEventListener('click', ()=>{
            localStorage.setItem('SDVista', true)
        })
    } else if (anchoVentanaConScroll > breakpoint && !contiene){
        sidenavHandler();
    } else {
        btnCerrar.addEventListener('click', ()=>{
            sidenavHandler();
        })
    }
}