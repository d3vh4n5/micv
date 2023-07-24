// const carritoFrutas = localStorage.getItem('carritoFrutas') || [];

export const agregarAlCarrito = (frutaId, productos) =>{ //agregué productos como parámetro para que funcione, sinó de un error... largo...
    if (frutaId > 0){
        const resultado = productos.find(producto => producto.id == frutaId)
        if (resultado !== undefined) {
            carritoFrutas.push(resultado)
            almacenarCarrito()
            console.log(`%cEl producto: ${frutaId} se agregó correctamente al carrito`, 'color: green; font-weight: bold;');
        } else {
            console.error("No se encontró el producto")
            return
        }
    }
}

export const almacenarCarrito = ()=>{
    if(carritoFrutas.length > 0){
        localStorage.setItem('carritoFrutas', JSON.stringify(carritoFrutas))
    }
}

const recuperarCarrito = ()=>{
    return JSON.parse(localStorage.getItem('carritoFrutas')) || [];
}

export const carritoFrutas = recuperarCarrito()