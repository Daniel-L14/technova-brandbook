document.addEventListener("DOMContentLoaded", () => {
  
  // EFECTO TILT 3D DINÁMICO AL PASAR EL CURSOR POR LOS RECUADROS
  const cards = document.querySelectorAll(".bg-card-dark, .color-card");

  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -12; // Inclinación en eje X
      const rotateY = ((x - centerX) / centerX) * 12;  // Inclinación en eje Y

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    });
  });

  // Sincronización de Tipografía
  const typoInput = document.getElementById("typo-input");
  const typoOutput = document.getElementById("typo-output");

  if(typoInput && typoOutput) {
    typoInput.addEventListener("input", (e) => {
      typoOutput.innerText = e.target.value || "PULSE TECH";
    });
  }
});

// 01. TELEMETRÍA BENCHMARK
function runBenchmark() {
  document.getElementById("fps-counter").innerText = "144 FPS";
  document.getElementById("ping-counter").innerText = "2 ms";
  document.getElementById("cpu-counter").innerText = "88%";
}

function resetBenchmark() {
  document.getElementById("fps-counter").innerText = "60 FPS";
  document.getElementById("ping-counter").innerText = "12 ms";
  document.getElementById("cpu-counter").innerText = "14%";
}

// 02. MODULADOR 3D ISOTIPO
function explodeLayers() {
  document.getElementById("layer-outer").style.transform = "scale(1.3) rotate(15deg)";
  document.getElementById("layer-pulse").style.transform = "translateY(-15px)";
  document.getElementById("layer-core").style.transform = "scale(0.4)";
}

function spinDiagonal() {
  const logoBox = document.getElementById("logo-assembly-box");
  logoBox.style.transform = "rotate(45deg) rotateY(180deg) scale(1.1)";
  setTimeout(() => { logoBox.style.transform = "none"; }, 1200);
}

function resetLogo3D() {
  document.getElementById("layer-outer").style.transform = "none";
  document.getElementById("layer-pulse").style.transform = "none";
  document.getElementById("layer-core").style.transform = "none";
  document.getElementById("logo-assembly-box").style.transform = "none";
}

function toggleCoreSphere() {
  const isChecked = document.getElementById("toggle-core").checked;
  document.getElementById("layer-core").style.opacity = isChecked ? "1" : "0";
}

// 03. CLEARSPACE SLIDER (20PX A 45PX)
function updateClearspace(val) {
  const boxSymbol = document.getElementById("clearspace-box-symbol");
  const boxFull = document.getElementById("clearspace-box-full");
  const cotaSymbolTop = document.getElementById("cota-symbol-top");
  const cotaFullTop = document.getElementById("cota-full-top");

  if(boxSymbol) boxSymbol.style.padding = `${val}px`;
  if(boxFull) boxFull.style.padding = `${val}px`;
  if(cotaSymbolTop) cotaSymbolTop.innerText = `${val}px (X)`;
  if(cotaFullTop) cotaFullTop.innerText = `${val}px (X)`;
}

