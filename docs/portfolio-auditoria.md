# Auditoría Meta 025 — Bloque Portfolio

## 1. Objetivo de la auditoría

Determinar, a partir del código real en `index.html` y `video.html`, si el lightbox **Portfolio** (`#portfolio`) puede **reconvertirse** en una sección profesional acorde al posicionamiento del sitio o si debe **retirarse** por **contaminación demo**, catalogando componentes como reutilizables, reconvertibles o desechables.

**Alcance:** solo el bloque Portfolio en los HTML indicados. Sin modificación de código en esta meta.

---

## 2. Archivos revisados

| Archivo | Resultado |
|---------|-----------|
| `index.html` | Bloque Portfolio localizado: líneas ~367–454 (`<!-- Portfolio lightbox-->` … cierre `</div>` antes de Contact). |
| `video.html` | Bloque Portfolio localizado: líneas ~368–455. **Contenido estructural y textual idéntico** al de `index.html`. |

**Confirmación:** Portfolio **existe en ambos archivos** con la misma estructura.

---

## 3. Inventario estructural del bloque Portfolio

### Contenedor y cierre

- **`div.lightbox-wrapper#portfolio`** con `data-simplebar`.
- **`div.container`** → cierre lightbox estándar (`lightbox-close` / `close-btn` / `data-modal-close`).
- **`div.lightbox-content`** envuelve encabezado y sección.

### Encabezado de sección (`section-heading page-heading`)

| Elemento | Contenido en código |
|----------|----------------------|
| `p.section-description` | `Showcasing some of my best work` |
| `h2.section-title` | `Portfolio` |
| `div.animated-bar` | Presente (decorativo) |

### Filtros (`ul.list-inline.filter-control`)

- `role="group"` y `aria-label="Filter Control"`.
- Ítems con `data-filter` y texto visible:

| Filtro (`data-filter`) | Texto visible |
|------------------------|---------------|
| `*` | `All` (clase `tab-active` en el primero) |
| `.brand` | `Brand` |
| `.design` | `Design` |
| `.photos` | `Photos` |

### Rejilla (`div.portfolio-grid.row`)

Seis entradas **`div.single-item`** con clases de columna **`col-6 col-lg-4`** y **clase de categoría** en el contenedor del ítem (`design`, `photos` o `brand`) alineada con los filtros.

### Por cada tarjeta (estructura repetida)

- **`a.portfolio-item`** con `href` apuntando a **`img/item-N.jpg`** (N = 1…6) y atributo **`data-lightbox`** (apertura en lightbox de imagen).
- **`div.portfolio-wrapper`** → **`img.img-fluid`** con `src` y `href` coincidentes; **`alt="Item"`** en todas.
- **`div.item-content`** (overlay de contenido sobre la imagen):
  - **`h6.content-title`**: título del ítem.
  - **`span.content-more`**: texto `More Info`.

### Detalle por ítem (título + categoría + imagen)

| # | Clases en `single-item` | `content-title` | `href` / `src` |
|---|-------------------------|-----------------|----------------|
| 1 | `design` | Label Tag Mockup | `img/item-1.jpg` |
| 2 | `photos` | 3D Bag Mockup | `img/item-2.jpg` |
| 3 | `design` | Modern Bag Design | `img/item-3.jpg` |
| 4 | `brand` | Coffee Cup Design | `img/item-4.jpg` |
| 5 | `brand` | T-Shirt Design | `img/item-5.jpg` |
| 6 | `photos` | Packaging Box Mockup | `img/item-6.jpg` |

### Dependencias estructurales visibles en el HTML

- Los filtros **`data-filter`** deben coincidir con clases en **`single-item`** (`.brand`, `.design`, `.photos`) para que el filtrado tenga sentido; eso acopla etiquetas de filtro a taxonomía de ítems.
- **`data-lightbox`** en cada enlace indica uso del flujo global de lightbox del tema (imagen a pantalla completa), no un modal de detalle de proyecto con copy propia.
- El menú principal enlaza a **`#portfolio`** (fuera del bloque, pero destino del lightbox); no forma parte del inventario interno del bloque más allá de la coherencia de `id="portfolio"`.

---

## 4. Elementos reutilizables

- **Contenedor lightbox** `#portfolio`, scroll `data-simplebar`, patrón de cierre.
- **Jerarquía** `lightbox-content` → encabezado de página → `portfolio-section` → filtros + rejilla.
- **Sistema de rejilla** Bootstrap (`row`, `col-6`, `col-lg-4`) para mosaico responsive.
- **Patrón tarjeta**: `single-item` + `portfolio-item` + `portfolio-wrapper` + imagen + `item-content` (título + línea secundaria).
- **Filtros por categoría** (`filter-control`, `data-filter`, clases en ítems) como **mecánica** reutilizable si se redefine la taxonomía (p. ej. tipos de iniciativa tecnológica).
- **Lightbox de imagen** como patrón si los entregables siguen siendo visuales (capturas, diagramas) con URLs reales.

