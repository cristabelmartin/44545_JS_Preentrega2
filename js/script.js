// Entregable
// Objetivo: Mostrar lista de productos para que el cliente pueda seleccionar y agregar a su carrito de compra

let productos = [
  {id: 1, desc: "SUPERSTAR", depto: "Calzado", tipo: "Originals", precio: 1200, talla: 25, genero: "Mujer", stock: 50, color: "Blanco", marca: "Adidas"},
  {id: 2, desc: "SUPERSTAR", depto: "Calzado", tipo: "Originals", precio: 1200, talla: 24, genero: "Mujer", stock: 50, color: "Rojo", marca: "Adidas"},
  {id: 3, desc: "SUPERSTAR", depto: "Calzado", tipo: "Originals", precio: 1200, talla: 23, genero: "Mujer", stock: 50, color: "Negro", marca: "Adidas"},
  {id: 4, desc: "ADIZERO", depto: "Calzado", tipo: "Running", precio: 1000, talla: 22, genero: "Mujer", stock: 50, color: "Blanco", marca: "Adidas"},
  {id: 5, desc: "ADIZERO", depto: "Calzado", tipo: "Running", precio: 1000, talla: 21, genero: "Mujer", stock: 50, color: "Rojo", marca: "Adidas"},
  {id: 6, desc: "ADIZERO", depto: "Calzado", tipo: "Running", precio: 1000, talla: 25, genero: "Mujer", stock: 50, color: "Negro", marca: "Adidas"},
  {id: 7, desc: "ADIZERO", depto: "Calzado", tipo: "Running", precio: 1000, talla: 24, genero: "Mujer", stock: 50, color: "Verde", marca: "Adidas"},
  {id: 8, desc: "NIZZA", depto: "Calzado", tipo: "Originals", precio: 1500, talla: 23, genero: "Mujer", stock: 50, color: "Blanco", marca: "Adidas"},
  {id: 9, desc: "NIZZA", depto: "Calzado", tipo: "Originals", precio: 1500, talla: 22, genero: "Mujer", stock: 50, color: "Rojo", marca: "Adidas"},
  {id: 10, desc: "NIZZA", depto: "Calzado", tipo: "Originals", precio: 1500, talla: 21, genero: "Mujer", stock: 50, color: "Negro", marca: "Adidas"},
  {id: 11, desc: "SUPERSTAR", depto: "Calzado", tipo: "Originals", precio: 1200, talla: 25, genero: "Hombre", stock: 30, color: "Blanco", marca: "Adidas"},
  {id: 12, desc: "SUPERSTAR", depto: "Calzado", tipo: "Originals", precio: 1200, talla: 24, genero: "Hombre", stock: 30, color: "Rojo", marca: "Adidas"},
  {id: 13, desc: "SUPERSTAR", depto: "Calzado", tipo: "Originals", precio: 1200, talla: 23, genero: "Hombre", stock: 30, color: "Negro", marca: "Adidas"},
  {id: 14, desc: "ADI2000", depto: "Calzado", tipo: "Originals", precio: 1800, talla: 22, genero: "Hombre", stock: 30, color: "Blanco", marca: "Adidas"},
  {id: 15, desc: "ADI2000", depto: "Calzado", tipo: "Originals", precio: 1800, talla: 21, genero: "Hombre", stock: 30, color: "Rojo", marca: "Adidas"},
  {id: 16, desc: "ADI2000", depto: "Calzado", tipo: "Originals", precio: 1800, talla: 25, genero: "Hombre", stock: 30, color: "Negro", marca: "Adidas"},
  {id: 17, desc: "ADI2000", depto: "Calzado", tipo: "Originals", precio: 1800, talla: 24, genero: "Hombre", stock: 30, color: "Azul", marca: "Adidas"},
  {id: 18, desc: "ADIZERO", depto: "Calzado", tipo: "Running", precio: 1000, talla: 23, genero: "Hombre", stock: 30, color: "Blanco", marca: "Adidas"},
  {id: 19, desc: "ADIZERO", depto: "Calzado", tipo: "Running", precio: 1000, talla: 22, genero: "Hombre", stock: 30, color: "Rojo", marca: "Adidas"},
  {id: 20, desc: "ADIZERO", depto: "Calzado", tipo: "Running", precio: 1000, talla: 21, genero: "Hombre", stock: 30, color: "Negro", marca: "Adidas"}
]

const nombreComercio = "PrettyShoe.com"

