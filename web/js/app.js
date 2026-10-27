(function () {
  const app = document.getElementById("app");

  const TEMAS_ORDEN = [
    "repaso", "materia", "magnitudes", "atomo", "uniones", "nomenclatura",
    "gases", "liquidos", "soluciones", "reacciones", "equilibrio", "acidobase", "termodinamica"
  ];

  function esc(texto) {
    return String(texto == null ? "" : texto)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Convierte notación ASCII de los datos a tipografía legible (subíndices, Δ, flechas, exponentes)
  function pretty(texto) {
    let s = esc(texto);
    s = s.replace(/Delta/g, "Δ")
         .replace(/&lt;=&gt;/g, "⇌")
         .replace(/-&gt;/g, "→")
         .replace(/&lt;=/g, "≤")
         .replace(/&gt;=/g, "≥")
         .replace(/\+\/-/g, "±")
         .replace(/ x (?=\d)/g, " × ");
    s = s.replace(/\^(-?\d+)/g, "<sup>$1</sup>");
    s = s.replace(/([A-Za-z\)])(\d+)(?![\d<])/g, "$1<sub>$2</sub>");
    return s;
  }

  // Cada inciso (a), b), c)...) arranca en un párrafo propio para que el enunciado se lea
  function partirIncisos(html) {
    return html.replace(/ (?=[a-h]\) )/g, "<br><br>");
  }

  function renderTex(tex, enLinea) {
    if (window.katex) {
      // El punto medio "·" se muestra en rojo dentro de \text{} en el navegador; el operador "⋅" no tiene ese problema
      const limpio = tex.replace(/·/g, "⋅");
      return window.katex.renderToString(limpio, { throwOnError: false, displayMode: !enLinea });
    }
    return `<code class="formula">${esc(tex)}</code>`;
  }

  function nombreTema(id) {
    const t = (window.TEMAS || []).find(x => x.id === id);
    return t ? t.titulo : id;
  }

  function todosLosEjercicios() {
    const lista = [];
    (window.PARCIALES || []).forEach((examen, iExamen) => {
      (examen.ejercicios || []).forEach((ej, iEj) => {
        lista.push({ examen, ej, anchor: `ej-${iExamen}-${iEj}` });
      });
    });
    return lista;
  }

  function ejerciciosDeTema(temaId) {
    return todosLosEjercicios().filter(x => (x.ej.temas || []).includes(temaId));
  }

  // ---------- Teoría ----------
  function vistaTeoria() {
    const temas = (window.TEMAS || []).slice().sort(
      (a, b) => TEMAS_ORDEN.indexOf(a.id) - TEMAS_ORDEN.indexOf(b.id)
    );
    if (!temas.length) {
      return `<div class="tarjeta"><p class="vacio">Todavía no hay contenido de teoría cargado.</p></div>`;
    }

    const indice = temas.map(t =>
      `<li><a href="#teoria/${esc(t.id)}">${esc(t.titulo)}</a></li>`
    ).join("");

    const tarjetas = temas.map(t => {
      const conceptos = (t.conceptos || []).map(c =>
        `<p><strong>${esc(c.titulo)}:</strong> ${esc(c.texto)}</p>`
      ).join("");
      const formulas = (t.formulas || []).map((f, i) => {
        const tex = (window.FORMULAS_TEX || {})[`${t.id}#${i}`];
        return tex
          ? `<div class="formula-tex">${renderTex(tex)}</div>`
          : `<code class="formula">${esc(f)}</code>`;
      }).join("");
      const errores = (t.errores_tipicos || []).map(e =>
        `<div class="error-tipico"><strong>Error típico:</strong> ${pretty(e.error)}<div class="como"><strong>Cómo evitarlo:</strong> ${pretty(e.como_evitar)}</div></div>`
      ).join("");
      const relacionados = ejerciciosDeTema(t.id).length;
      const codigoGuia = GUIA_POR_TEMA[t.id];
      const yaEnFuentes = (t.fuentes || []).includes(codigoGuia);
      const arch = codigoGuia && !yaEnFuentes && archivoOficial(codigoGuia);
      const guia = arch
        ? `<a class="tag" href="material/${arch.carpeta}/${encodeURIComponent(arch.archivo)}" target="_blank" rel="noopener">Guía ${esc(codigoGuia)} · PDF</a>`
        : "";
      const fuentes = (t.fuentes || []).map(f => {
        const arch = archivoOficial(f);
        return arch
          ? `<a class="tag" href="material/${arch.carpeta}/${encodeURIComponent(arch.archivo)}" target="_blank" rel="noopener">${esc(f)} · PDF</a>`
          : `<span class="tag">${esc(f)}</span>`;
      }).join("");

      return `
        <section class="tarjeta" id="${esc(t.id)}">
          <h3>${esc(t.titulo)}</h3>
          <div>${fuentes}${guia}</div>
          <p>${esc(t.resumen)}</p>
          ${conceptos}
          ${formulas ? `<h4>Fórmulas clave</h4>${formulas}` : ""}
          ${errores ? `<h4>Errores típicos</h4>${errores}` : ""}
          <p><a href="#parciales/${esc(t.id)}">Ver ejercicios de parciales de este tema (${relacionados})</a></p>
          ${ejercitacionDeTema(t.id).length ? `<p><a href="#ejercitacion/${esc(t.id)}">Practicar este tema (${ejercitacionDeTema(t.id).length} ejercicios)</a></p>` : ""}
        </section>`;
    }).join("");

    return `
      <h2>Teoría por tema</h2>
      <div class="tarjeta"><ol>${indice}</ol></div>
      ${tarjetas}`;
  }

  function vistaTeoriaTema(id) {
    // Scroll a la sección dentro de la vista de teoría completa
    const html = vistaTeoria();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
    return html;
  }

  // ---------- Fórmulas y constantes ----------
  function vistaFormulas() {
    const constantes = (window.CONSTANTES || []).map(c =>
      `<tr><td><strong>${esc(c.nombre)}</strong></td><td>${c.tex ? renderTex(c.tex, true) : esc(c.valor)}</td><td>${esc(c.nota)}</td></tr>`
    ).join("");

    const grupos = (window.FORMULAS || []).map(g => {
      const items = g.items.map(i => {
        const cuerpo = i.tex
          ? `<div class="formula-tex">${renderTex(i.tex)}</div>`
          : `<p>${esc(i.text)}</p>`;
        const nota = i.nota ? `<p class="aviso">${esc(i.nota)}</p>` : "";
        return `<div class="item-formula"><strong>${esc(i.nombre)}</strong>${cuerpo}${nota}</div>`;
      }).join("");
      return `<div class="tarjeta"><h3>${esc(g.grupo)}</h3>${items}</div>`;
    }).join("");

    return `
      <h2>Fórmulas y constantes</h2>
      <div class="tarjeta">
        <h3>Constantes</h3>
        <table class="constantes">
          <tr><th>Constante</th><th>Valor</th><th>Nota</th></tr>
          ${constantes}
        </table>
      </div>
      ${grupos}`;
  }

  // ---------- Parciales ----------
  function bloqueResolucion(ej) {
    const partes = (ej.resolucion || []).map(r => `
      <div class="resolucion-parte">
        ${r.parte ? `<strong>${pretty(r.parte)}</strong>` : ""}
        <ol>${(r.pasos || []).map(p => {
          // Un paso puede ser texto simple o { paso, porque }; el "porque" explica la justificación
          if (typeof p === "string") return `<li>${pretty(p)}</li>`;
          const porque = p.porque ? `<div class="porque">${pretty(p.porque)}</div>` : "";
          return `<li>${pretty(p.paso)}${porque}</li>`;
        }).join("")}</ol>
        <div class="resultado">Resultado: ${pretty(r.resultado)}</div>
      </div>`).join("");
    return partes;
  }

  function tarjetaEjercicio(ej, anchor, iExamen) {
    const tags = (ej.temas || []).map(t =>
      `<a class="tag" href="#parciales/${esc(t)}">${esc(nombreTema(t))}</a>`
    ).join("");
    const errores = (ej.errores_tipicos || []).map(e =>
      `<div class="error-tipico"><strong>Error típico:</strong> ${pretty(e.error)}<div class="como"><strong>Cómo evitarlo:</strong> ${pretty(e.como_evitar)}</div></div>`
    ).join("");
    const idRes = `res-${anchor}`;

    return `
      <section class="ejercicio-card" id="${anchor}">
        <h3>Ejercicio ${esc(ej.num)}</h3>
        <div class="chips">${tags}</div>
        <div class="enunciado">${partirIncisos(pretty(ej.enunciado))}</div>
        <div class="bloque-titulo">Errores típicos</div>
        ${errores || '<p class="vacio">Sin errores cargados.</p>'}
        <button class="toggle" data-target="${idRes}">Mostrar resolución</button>
        <div id="${idRes}" class="resolucion oculto">
          ${bloqueResolucion(ej)}
        </div>
      </section>`;
  }

  function vistaParciales(filtroTema) {
    const temasUsados = [...new Set(
      todosLosEjercicios().flatMap(x => x.ej.temas || [])
    )];
    const orden = TEMAS_ORDEN.filter(t => temasUsados.includes(t));

    const filtros = [
      `<button data-tema="" class="${filtroTema ? "" : "activo"}">Todos</button>`,
      ...orden.map(t =>
        `<button data-tema="${esc(t)}" class="${filtroTema === t ? "activo" : ""}">${esc(nombreTema(t))}</button>`
      )
    ].join("");

    const examenes = (window.PARCIALES || []).map((examen, iExamen) => {
      const ejs = (examen.ejercicios || [])
        .map((ej, iEj) => ({ ej, anchor: `ej-${iExamen}-${iEj}` }))
        .filter(x => !filtroTema || (x.ej.temas || []).includes(filtroTema));
      if (!ejs.length) return "";
      return `
        <h3 class="encabezado-examen">${esc(examen.tipo)} <span class="fecha">${esc(examen.fecha)}</span></h3>
        <div class="aviso">Fuente: ${esc(examen.fuente)}</div>
        ${ejs.map(x => tarjetaEjercicio(x.ej, x.anchor, iExamen)).join("")}`;
    }).join("");

    return `
      <h2>Ejercicios de parciales</h2>
      <p>Los errores típicos están pensados para cada ejercicio: leelos antes de mirar la resolución.</p>
      <div class="filtros">${filtros}</div>
      ${examenes || '<p class="vacio">No hay ejercicios para este tema todavía.</p>'}`;
  }

  // ---------- Ejercitación por tema ----------
  // 16 ejercicios por tema, de menor a mayor dificultad; el 16 es de tipo parcial.
  // Los datos están en window.EJERCITACION[tema] (archivos data/ejercitacion_*.js)
  const NIVEL_CLASE = { "Básico": "basico", "Intermedio": "intermedio", "Avanzado": "avanzado", "Tipo parcial": "parcial" };

  function ejercitacionDeTema(temaId) {
    return (window.EJERCITACION || {})[temaId] || [];
  }

  function tarjetaEjercitacion(ej, tema) {
    const anchor = `eje-${tema}-${ej.num}`;
    const idRes = `res-${anchor}`;
    const clase = NIVEL_CLASE[ej.nivel] || "basico";
    const errores = (ej.errores_tipicos || []).map(e =>
      `<div class="error-tipico"><strong>Error típico:</strong> ${pretty(e.error)}<div class="como"><strong>Cómo evitarlo:</strong> ${pretty(e.como_evitar)}</div></div>`
    ).join("");

    return `
      <section class="ejercicio-card" id="${anchor}">
        <h3>Ejercicio ${esc(ej.num)} <span class="nivel nivel-${clase}">${esc(ej.nivel)}</span></h3>
        <div class="enunciado">${partirIncisos(pretty(ej.enunciado))}</div>
        <div class="bloque-titulo">Errores típicos</div>
        ${errores || '<p class="vacio">Sin errores cargados.</p>'}
        <button class="toggle" data-target="${idRes}">Mostrar resolución</button>
        <div id="${idRes}" class="resolucion oculto">
          ${bloqueResolucion(ej)}
        </div>
      </section>`;
  }

  function vistaEjercitacion(tema) {
    if (!tema) {
      const lista = TEMAS_ORDEN
        .filter(t => ejercitacionDeTema(t).length)
        .map(t => `<li><a href="#ejercitacion/${esc(t)}">${esc(nombreTema(t))}</a> <span class="vacio">· ${ejercitacionDeTema(t).length} ejercicios</span></li>`)
        .join("");
      return `
        <h2>Ejercitación por tema</h2>
        <p>Cada tema tiene 16 ejercicios de dificultad creciente: del 1 al 5 básicos, del 6 al 10 intermedios, del 11 al 15 avanzados. El 16 es de tipo parcial.</p>
        <div class="tarjeta">${lista ? `<ol>${lista}</ol>` : '<p class="vacio">Todavía no hay ejercitación cargada.</p>'}</div>`;
    }

    const ejs = ejercitacionDeTema(tema);
    if (!ejs.length) {
      return `<h2>${esc(nombreTema(tema))}</h2><p class="vacio">Todavía no hay ejercicios para este tema.</p>`;
    }
    return `
      <h2>Ejercitación: ${esc(nombreTema(tema))}</h2>
      <p><a href="#ejercitacion">← Todos los temas</a> · <a href="#teoria/${esc(tema)}">Ver teoría de este tema</a></p>
      <div class="aviso">Intentá resolver cada ejercicio antes de abrir la resolución. El 16 está pensado como un parcial completo.</div>
      ${ejs.map(ej => tarjetaEjercitacion(ej, tema)).join("")}`;
  }

  // ---------- Material oficial ----------
  // Lista de PDFs copiados a web/material/ (guías y teoría de la cátedra)
  const MATERIAL = {
    guias: [
      "G0 - Quimica.pdf", "G1 - Quimica.pdf", "G2 - Quimica.pdf", "G3 - Quimica.pdf",
      "G4 -Quimica.pdf", "G5A - Quimica.pdf", "G5B - Quimica.pdf", "G6A - Quimica.pdf",
      "G6B - Quimica.pdf", "G7 - Quimica.pdf", "G8 - Quimica.pdf", "G9A - Quimica.pdf",
      "G9B - Quimica.pdf", "G10 - Quimica.pdf"
    ],
    teoria: [
      "T01-Sistemas-materiales-DEF.pdf", "T02-Estructura atómica-DEF.pdf",
      "T02B-Estructura electrónica de los átomos-DEF.pdf", "T02C-Tabla periódica-DEF-Con audio.pdf",
      "T03-Magnitudes atómico-moleculares-DEF.pdf", "T04A -Uniones químicas.pdf",
      "T04A2- teoria atomico moleculares y formas de las moleculas-Boeykens-s-audio.pdf",
      "T04B- FUERZAS INTERMOLECULARES.pdf", "T05- Nomenclatura Inorgánicos.pdf",
      "T05B - Nomenclatura (Orgánicos).pdf", "T06A - Prop. de los gases.pdf", "T06B1.pdf",
      "T07A- SOLUCIONES Y SOLUBILIDAD.pdf", "T08A - Reacciones y RedOx.pdf",
      "T08B- Estequiometría.pdf", "T09A-Equilibrio-generalidades- con audio-DEF.pdf",
      "T09B1-Ac-Bs( 1era parte)-fuertes , pH-c-audio-2024.pdf",
      "T09B2-Ac Bs-(2da parte)-pH de Debiles-(Saralegui) -c-audio -corr-2024.pdf",
      "T10A-Termodinamica-1er ppio y calorimetria-c-audio-2024.pdf",
      "T10B- Termoquimica -c-audio-2024.pdf",
      "T10B2-Termoquimica y combustibles-2C2025-CB040-s-audio.pptx.pdf"
    ]
  };

  // Guía de ejercicios que corresponde a cada tema (mismo orden que el índice de la cátedra)
  const GUIA_POR_TEMA = {
    repaso: "G0", materia: "G1", atomo: "G2", magnitudes: "G3", uniones: "G4",
    nomenclatura: "G5A", gases: "G6A", liquidos: "G6B", soluciones: "G7",
    reacciones: "G8", equilibrio: "G9A", acidobase: "G9B", termodinamica: "G10"
  };

  // Busca el PDF que corresponde a un código de fuente (T04A, G0...).
  // El código debe ir seguido de un separador, para que T02 no tome T02B ni T04A no tome T04A2.
  function archivoOficial(codigo) {
    const candidatos = [
      ...MATERIAL.teoria.map(archivo => ({ carpeta: "teoria", archivo })),
      ...MATERIAL.guias.map(archivo => ({ carpeta: "guias", archivo }))
    ];
    return candidatos.find(c =>
      c.archivo.startsWith(codigo) && !/[A-Za-z0-9]/.test(c.archivo.charAt(codigo.length))
    ) || null;
  }

  function listaPdfs(carpeta, archivos) {
    return `<ul>${archivos.map(f =>
      `<li><a href="material/${carpeta}/${encodeURIComponent(f)}" target="_blank" rel="noopener">${esc(f)}</a></li>`
    ).join("")}</ul>`;
  }

  function vistaMaterial() {
    return `
      <h2>Material oficial de la cátedra</h2>
      <div class="aviso">Guías y apuntes de teoría tal como los publica la cátedra. Son para uso personal de estudio.</div>
      <div class="tarjeta"><h3>Guías de ejercicios</h3>${listaPdfs("guias", MATERIAL.guias)}</div>
      <div class="tarjeta"><h3>Teoría</h3>${listaPdfs("teoria", MATERIAL.teoria)}</div>`;
  }

  // ---------- Router ----------
  function render() {
    const hash = (location.hash || "#teoria").replace(/^#/, "");
    const [vista, sub] = hash.split("/");

    document.querySelectorAll(".topbar nav a").forEach(a => {
      a.classList.toggle("activo", a.dataset.view === vista);
    });

    if (vista === "material") {
      app.innerHTML = vistaMaterial();
    } else if (vista === "formulas") {
      app.innerHTML = vistaFormulas();
    } else if (vista === "parciales") {
      app.innerHTML = vistaParciales(sub || "");
      // Al filtrar por tema, subir al inicio del listado; si no, el scroll queda donde estaba y parece que no pasó nada
      if (sub) window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (vista === "ejercitacion") {
      app.innerHTML = vistaEjercitacion(sub || "");
      if (sub) window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      app.innerHTML = vista === "teoria" && sub ? vistaTeoriaTema(sub) : vistaTeoria();
    }
    montarIndice();
  }

  // ---------- Índice flotante ----------
  // Lista los títulos h3 de la vista actual y resalta el que está en pantalla al scrollear
  let indiceEl = null;
  let enlacesIndice = [];

  function slugify(texto) {
    return texto.toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function montarIndice() {
    if (indiceEl) indiceEl.remove();
    const titulos = [...app.querySelectorAll("h3")];
    if (titulos.length < 2) { indiceEl = null; enlacesIndice = []; return; }

    titulos.forEach((h, i) => {
      if (!h.id) h.id = `sec-${i}-${slugify(h.textContent)}`;
    });

    indiceEl = document.createElement("nav");
    indiceEl.id = "indice-flotante";
    indiceEl.className = "indice colapsado";
    indiceEl.innerHTML = `
      <button class="indice-toggle" type="button">Índice</button>
      <ul>${titulos.map(h =>
        `<li><a href="#${h.id}" data-id="${h.id}">${esc(h.textContent)}</a></li>`
      ).join("")}</ul>`;
    document.body.appendChild(indiceEl);
    enlacesIndice = [...indiceEl.querySelectorAll("a")];
    marcarActivo();
  }

  function marcarActivo() {
    if (!enlacesIndice.length) return;
    const limite = 160;
    let activo = null;
    app.querySelectorAll("h3").forEach(h => {
      if (h.getBoundingClientRect().top <= limite) activo = h.id;
    });
    enlacesIndice.forEach(a => a.classList.toggle("activo", a.dataset.id === activo));
    const enlace = enlacesIndice.find(a => a.dataset.id === activo);
    if (enlace && indiceEl) {
      const lista = indiceEl.querySelector("ul");
      const dentro = enlace.offsetTop >= lista.scrollTop && enlace.offsetTop < lista.scrollTop + lista.clientHeight - 20;
      if (!dentro) lista.scrollTop = enlace.offsetTop - 60;
    }
  }

  let pendiente = false;
  window.addEventListener("scroll", () => {
    if (pendiente) return;
    pendiente = true;
    requestAnimationFrame(() => { pendiente = false; marcarActivo(); });
  }, { passive: true });

  document.addEventListener("click", e => {
    if (e.target.closest(".indice-toggle")) {
      indiceEl.classList.toggle("colapsado");
    } else if (e.target.closest("#indice-flotante a")) {
      // Se hace scroll sin cambiar el hash, porque el router usa el hash para elegir la vista
      e.preventDefault();
      const destino = document.getElementById(e.target.closest("a").dataset.id);
      if (destino) destino.scrollIntoView({ behavior: "smooth", block: "start" });
      indiceEl.classList.add("colapsado");
    }
  });

  app.addEventListener("click", e => {
    const boton = e.target.closest("button.toggle");
    if (boton) {
      const bloque = document.getElementById(boton.dataset.target);
      const oculto = bloque.classList.toggle("oculto");
      boton.textContent = oculto ? "Mostrar resolución" : "Ocultar resolución";
      return;
    }
    const filtro = e.target.closest(".filtros button");
    if (filtro) {
      const tema = filtro.dataset.tema;
      location.hash = tema ? `#parciales/${tema}` : "#parciales";
    }
  });

  window.addEventListener("hashchange", render);
  render();
})();
