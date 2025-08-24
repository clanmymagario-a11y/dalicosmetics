// ================================
// carrito-utils.js
// ================================

import { productosSeed } from "./seed.js";

// -----------------------------
// 🔹 Obtener y guardar
// -----------------------------
export function obtenerCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

export function guardarCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// -----------------------------
// 🔹 Agregar al carrito
// -----------------------------
export function agregarAlCarrito(id, cantidad = 1) {
  let carrito = obtenerCarrito();
  const producto = productosSeed.find(p => p.id === parseInt(id));

  if (!producto) return;

  const item = carrito.find(p => p.id === parseInt(id));
  if (item) {
    item.cantidad += parseInt(cantidad);
  } else {
    carrito.push({ 
      id: producto.id, 
      nombre: producto.nombre, 
      precio: producto.precio, 
      imagen: producto.imagenes ? producto.imagenes[0] : producto.imagen, 
      cantidad: parseInt(cantidad) 
    });
  }

  guardarCarrito(carrito);
  actualizarCarritoEmergente();
}

// -----------------------------
// 🔹 Actualizar mini carrito emergente
// -----------------------------
export function actualizarCarritoEmergente() {
  const carrito = obtenerCarrito();
  const totalArticulos = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const carritoEmergente = document.getElementById('carrito-emergente');
  const totalArticulosElem = document.getElementById('total-articulos');

  if (carritoEmergente && totalArticulosElem) {
    if (totalArticulos > 0) {
      carritoEmergente.style.display = 'block';
      totalArticulosElem.textContent = `${totalArticulos} Artículos`;

      setTimeout(() => {
        carritoEmergente.style.display = 'none';
      }, 5000);
    } else {
      carritoEmergente.style.display = 'none';
    }
  }
}


export function calcularTotal(carrito) {
  let total = 0;
  let cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  carrito.forEach(item => {
    let precioUnitario = (cantidadTotal >= 5) ? item.precioMayorista : item.precioDetal;
    total += item.cantidad * precioUnitario;
  });

  return total;
}
