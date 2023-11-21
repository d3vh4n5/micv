const tabla = document.querySelector('tbody')
const btnComprar = document.querySelector("#btnComprar")
import { carritoFrutas, almacenarCarrito } from "./carrito.js"




const retornarTablaHTML = (producto)=>{
    return `
        <tr>
            <td>${producto.imagen}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>
                <button id="${producto.id}" class="btn-eliminar">❌</button>
            </td>
        </tr>
    `
}

function activarClickEnBotonesEliminar(){
    const botonesEliminar = document.querySelectorAll(".btn-eliminar")
    for (let botonEliminar of botonesEliminar){
        botonEliminar.addEventListener("click", ()=>{
            let frutaIndex = carritoFrutas.findIndex( producto => producto.id == botonEliminar.id)
            if (frutaIndex !== -1){
                if (parseInt(frutaIndex) === 0 && carritoFrutas.length === 1){
                    localStorage.removeItem('carritoFrutas')
                }
                carritoFrutas.splice(frutaIndex, 1)
                almacenarCarrito()
                llenarTabla()
            }
        })
    }
}

const llenarTabla = ()=>{
    tabla.innerHTML = ''
    if (carritoFrutas.length > 0){
        carritoFrutas.forEach( producto => {
            tabla.innerHTML += retornarTablaHTML(producto)
        });
    }
    console.table(carritoFrutas)
    activarClickEnBotonesEliminar()
}

const comprar = ()=>{
    localStorage.removeItem('carritoFrutas')
    tabla.innerHTML = ''
    alert("Gracias por su compra!! \nEl pedido está en camino!!")
}
btnComprar.addEventListener("click", ()=> comprar())


llenarTabla()