---

## 5. Elementos reconvertibles

- **Título y subtítulo** del encabezado (actualmente inglés y tono creativo genérico).
- **Etiquetas de filtros** (`All`, `Brand`, `Design`, `Photos`) y **`aria-label`** en inglés.
- **Clases de categoría** en `single-item` (sustituibles por otra taxonomía alineada a proyectos reales).
- **Títulos `content-title`** y texto **`More Info`** (sustituibles por títulos de caso y CTA acorde, p. ej. resumen o “Ver detalle” según política editorial futura).
- **Rutas de imagen** y textos **`alt`** (hoy genéricos `Item`).
- **Enlaces `href`** hacia imágenes demo → futuros activos reales o otro destino acordado en implementación (no propuesto en esta auditoría).

---

## 6. Elementos desechables

- **Todo el inventario visual y textual actual** como evidencia profesional: mockups de producto (bolsas, playeras, empaques, etc.) típicos de plantilla **creativa / branding**, no de un posicionamiento **ejecutivo-técnico institucional**.
- **Categorías demo** Brand / Design / Photos como eje semántico del portafolio actual.
- **Microtexto** “Showcasing some of my best work” y título visible “Portfolio” en su **forma actual** (inglés, plantilla).
- **Uso de `alt="Item"`** repetido sin descripción real (desde perspectiva de accesibilidad y profesionalismo, el valor actual es nulo).

---

## 7. Contaminación demo detectada

- **100% del contenido mostrado** en títulos, filtros, subtítulo y metadatos visibles del encabezado es **plantilla en inglés**.
- **Las seis imágenes** son **`item-1.jpg` … `item-6.jpg`**, nombres y temática de **demo de diseño gráfico**.
- **“More Info”** no conduce a ficha de proyecto; abre la **misma imagen** en lightbox, sin narrativa ni contexto institucional.
- **Desalineación explícita** con un perfil de liderazgo tecnológico, dirección, arquitectura, seguridad y gobierno digital: el bloque **simula** un portafolio de diseñador gráfico o plantilla Themeforest.

---

## 8. Riesgos para una reconversión profesional

- **Credibilidad:** mantener una sola tarjeta demo junto a contenido real en otras secciones **erosiona** la coherencia del sitio.
- **Taxonomía:** filtros mal elegidos (o demasiados) pueden sugerir actividades que no corresponden al rol ejecutivo-técnico.
- **Imágenes sensibles:** capturas de sistemas internos pueden implicar **cumplimiento** y aprobaciones; el formato actual asume galería pública de creativos.
- **Lightbox solo-imagen:** puede ser **insuficiente** si en el futuro se requiere caso con texto largo; eso sería decisión de **otra meta** (cambio de patrón), no observado como fallo del HTML actual sino como **límite del patrón**.
- **Duplicidad `index.html` / `video.html`:** cualquier reconversión futura debe **replicarse en ambos** para evitar divergencia.

---

## 9. Recomendación técnica final

**Reconversión total** del **contenido y la taxonomía** del bloque Portfolio (textos, filtros, clases de categoría, imágenes, `alt`, títulos de tarjeta y destinos de enlace), **conservando** la **carcasa** del lightbox y, si aplica editorialmente, el **patrón** rejilla + filtros + lightbox.

**Retiro** del bloque completo **no** se impone solo por contaminación demo: la **estructura es apta** para una galería de **iniciativas, plataformas o resultados** una vez sustituido todo lo demostrable. La recomendación cerrada es por tanto **reconversión total** del relleno y metadatos visibles, no del esqueleto HTML global del lightbox.

---

## 10. Siguiente paso prudente sugerido

Abrir una **meta de planificación editorial** (sin ejecutarla en esta auditoría) que defina: si existen **activos y casos publicables**, nueva taxonomía de filtros (o eliminación de filtros), criterios de **imagen y alt text**, y tono/idioma del encabezado alineados con About, Resume y navegación. Después, una **meta de implementación** que aplique los cambios en **`index.html` y `video.html`** de forma consistente y revise el comportamiento JS/CSS del filtrado y lightbox **solo si** cambia el modelo de ítems o enlaces.

---

## Metadatos

| Campo | Valor |
|-------|--------|
| Meta | 025 — Auditoría estructural Portfolio |
| Fecha documento | 2026-03-28 |
| Cambios de código | Ninguno (auditoría documental únicamente) |
