// products.js
// Funciones para manejar los productos en el catálogo

import { productosSeed } from "./seed.js";

/**
 * Devuelve todos los productos
 */
export function obtenerProductos() {
  return productosSeed;
}

/**
 * Filtrar productos por categoría
 */
export function filtrarPorCategoria(categoria) {
  if (categoria === "Todos") return productosSeed;
  return productosSeed.filter(p => p.categoria === categoria);
}