 import React from "react";
function ProductoJS() {
    let productos = [];
    
    function submint(evento) {
        evento.preventDefault();
        
        const nombre= document.getElementById("nombre").value;
        const precio= parseFloat(document.getElementById("precio").value);
        
        const producto={nombre,precio};
        productos.push(producto);

        const lista=document.querySelector('.lisProducto');
        const item=document.createElement('li');
        item.textContent=`producto: ${producto.nombre} - precio: $${producto.precio}`;
        lista.appendChild(item);
        mostrarProductos();
        evento.target.reset()
    }

    function mostrarProductos() {
        productos.forEach(producto => {
            console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
        });
    }

    function mostrarEnPagina(titulo,datos)
    {   const contenedor = document.getElementById("contenedorR")
        contenedor.innerHTML = '';

        const tituloElemento = document.createElement("h3");
        tituloElemento.textContent = titulo;
        contenedor.appendChild(tituloElemento);

        const lista = document.createElement('ul');
        datos.forEach(item =>{
            const elemento = document.createElement('li')
            elemento.textContent = `Producto: ${item.nombre} - Precio: $${item.precio}`;
            lista.appendChild(elemento);
        });
        contenedor.appendChild(lista);
    }

    function actualizarPag (){
        const listaPrincipal = document.querySelector (".lisProducto");
        listaPrincipal.innerHTML = '';
        productos.forEach(producto => {
            const item = document.createElement('li');
            item.textContent = `Producto: ${producto.nombre} - Precio: $${producto.precio}`;
            listaPrincipal.appendChild(item);
        });
    }

    function handlecaros (){
        const caros = productos.filter(producto => producto.precio > 4000); //tomando en cuenta precios reales de alimentos,viveres,etc
        mostrarEnPagina("Productos Caros: ", caros);
    }
    
    function handleconIVA() {
        const conIVA = productos.map(producto => ({
            nombre: producto.nombre,
            precio: producto.precio * 1.21
        }));
        mostrarEnPagina("Productos con IVA: ", conIVA);
    }
    
    function handleordenar(){
           productos.sort((a, b) => a.precio - b.precio);   
          actualizarPag();
            mostrarEnPagina("Productos Ordenados: ",productos);
            
    }
    


    function handleliminarproducto (){
        if (productos.length === 0) return [];
        
            const preciobajo = Math.min(...productos.map(p => p.precio));
            const indice = productos.findIndex(p => p.precio === preciobajo);
            
            if (indice !== -1)
            {   
                const eliminado = productos[indice];
                productos.splice(indice, 1);
                mostrarEnPagina ("producto eliminado: ", [{nombre: eliminado.nombre , precio: preciobajo}]);
            }
            actualizarPag();
        }

    return(
        <>
        <form onSubmit={submint}>
            <div>
                <input type="text" id="nombre" name="nombre" placeholder="Nombre del producto" required />
                <input type="text" id="precio" name="precio" placeholder="Precio" required />
                <button className="btagregar" type="submit">Agregar Producto </button>
            </div>
            <h2>Productos Agregados</h2>
        </form>
            <ul className="lisProducto"></ul>
        <div className="botones-container">
            <button className="botonesprod" onClick={handlecaros}>Productos caros</button>
            <button className="botonesprod" onClick={handleconIVA}>Calcular IVA</button>
            <button className="botonesprod" onClick={handleordenar}>Ordenar Precios</button>
            <button className="botonesprod" onClick={handleliminarproducto}>Eliminar Barato</button>
        </div>
        
            <div id="contenedorR">

            </div>

        </>
    );
}
export default ProductoJS;