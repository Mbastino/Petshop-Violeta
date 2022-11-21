let productoSeleccionado = parseInt(prompt('Selecciona el producto que desee comprar: \n0.Dogui \n1.Royal Canin \n2.Dog Chow \n3.Ken-L'))
let totalCompra = 0
let seguiComprando = true
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

const comidasExistentes = [dogui,royalCanin,dogChow]
comidasExistentes.push(kenL)

while (seguiComprando === true){
    const productoCliente = comidasExistentes.find(producto=>producto.id === productoSeleccionado)
    if(productoCliente){
        totalCompra = totalCompra + productoCliente.precio
    } else{
        productoSeleccionado = parseInt(prompt('Por favor seleccione uno de los productos de la lista: \n0.Dogui \n1.Royal Canin \n2.Dog Chow \n3.Ken-L'))
        continue
    }
}

decision = parseInt(prompt('Quieres continuar comprando: \n1-Si \n2-No'))
if(decision === 1){
    let productoSeleccionado = parseInt(prompt('Selecciona el producto que desee comprar: \n0.Dogui \n1.Royal Canin \n2.Dog Chow \n3.Ken-L'))
} else{
    seguiComprando === false
}

alert(`El total de la compra es ${totalCompra}`)