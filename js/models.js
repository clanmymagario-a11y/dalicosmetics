// models.js
// Aquí definimos las clases base del sistema (modular y escalable)

/**
 * Clase Producto
 * Representa un producto del catálogo
 */
// models.js
// Clase que define un producto del catálogo

export class Producto {
  constructor(id, nombre, categoria, precioDetal, precioMayor, imagenes, descripcion, estado, costo) {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;

    // 💰 Precios
    this.precioDetal = precioDetal;
    this.precioMayor = precioMayor;

    // 👀 Costo oculto (no se muestra en cards pero queda guardado)
    this.costo = costo;

    // 🖼️ Normalizamos imágenes
    const arr = Array.isArray(imagenes) ? imagenes : [imagenes];
    this.imagenes = (arr || []).filter(Boolean);
    if (this.imagenes.length === 0) {
      this.imagenes = ["/assets/img/placeholder.png"];
    }
    this.imagen = this.imagenes[0];

    this.descripcion = descripcion;
    this.estado = estado;
  }
}
  /**
   * Clase Usuario (para futuro uso con perfiles)
   */
  export class Usuario {
    constructor(id, nombre, email, puntos = 0) {
      this.id = id;
      this.nombre = nombre;
      this.email = email;
      this.puntos = puntos; // Puntos de fidelidad
    }
  }