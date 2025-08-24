// detalle-producto.js
// Importamos productos
import { productosSeed } from './seed.js';

// ===============
// 🔹 GESTIÓN DEL CARRITO
// ===============
function getCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(producto, cantidad = 1) {
  const qty = Math.max(1, parseInt(cantidad || 1, 10));
  let carrito = getCarrito();
  const existente = carrito.find(item => item.id === producto.id);

  if (existente) {
    existente.cantidad += qty;
  } else {
    carrito.push({ ...producto, cantidad: qty });
  }

  guardarCarrito(carrito);
}

// ===============
// 🔹 TOAST (reutiliza el CSS .carrito-toast)
// ===============
function mostrarToast(producto, totalArticulos) {
  let toast = document.getElementById("carrito-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "carrito-toast";
    toast.className = "carrito-toast";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <p>✅ ${producto.nombre} agregado</p>
    <p style="margin-top:4px;font-weight:600;">${totalArticulos} Artículo(s)</p>
    <a href="carrito.html" class="btn-ir-carrito">Ir al carrito</a>
  `;

  toast.style.display = "block";
  setTimeout(() => (toast.style.display = "none"), 3000);
}

function contarArticulosCarrito() {
  return getCarrito().reduce((acc, it) => acc + (parseInt(it.cantidad || 0, 10)), 0);
}

// ===============
// 🔹 DETALLE PRODUCTO
// ===============
const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

function mostrarDetalleProducto(id) {
  const producto = productosSeed.find(p => p.id === parseInt(id, 10));
  if (!producto) return;

  // Rellenar info
  document.getElementById('producto-nombre').innerText = producto.nombre;
  document.getElementById('producto-categoria').innerText = `Categoría: ${producto.categoria}`;
  const precioTexto = `Detal: $${producto.precioDetal?.toLocaleString() || 0} | Mayor: $${producto.precioMayor?.toLocaleString() || 0}`;
  document.getElementById('producto-precio').innerText = precioTexto;
  document.getElementById('producto-descripcion').innerText = producto.descripcion || "No hay descripción disponible.";

  const imgPrincipal = document.getElementById('producto-imagen');
  imgPrincipal.src = producto.imagenes?.[0] || producto.imagen;

  const thumbs = document.getElementById('producto-thumbs');
  thumbs.innerHTML = "";
  (producto.imagenes || []).forEach(img => {
    const thumb = document.createElement('img');
    thumb.src = img;
    thumb.classList.add('thumb');
    thumb.addEventListener('click', () => (imgPrincipal.src = img));
    thumbs.appendChild(thumb);
  });

  // ==== STEPPER (+/-) ====
  const inputCantidad = document.getElementById('cantidad');
  const btnInc = document.getElementById('increment');
  const btnDec = document.getElementById('decrement');

  // Valor inicial seguro
  if (inputCantidad) inputCantidad.value = inputCantidad.value || "1";

  if (btnInc && inputCantidad) {
    btnInc.addEventListener('click', () => {
      const v = Math.max(1, parseInt(inputCantidad.value || "1", 10) + 1);
      inputCantidad.value = String(v);
    });
  }

  if (btnDec && inputCantidad) {
    btnDec.addEventListener('click', () => {
      const v = Math.max(1, parseInt(inputCantidad.value || "1", 10) - 1);
      inputCantidad.value = String(v);
    });
  }

  // Botón Agregar al carrito
  const btnAgregar = document.querySelector(".btn.agregar");
  if (btnAgregar) {
    btnAgregar.addEventListener("click", () => {
      const qty = Math.max(1, parseInt((inputCantidad && inputCantidad.value) || "1", 10));
      agregarAlCarrito(producto, qty);

      const total = contarArticulosCarrito();
      mostrarToast(producto, total);

      // (Opcional) Si tienes un modal #modal-carrito con clase .mostrar
      const modal = document.getElementById("modal-carrito");
      if (modal) {
        modal.classList.add("mostrar");
        setTimeout(() => modal.classList.remove("mostrar"), 1200);
      }
    });
  }

  // Carrusel recomendados
  iniciarCarrusel(producto);
}

// ===============
// 🔹 CARRUSEL
// ===============
let position = 0;
let cardWidth = 220;
let autoplayInterval;

function iniciarCarrusel(productoActual) {
  const track = document.getElementById('carousel-track');
  if (!track) return;

  let mismos = productosSeed.filter(p => p.categoria === productoActual.categoria && p.id !== productoActual.id);
  let extras = productosSeed.filter(p => p.categoria !== productoActual.categoria);
  let seleccionados = [...mismos, ...extras].sort(() => Math.random() - 0.5).slice(0, 20);

  track.innerHTML = "";
  seleccionados.forEach(p => {
    track.innerHTML += `
      <div class="card">
        <img src="${p.imagenes?.[0] || p.imagen}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p class="categoria">${p.categoria}</p>
        <p class="precio">
          Detal: $${p.precioDetal?.toLocaleString() || 0}<br>
          Mayor: $${p.precioMayor?.toLocaleString() || 0}
        </p>
        <a href="detalle-producto.html?id=${p.id}" class="btn ver-detalles">Ver Detalles</a>
      </div>
    `;
  });

  // duplicar para loop infinito
  track.innerHTML += track.innerHTML;

  position = 0;
  track.style.transform = `translateX(${position}px)`;

  clearInterval(autoplayInterval);
  autoplayInterval = setInterval(() => moverCarrusel(1), 2500);

  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  if (next) next.addEventListener('click', () => moverCarrusel(1));
  if (prev) prev.addEventListener('click', () => moverCarrusel(-1));
}

function moverCarrusel(direction) {
  const track = document.getElementById('carousel-track');
  if (!track) return;

  const cards = track.querySelectorAll('.card').length;
  position -= direction * cardWidth;
  track.style.transition = "transform 0.5s ease-in-out";
  track.style.transform = `translateX(${position}px)`;

  track.addEventListener('transitionend', () => {
    if (Math.abs(position) >= (cards / 2) * cardWidth) {
      track.style.transition = "none";
      position = 0;
      track.style.transform = `translateX(${position}px)`;
    }
  }, { once: true });
}

// Ejecutar
mostrarDetalleProducto(productId);