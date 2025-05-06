 import React,{useState} from "react";
function ProductoJS() {
    let productos = [];

    /**
    const boton=document.getElementById("boton");

    boton.addEventListener("click",() => {
        
        const nombre= document.getElementById("nombre");
        const precio=document.getElementById("precio");

        const producto={nombre,precio};
        productos.push(producto);
        const lista=document.getElementById('lista');

        lista.textContent=`producto: ${producto.nombre} - precio: $${producto.precio}`;
    })*/
 
    function submint(evento) {
        evento.preventDefault();

        const nombre= document.getElementById("nombre").value;
        const precio=document.getElementById("precio").value;

        const producto={nombre,precio};
        productos.push(producto);

        const lista=document.getElementById('lista-productos');
        const item=document.createElement('li');
        item.textContent=`producto: ${producto.nombre} - precio: $${producto.precio}`;
        lista.appendChild(item);
    }

    return(
        <>
        <form onSubmit={submint}>
            <input type="text" id="nombre" name="nombre" placeholder="Nombre del producto" required />
            <input type="text" id="precio" name="precio" placeholder="Precio" required />
            <button className="btagregar" type="submit">Agregar Producto </button>
            <h2>Productos Agregados</h2>
            <ul className="lisProducto"></ul>
        </form>
        </>
    );
}
export default ProductoJS;