// 04. PROBADOR INTERACTIVO DE USOS PROHIBIDOS
function applyErrorStyle(type) {
  const stage = document.getElementById("error-preview-stage");
  const label = document.getElementById("error-status-label");
  const badSvg = document.getElementById("bad-svg-element");
  const badText = document.getElementById("bad-text-element");
  const badDot = document.getElementById("bad-core-dot");

  stage.style.transform = "none";
  badSvg.style.transform = "none";
  badText.className = "font-orbitron fs-2 fw-bold text-white";
  badText.style.fontFamily = "'Orbitron', sans-serif";
  badText.style.textShadow = "none";
  badDot.style.opacity = "1";

  if(type === 'stretch') {
    stage.style.transform = "scaleX(1.8) scaleY(0.6)";
    label.innerHTML = "Estado: <span class='text-danger fw-bold'>ERROR 1 - DISTORSIÓN DE ESCALA</span>";
  } else if(type === 'rotate') {
    stage.style.transform = "rotate(35deg)";
    label.innerHTML = "Estado: <span class='text-danger fw-bold'>ERROR 2 - ROTACIÓN DIAGONAL NO PERMITIDA</span>";
  } else if(type === 'color') {
    badText.className = "font-orbitron fs-2 fw-bold text-danger";
    label.innerHTML = "Estado: <span class='text-danger fw-bold'>ERROR 3 - PALETA NO OFICIAL (ROJO)</span>";
  } else if(type === 'circle') {
    badSvg.style.border = "2px solid red";
    badSvg.style.borderRadius = "50%";
    label.innerHTML = "Estado: <span class='text-danger fw-bold'>ERROR 4 - MARCO CONTENEDOR NO PERMITIDO</span>";
  } else if(type === 'nocore') {
    badDot.style.opacity = "0";
    label.innerHTML = "Estado: <span class='text-danger fw-bold'>ERROR 5 - OMISIÓN DE ESFERA CENTRAL</span>";
  } else if(type === 'font') {
    badText.style.fontFamily = "'Times New Roman', serif";
    label.innerHTML = "Estado: <span class='text-danger fw-bold'>ERROR 6 - FUENTE ALTERADA</span>";
  } else if(type === 'shadow') {
    badText.style.textShadow = "0 10px 15px #00F0FF";
    label.innerHTML = "Estado: <span class='text-danger fw-bold'>ERROR 7 - SOMBRAS PRONUNCIADAS</span>";
  } else if(type === 'repeat') {
    stage.style.transform = "scale(0.8)";
    label.innerHTML = "Estado: <span class='text-danger fw-bold'>ERROR 8 - PATRÓN SATURADO</span>";
  } else {
    label.innerHTML = "Estado: <span class='text-success fw-bold'>USO CORRECTO APROBADO</span>";
  }
}

// 05. GENERADOR CO-BRANDING
function setCoBrand(key, name, colorClass, iconClass) {
  const pName = document.getElementById("partner-name");
  const pIcon = document.getElementById("partner-icon");

  pName.innerText = name;
  pName.className = `font-orbitron fs-3 fw-bold ${colorClass}`;
  pIcon.className = `bi ${iconClass} display-6 ${colorClass}`;
}

// 06. COLORIMETRÍA REACTIVA
function activateColorGlow(hex) {
  navigator.clipboard.writeText(hex);
  const sec = document.getElementById("sec-colors");
  sec.style.boxShadow = `inset 0 0 60px ${hex}`;
  alert(`Color ${hex} copiado al portapapeles.`);
}

// 07. TIPOGRAFÍA EN VIVO
function changeTypoScale(sizeClass) {
  document.getElementById("typo-output").className = `font-orbitron text-cyan text-break ${sizeClass}`;
}

function changeTypoColor(colorClass) {
  const el = document.getElementById("typo-output");
  el.className = el.className.replace(/text-\w+/g, colorClass);
}

// 08. FILTRO DE ICONOS
function filterIcons(cat) {
  const items = document.querySelectorAll(".icon-card-item");
  items.forEach(item => {
    if(cat === 'all' || item.dataset.cat === cat) {
      item.style.opacity = "1";
      item.style.transform = "scale(1.05)";
    } else {
      item.style.opacity = "0.3";
      item.style.transform = "scale(0.95)";
    }
  });
}

// 09. MOCKUPS FILTER
function setMockupFilter(mode) {
  const container = document.getElementById("mockups-container");
  if(mode === 'contrast') {
    container.style.filter = "contrast(1.4) brightness(1.2)";
  } else {
    container.style.filter = "none";
  }
}

// 10. DESCARGA PROGRESIVA CON BARRA ANIMADA
function startDownloadProcess() {
  const container = document.getElementById("download-progress-container");
  const bar = document.getElementById("download-progress-bar");
  const percentText = document.getElementById("download-percent");

  container.classList.remove("d-none");
  let w = 0;
  let timer = setInterval(() => {
    w += 20;
    bar.style.width = `${w}%`;
    percentText.innerText = `${w}%`;
    if(w >= 100) {
      clearInterval(timer);
      alert("¡Proceso completado! Kit de Marca PULSE TECH descargado.");
      container.classList.add("d-none");
      bar.style.width = "0%";
      percentText.innerText = "0%";
    }
  }, 250);
}

function rotateHeroLogo() {
  const logo = document.getElementById("hero-logo-svg");
  logo.style.transform = "rotate(360deg) scale(1.2)";
  setTimeout(() => { logo.style.transform = "none"; }, 600);
}