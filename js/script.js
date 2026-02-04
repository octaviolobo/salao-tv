// ===== CONFIGURAÇÃO =====
const ITEMS_PER_PAGE = 3;
const INTERVAL = 7000;

// ===== SERVIÇOS =====
const services = [
  // ===== CABELO =====
  { name: "BABY LISS / CACHOS", price: "A partir de R$ 99,99" },
  { name: "PENTEADO", price: "A partir de R$ 179,99" },
  { name: "ESCOVA SIMPLES", price: "A partir de R$ 64,99" },
  { name: "ESCOVA MODELADA", price: "A partir de R$ 84,99" },
  { name: "ESCOVA CABELO COM MEGA HAIR", price: "A partir de R$ 129,99" },
  
  { name: "SPA DOS PÉS", price: "A partir de R$ 149,99" },

  // ===== ESTÉTICA =====
  { name: "DEPILAÇÃO DE BUÇO COM LINHA", price: "A partir de R$ 34,99" },
  { name: "DRENAGEM LINFÁTICA", price: "A partir de R$ 189,99" },
  { name: "DRENAGEM LINFÁTICA CORPORAL", price: "A partir de R$ 199,99" },
  { name: "MASSAGEM RELAXANTE", price: "A partir de R$ 199,99" },
  { name: "MASSAGEM MODELADORA – LIPOMODELADORA", price: "A partir de R$ 189,99" },
  { name: "MASSAGEM RELAXANTE COM PEDRAS QUENTES", price: "A partir de R$ 199,99" },
  { name: "VENTOSATERAPIA CORPORAL", price: "A partir de R$ 199,99" },
  { name: "LIMPEZA DE PELE INDOLOR", price: "A partir de R$ 219,99" },
  { name: "LIMPEZA DE PELE COM VIP", price: "A partir de R$ 159,99" },
  { name: "ESCALDA PÉS", price: "A partir de R$ 89,99" }
];


// ===== DESTAQUES =====
const highlights = [
  {
    title: "Alinhamento Lizze Therapy",
    price: "A partir de R$ 270",
    note: "Redução de volume e brilho intenso",
    image: "assets/lizze.png"
  },
  {
    title: "Alinhamento Térmico com Formol",
    price: "A partir de R$ 200",
    note: "Selagem e alinhamento dos fios",
    image: "assets/formol.png"
  },
  {
    title: "Penteado",
    price: "A partir de R$ 180",
    note: "Higienização e penteado completo",
    image: "assets/penteado.png"
  },
  {
    title: "Tratamento Plex",
    price: "A partir de R$ 219,99",
    note: "Reconstrução e força para os fios",
    image: "assets/plex.png"
  },
  {
    title: "Escova Hollywodiana",
    price: "A partir de R$ 85",
    note: "Brilho espelhado e maciez",
    image: "assets/transparencia.png"
  },
  {
    title: "Terapia Capilar Antiqueda",
    price: "A partir de R$ 349,99",
    note: "Fortalecimento do couro cabeludo",
    image: "assets/antiqueda.png"
  },
  {
    title: "Terapia de Prevenção à Queda",
    price: "A partir de R$ 149,99",
    note: "Cuidado contínuo e preventivo",
    image: "assets/prevencao-queda.png"
  },
  {
    title: "Esplendor Head Spa",
    price: "A partir de R$ 380",
    note: "Experiência relaxante e sensorial",
    image: "assets/head-spa.png"
  },
  {
    title: "Botox",
    price: "A partir de R$ 299,99",
    note: "Tratamento intensivo para fios alinhados, sedosos e com brilho imediato.",
    image: "assets/destaque1.png"
  }
];


let page = 0;
let highlightIndex = 0;

const servicesContainer = document.getElementById("services");
const highlight = document.querySelector(".highlight");

// ===== RENDER LISTA =====
function renderServices() {
  servicesContainer.innerHTML = "";

  const start = page * ITEMS_PER_PAGE;
  const current = services.slice(start, start + ITEMS_PER_PAGE);

  current.forEach(service => {
    const row = document.createElement("div");
    row.className = "row";
    row.innerHTML = `
      <span>${service.name}</span>
      <span>${service.price}</span>
    `;
    servicesContainer.appendChild(row);
  });

  page++;
  if (page * ITEMS_PER_PAGE >= services.length) {
    page = 0;
  }
}

// ===== RENDER DESTAQUE =====
function renderHighlight() {
  const h = highlights[highlightIndex];

  document.getElementById("highlightTitle").textContent = h.title;
  document.getElementById("highlightPrice").textContent = h.price;
  document.getElementById("highlightNote").textContent = h.note;

  highlight.style.background = `
    linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
    url("${h.image}") center/cover no-repeat
  `;

  highlightIndex++;
  if (highlightIndex >= highlights.length) {
    highlightIndex = 0;
  }
}

// ===== LOOP =====
renderServices();
renderHighlight();

setInterval(() => {
  renderServices();
  renderHighlight();
}, INTERVAL);
