// ================================
// app.js (versión adaptada con modal de confirmación)
// ================================

import { productosSeed } from "./seed.js";

// Referencias al DOM
const lista = document.getElementById("lista-productos");
const buscador = document.getElementById("buscador");
const ordenPrecio = document.getElementById("orden-precio");
const catalogoSection = document.getElementById("catalogo-section");
const btnCatalogo = document.getElementById("btn-catalogo");
const categorias = document.querySelector(".subnav-links");
const categoriasItems = document.querySelectorAll(".subnav-links a");

function renderProductos(productos) {
  const lista = document.getElementById("lista-productos");
  lista.innerHTML = "";

  productos.forEach(p => {
    let etiqueta = "";
    let claseEstado = "";
    let botonDisabled = "";

    switch (p.estado) {
      case "agotado":
        etiqueta = `<span class="etiqueta agotado-label">AGOTADO</span>`;
        claseEstado = "agotado";
        botonDisabled = "disabled";
        break;
      case "nuevo":
        etiqueta = `<span class="etiqueta etiqueta-nuevo">NUEVO</span>`;
        break;
      case "promocion":
        etiqueta = `<span class="etiqueta etiqueta-promocion">PROMOCION</span>`;
        break;
      case "ultimos":
        etiqueta = `<span class="etiqueta etiqueta-ultimos">ULTIMAS UNIDADES</span>`;
        break;
      default:
        etiqueta = "";
    }

    // 🆕 HTML con ambos precios visibles SIEMPRE
    lista.innerHTML += `
      <div class="producto-card ${claseEstado}">
        <div class="imagen-container">
          <img src="${p.imagenes[0]}" alt="${p.nombre}">
          ${etiqueta}
        </div>
        <h3>${p.nombre}</h3>
        <p class="categoria">${p.categoria}</p>

        <div class="precios">
          <p class="precio-detalle">Detalle: $${p.precioDetal.toLocaleString()}</p>
          <p class="precio-mayor">Mayor: $${p.precioMayor.toLocaleString()}</p>
        </div>

        <div class="cantidad-control">
          <button class="menos" data-id="${p.id}">-</button>
          <input type="number" value="1" min="1" class="cantidad" data-id="${p.id}">
          <button class="mas" data-id="${p.id}">+</button>
        </div>

        <a href="detalle-producto.html?id=${p.id}" class="btn ver-detalles">Ver Detalles</a>

        <button class="btn agregar" data-id="${p.id}" ${botonDisabled}> 
          ${p.estado === "agotado" ? "No disponible" : "Agregar al carrito"}
        </button>
      </div>
    `;
  });

  // Eventos de cantidad (se mantienen igual)
  document.querySelectorAll(".mas").forEach(btn => {
    btn.addEventListener("click", e => {
      const input = e.target.parentElement.querySelector(".cantidad");
      input.value = parseInt(input.value) + 1;
      actualizarCantidad(input.dataset.id, input.value);
    });
  });

  document.querySelectorAll(".menos").forEach(btn => {
    btn.addEventListener("click", e => {
      const input = e.target.parentElement.querySelector(".cantidad");
      if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
        actualizarCantidad(input.dataset.id, input.value);
      }
    });
  });

  // Eventos agregar al carrito
  prepararBotonesAgregar();
}

// -----------------------------
// 🔹 Eventos de "Agregar al carrito"
// -----------------------------
function prepararBotonesAgregar() {
  document.querySelectorAll(".agregar").forEach(btn => {
    btn.addEventListener("click", e => {
      const boton = e.target;
      const id = parseInt(boton.dataset.id);
      const inputCantidad = document.querySelector(`.cantidad[data-id="${id}"]`);

      // Evitar clics repetidos
      boton.disabled = true;
      setTimeout(() => (boton.disabled = false), 1000);

      // Agregar producto
      agregarAlCarrito(id, inputCantidad.value);

      // ✅ Mostrar modal de confirmación
      const modal = document.getElementById("modal-carrito");
      modal.classList.add("mostrar");

      setTimeout(() => {
        modal.classList.remove("mostrar");
      }, 2000);
    });
  });
}

// -----------------------------
// 🔹 Actualizar la cantidad en el carrito
// -----------------------------
function actualizarCantidad(id, cantidad) {
  let carrito = obtenerCarrito();
  const item = carrito.find(p => p.id === id);
  if (item) {
    item.cantidad = parseInt(cantidad);
    guardarCarrito(carrito);
  }
}

// -----------------------------
// 🔹 Filtros y búsqueda
// -----------------------------
function aplicarFiltros() {
  const texto = buscador.value.toLowerCase();
  const categoriaActiva = document.querySelector(".subnav-links .activo")?.dataset.categoria || "todos";

  let productosFiltrados = productosSeed.filter(p => {
    const filtroNombre = p.nombre.toLowerCase().includes(texto);
    const filtroCategoria = categoriaActiva === "todos" || p.categoria === categoriaActiva;
    return filtroNombre && filtroCategoria;
  });

  if (ordenPrecio.value === "asc") {
    productosFiltrados.sort((a, b) => a.precioDetal - b.precioDetal);
  } else if (ordenPrecio.value === "desc") {
    productosFiltrados.sort((a, b) => b.precioDetal - a.precioDetal);
  }

  renderProductos(productosFiltrados);
}

// -----------------------------
// 🔹 Manejo del Carrito (localStorage)
// -----------------------------
function obtenerCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(id, cantidad) {
  let carrito = obtenerCarrito();
  const producto = productosSeed.find(p => p.id === id);

  const item = carrito.find(p => p.id === id);
  if (item) {
    item.cantidad += parseInt(cantidad);
  } else {
    carrito.push({ ...producto, cantidad: parseInt(cantidad) });
  }

  guardarCarrito(carrito);
  actualizarCarritoEmergente();
}

// -----------------------------
// 🔹 Carrito emergente
// -----------------------------
function actualizarCarritoEmergente() {
  const carrito = obtenerCarrito();
  const totalArticulos = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const carritoEmergente = document.getElementById('carrito-emergente');
  const totalArticulosElem = document.getElementById('total-articulos');
  
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

// -----------------------------
// 🔹 Eventos UI
// -----------------------------
btnCatalogo.addEventListener("click", (e) => {
  e.preventDefault();
  catalogoSection.style.display = "block";
  catalogoSection.scrollIntoView({ behavior: "smooth" });

  document.querySelector(".subnav-links .activo")?.classList.remove("activo");
  btnCatalogo.classList.add("activo");

  aplicarFiltros();
});

categoriasItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".subnav-links .activo")?.classList.remove("activo");
    item.classList.add("activo");

    catalogoSection.style.display = "block";
    catalogoSection.scrollIntoView({ behavior: "smooth" });

    aplicarFiltros();
  });
});

buscador.addEventListener("input", aplicarFiltros);
ordenPrecio.addEventListener("change", aplicarFiltros);
// ==================
// 🔹 MENÚ RESPONSIVE
// ==================
// ==============================
// 📌 MENU RESPONSIVE (hamburguesa)
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }
});
// -----------------------------
// 🔹 Render inicial
// -----------------------------
renderProductos(productosSeed);
actualizarCarritoEmergente();


