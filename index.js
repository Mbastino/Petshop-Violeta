/* let productoSeleccionado = parseInt(prompt('Selecciona el producto que desee comprar: \n0.Dogui $500 \n1.Royal Canin $600 \n2.Dog Chow $450 \n3.Ken-L $400'))
let totalCompra = 0
let seguirComprando = true
let decision

class Producto{
    constructor(id,tipo,precio){
        this.id=id
        this.tipo=tipo
        this.precio=precio
    }
}

const dogui = new Producto(0,'Dogui',500)
const royalCanin = new Producto(1,'Royal Canin',600)
const dogChow = new Producto(2,'Dog Chow',450)
const kenL = new Producto(3,'Ken-L',400)

const comidasExistentes = [dogui,royalCanin,dogChow,kenL]

while(seguirComprando === true){
    const productoCliente = comidasExistentes.find(producto=>producto.id === productoSeleccionado)
    if(productoCliente){
        totalCompra = totalCompra + productoCliente.precio
    } else{
        productoSeleccionado = parseInt(prompt('Por favor seleccione uno de los productos de la lista: \n0.Dogui $500 \n1.Royal Canin $600 \n2.Dog Chow $450 \n3.Ken-L $400'))
        continue
    }
    decision = parseInt(prompt('Quieres continuar comprando: \n1.Si \n2.No'))
    if(decision === 1){
        productoSeleccionado = parseInt(prompt('Selecciona el producto que desee comprar: \n0.Dogui $500 \n1.Royal Canin $600 \n2.Dog Chow $450 \n3.Ken-L $400'))
    } else{
        seguirComprando = false
    }
}

alert(`El total de la compra es ${totalCompra}`) */

const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor')

let carrito = []

stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt="">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p class="precioProducto">Precio:${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="bi bi-cart"></i></button>
    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById('agregar${producto.id}')
    boton.addEventListener(click, ()=>{
        agregarAlCarrito(producto.id)
    })
})

const agregarAlCarrito = (prodId) => {
    const item = stockProductos.find((prod)=> prod.id === prodId)
    carrito.push(item)
}
 
const actualizarCarrito = () =>{
    carrito.forEach((prod)=>{
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio: ${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad},</span></p>
        <button onclick = "eliminarDelCarrito(${prod.id})" class="boton-elminar"><i class="bi bi-trash"></i></button>
        `
        contenedorCarrito.appendChild(div)
    })
}