let productoSeleccionado = parseInt(prompt('Selecciona el producto que desee comprar: \n0.Dogui $500 \n1.Royal Canin $600 \n2.Dog Chow $450 \n3.Ken-L $400'))
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

alert(`El total de la compra es ${totalCompra}`)

