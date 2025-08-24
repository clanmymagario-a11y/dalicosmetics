// ================================
// carrito.js
// ================================

const listaCarrito = document.getElementById("lista-carrito");
const totalElement = document.getElementById("total");
const btnContinuar = document.getElementById("continuar");
const btnFactura = document.getElementById("factura");

// -----------------------------
// 🔹 Funciones del carrito
// -----------------------------
function obtenerCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// 🔹 Obtener precio aplicando regla detal/mayor
function getPrecioUnitario(p) {
  // Si el objeto no tiene precioMayor/Detal (compatibilidad) usamos p.precio
  if (p.precioDetal === undefined || p.precioMayor === undefined) {
    return p.precio;
  }
  return p.cantidad >= 5 ? p.precioMayor : p.precioDetal;
}

function renderCarrito() {
  const carrito = obtenerCarrito();
  listaCarrito.innerHTML = "";

  if (carrito.length === 0) {
    listaCarrito.innerHTML = "<p>Tu carrito está vacío 🛒</p>";
    totalElement.textContent = "";
    return;
  }

  let total = 0;

  carrito.forEach(p => {
    const precioUnitario = getPrecioUnitario(p);
    const subtotal = precioUnitario * p.cantidad;
    total += subtotal;

    const item = document.createElement("div");
    item.classList.add("item-carrito");

    item.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}" class="miniatura">
      <div class="detalle">
        <h3>${p.nombre}</h3>
        <p>Precio: $${precioUnitario.toLocaleString()}</p>
        <p>Subtotal: $${subtotal.toLocaleString()}</p>
      </div>
      <div class="controles">
        <button class="menos" data-id="${p.id}">-</button>
        <span>${p.cantidad}</span>
        <button class="mas" data-id="${p.id}">+</button>
        <button class="eliminar" data-id="${p.id}">❌</button>
      </div>
    `;

    listaCarrito.appendChild(item);
  });

  totalElement.textContent = `Total a pagar: $${total.toLocaleString()}`;
}

// -----------------------------
// 🔹 Eventos
// -----------------------------
listaCarrito.addEventListener("click", e => {
  let carrito = obtenerCarrito();

  if (e.target.classList.contains("mas")) {
    const id = e.target.dataset.id;
    carrito = carrito.map(p => {
      if (p.id == id) p.cantidad++;
      return p;
    });
  }

  if (e.target.classList.contains("menos")) {
    const id = e.target.dataset.id;
    carrito = carrito.map(p => {
      if (p.id == id && p.cantidad > 1) p.cantidad--;
      return p;
    });
  }

  if (e.target.classList.contains("eliminar")) {
    const id = e.target.dataset.id;
    carrito = carrito.filter(p => p.id != id);
  }

  guardarCarrito(carrito);
  renderCarrito();
});

// Seguir comprando
btnContinuar.addEventListener("click", () => {
  window.location.href = "index2.html";
});

btnFactura.addEventListener("click", () => {
  const carrito = obtenerCarrito();
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Título
  doc.setFontSize(18);
  doc.text("Factura - Dali Cosmetics", 70, 20);

  // Fecha
  const fecha = new Date().toLocaleDateString();
  doc.setFontSize(12);
  doc.text(`Fecha: ${fecha}`, 10, 40);

  // Encabezado de tabla
  let y = 60;
  doc.setFontSize(12);
  doc.text("Producto", 10, y);
  doc.text("Cant.", 90, y);
  doc.text("Precio", 120, y);
  doc.text("Subtotal", 160, y);

  y += 10;

  let total = 0;

  carrito.forEach(p => {
    const precioUnitario = getPrecioUnitario(p);
    const subtotal = precioUnitario * p.cantidad;
    total += subtotal;

    doc.text(p.nombre, 10, y);
    doc.text(String(p.cantidad), 95, y);
    doc.text(`$${precioUnitario.toLocaleString()}`, 120, y);
    doc.text(`$${subtotal.toLocaleString()}`, 160, y);

    y += 10;
  });

  // Total
  doc.setFontSize(14);
  doc.text(`Total: $${total.toLocaleString()}`, 120, y + 10);

  // Guardar PDF
  doc.save("factura.pdf");
});

// -----------------------------
// 🔹 Inicialización
// -----------------------------
renderCarrito();
