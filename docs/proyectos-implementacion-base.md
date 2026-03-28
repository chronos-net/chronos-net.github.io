# Proyectos — implementación base (Meta 028)

## 1. Objetivo de la implementación

Sustituir el bloque demo **Portfolio** por la sección pública **Proyectos e iniciativas**, alineada al tono ejecutivo e institucional del sitio: sin filtros de plantilla, sin textos en inglés en el bloque, sin lightbox engañoso sobre imágenes demo, y con **tres tarjetas** redactadas a partir de la base factual autorizada.

---

## 2. Archivos modificados

| Archivo | Cambio |
|---------|--------|
| `index.html` | Menú visible “Proyectos”, lightbox `#portfolio` recontenido, rejilla de 3 tarjetas, sin filtros. |
| `video.html` | Paridad con `index.html`. |
| `css/custom.css` | Estilos mínimos para `.project-card-summary` y `cursor` en `.portfolio-item` (bloque no roto, lectura del resumen). |

**No modificados en esta meta:** `js/main.js` (Isotope sigue inicializando sobre `.portfolio-grid`; los filtros ausentes no generan error en jQuery). Identificador **`id="portfolio"`** y **`href="#portfolio"`** se conservan por estabilidad de navegación.

---

## 3. Cambios aplicados al encabezado

- **`p.section-description`:** “Alcance institucional en dirección tecnológica, arquitectura y plataformas operativas”.
- **`h2.section-title`:** “Proyectos e iniciativas”.
- **Navegación:** etiqueta visible del enlace → **“Proyectos”** (destino `#portfolio` sin cambio).

---

## 4. Filtros retirados

- Eliminados por completo el `row` que contenía `ul.filter-control`, las opciones *All / Brand / Design / Photos* y el `aria-label` en inglés.
- Eliminadas las clases de categoría en `single-item` (`.design`, `.brand`, `.photos`).

---

## 5. Tarjetas incorporadas

| # | Título (`h6.content-title`) | Etiqueta (`span.content-more`) |
|---|-----------------------------|--------------------------------|
| 1 | Dirección tecnológica institucional | Infraestructura y gobierno digital |
| 2 | Sistema de Puestos y Plazas | Arquitectura y desarrollo institucional |
| 3 | Plataformas administrativas y académicas | Soluciones operativas y modernización |

Los párrafos **`p.project-card-summary`** recogen el texto breve acordado, con cifras **solo** donde estaban autorizadas (+210 mil / +900 dispositivos; +300 mil).

---

## 6. Tratamiento dado a imágenes y enlaces

- **Imágenes:** se reutilizan de forma **provisional** `img/item-1.jpg`, `item-2.jpg`, `item-3.jpg` para no romper el layout mientras no existan piezas gráficas propias. Los **`alt`** indican explícitamente carácter **referencial**, no literal del contenido gráfico demo.
- **Enlaces / lightbox:** se eliminaron `data-lightbox` y el envoltorio `<a class="portfolio-item">`; cada ítem es **`div.portfolio-item`**, de modo que **no** se abre Lity ni se sugiere “más detalle” falso. El contenido principal del caso está en el resumen bajo la imagen y, en escritorio, en el overlay al hover (etiqueta + título).

---

## 7. Riesgos editoriales controlados

- **Disociación imagen–texto:** las fotos demo no ilustran los tres ejes narrados; mitigado con `alt` referencial y documentación aquí para sustitución futura.
- **Cifras:** solo las explícitamente autorizadas en el encargo; sin extrapolación.
- **Sensibilidad institucional:** textos a alto nivel, sin nombres internos ni datos operativos restringidos.
- **Isotope:** dependencia residual de la plantilla; con tres ítems el comportamiento es trivial; una meta futura podría simplificar JS si se desea eliminar la dependencia.

---

## 8. Pendientes para refinamiento posterior

- Sustituir **`item-1` … `item-3`** por capturas o diagramas **aprobados** (o iconografía neutra) acordes a cada eje.
- Valorar **cuarta tarjeta** cuando exista caso documentable (documento editorial previo sugería 3–4).
- Opcional: alinear **`id="portfolio"`** y comentarios de código/JS con el nombre “Proyectos” en una meta de refactor solo técnica.
- Revisar si se desea **desactivar por código** la inicialización Isotope cuando no hay filtros (optimización menor).

---

| Metadato | Valor |
|----------|--------|
| Meta | 028 |
| Fecha | 2026-03-28 |