let opcion = 0
let piezasPorProducto = 0
let mensaje

let prodGeneroVal
let decideSalir = false
let carrito = []

do {
  opcion = Number(prompt("Bienvenido a " 
  + nombreComercio 
  + "\n\n¿Qué deseas hacer? \n1.- Ver catálogo de productos \n2.- Ver Carrito de Compra. \n3.- Salir"))

  if (opcion === 1) {
    alert("Catálogo de " + listaProductos(productos))

    let prodGenero = Number(prompt("Indica tu género: \n 1.- Mujer \n 2.- Hombre \n 3.- Salir"))
    switch(prodGenero){
      case 1: prodGeneroVal = "Mujer"
      break
      case 2: prodGeneroVal = "Hombre"
      break
      default: alert("No se seleccionó ningún producto.")
      }
    console.log("Prueba género: " + prodGenero + " - " + prodGeneroVal + " - " + decideSalir)

    let prodTalla = Number(prompt("Indica tu talla: "))

    let filtroGeneroYTalla = filtraTalla((filtraGenero(productos, prodGeneroVal)),prodTalla)

    productoSeleccionado = prompt("Productos disponibles " + listaProductos(filtroGeneroYTalla) + "\n Selecciona el que prefieras. ")

    if (productoSeleccionado > 0 && productoSeleccionado <= productos.length){
      piezasPorProducto = Number(prompt("Ingresa la cantidad de piezas:"))
    }
    agregarProductoAlCarrito(productoSeleccionado, piezasPorProducto)
  } else {
    if (opcion === 2){
      if (carrito.length > 0) {
        alert("Carrito " + despliegaCarrito(carrito))
      } else {
        alert("Carrito vacío.")
      }
    }else {
      alert("¡Gracias por visitarnos!")
    }
  }
} while (opcion === 1 || opcion === 2)

function listaProductos(arrayProductos){
  let mensaje = ""
  console.log(arrayProductos.length)
  arrayProductos.forEach(producto => {
    if (producto.id === 1) {
      mensaje = "Productos " 
      + nombreComercio + "\n\n" 
      + producto.id + ".- " 
      + producto.desc + ", " 
      + producto.tipo + ", " 
      + producto.color + ", " 
      + producto.genero + ", " 
      + producto.talla + ", "
      + producto.marca
    } else {
      mensaje = mensaje + "\n" 
      + producto.id + ".- " 
      + producto.desc + ", " 
      + producto.tipo + ", " 
      + producto.color + ", " 
      + producto.genero + ", " 
      + producto.talla + ", " 
      + producto.marca
    }
  });
  return mensaje
}

function filtraGenero(arregloProductos, filtro){
  console.log("Filtro: " + filtro)
  let productosFiltrados = arregloProductos.filter(producto => producto.genero === filtro)
  console.log(productosFiltrados)
  return productosFiltrados
}

function filtraTalla(arregloProductos, filtro){
  console.log("Filtro: " + filtro)
  let productosFiltrados = arregloProductos.filter(producto => producto.talla === filtro)
  console.log(productosFiltrados)
  return productosFiltrados
}

function agregarProductoAlCarrito (e, piezasPorProducto){
  let productoBuscado = productos.find(producto => producto.id == e)
  productoBuscado.piezasCompra = piezasPorProducto
  productoBuscado.totalPorPiezas = productoBuscado.piezasCompra * productoBuscado.precio
  carrito.push(productoBuscado)
  console.log(carrito)
  alert("Carrito \n" + despliegaCarrito(carrito))
}

function despliegaCarrito(arrayProductos){
  let mensaje = ""
  console.log(arrayProductos.length)
  arrayProductos.forEach(producto => {
    if (producto.id === 1) {
      mensaje = "Productos " 
      + nombreComercio + "\n\n" 
      + producto.id + ".- " 
      + producto.desc + ", " 
      + producto.tipo + ", " 
      + producto.color + ", " 
      + producto.genero + ", " 
      + producto.talla + ", "
      + producto.marca + ", "
      + producto.piezasCompra + ", "
      + producto.totalPorPiezas
    } else {
      mensaje = mensaje + "\n" 
      + producto.id + ".- " 
      + producto.desc + ", " 
      + producto.tipo + ", " 
      + producto.color + ", " 
      + producto.genero + ", " 
      + producto.talla + ", " 
      + producto.marca + ", "
      + producto.piezasCompra + ", "
      + producto.totalPorPiezas
    }
  });
  return mensaje
}