let articulos = parseInt(prompt("Ingrese la cantidad de articulos que quiera comprar: "))
let precio = parseInt(prompt("Ingrese el precio de los articulos: "))
let precioTotal = (articulos*precio)
let descuento = ((precioTotal*15)/100)
if(isNaN(articulos) || isNaN(precio) || articulos<=0 || precio<=0){
    alert('Ingrese datos validos')
}else if (precioTotal>20000) {
    alert(`El precio con descuesto del 15% es $${descuento}`)
}else if (precioTotal<=20000){
    alert(`El total a pagar es: $${precioTotal}`)
}