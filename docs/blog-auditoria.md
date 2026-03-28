# Auditoría del bloque Blog

## Objetivo

Examinar el bloque **Blog** (`#blog`, lightbox) en `index.html` y `video.html` para decidir si conviene **retirarlo**, **reconvertirlo** o **reutilizarlo parcialmente**, en coherencia con un sitio de posicionamiento profesional ejecutivo y con el estado actual del resto del contenido (ya alineado al perfil real).

**Alcance:** inventario, valoración por tarjeta, recomendación global. **Sin cambios de código** en esta meta.

---

## Archivos revisados

| Archivo | Qué se revisó |
|---------|----------------|
| `index.html` | Lightbox `#blog`: encabezado, `.blog-section`, tarjetas `.single-post` |
| `video.html` | Mismo bloque (paridad con `index.html`) |
| `js/main.js` | Entrada `responsiveColumns` para `['#blog', '.blog-section .single-post', null]` |
| `css/main.css` | Solo lectura conceptual de estilos de cards/blog (sin modificación) |

**Paridad:** el contenido del blog es **idéntico** en ambas páginas.

---

## Estructura actual del bloque

- Contenedor: **`.lightbox-wrapper#blog`** con `data-simplebar`.
- Encabezado de página: `section-heading page-heading` con:
  - *Check out my latest blog posts* (inglés)
  - *My Blog*
- Cuerpo: **`.blog-section.single-section`** con una **fila** `row justify-content-center` y **6 columnas** `col-12 col-sm-8 col-lg-4` (hasta 3 columnas en `lg`).
- Cada tarjeta: **`.card.single-post`** con:
  - enlace imagen **`.post-img`** `href="#0"`, imagen `img/post-{1..6}.jpg`, **`.content-date`**
  - **`.card-body`**: enlace `href="#0"` envolviendo **`.content-title`**, párrafo **`.content-description`**

**JS:** `main.js` ajusta márgenes de última fila para `.blog-section .single-post` vía `responsiveColumns`. No hay lógica adicional específica del blog (sin feed, sin paginación).

---

## Inventario de tarjetas o publicaciones actuales

| # | Título | Fecha (visible) | Imagen | Destino enlaces | Valoración | Observación |
|---|--------|-----------------|--------|-----------------|------------|-------------|
| 1 | Top tools for Photographers | 11 Dec, 20 | `img/post-1.jpg` | `#0` (imagen + título) | **Desechable** | Tema fotografía / herramientas; ajeno al posicionamiento TI institucional. |
| 2 | Take a tour of my office | 12 Aug, 20 | `img/post-2.jpg` | `#0` | **Desechable** | Demo oficina; sin artículo real. |
| 3 | How i became a Web Designer | 4 Feb, 20 | `img/post-3.jpg` | `#0` | **Desechable** | Narrativa freelance diseño web; Lorem. |
| 4 | How to improve work performance | 11 Dec, 19 | `img/post-4.jpg` | `#0` | **Desechable** | Autodesarrollo genérico; Lorem. |
| 5 | How to work from home | 15 Nov, 19 | `img/post-5.jpg` | `#0` | **Desechable** | Tema remoto genérico; Lorem. |
| 6 | How to enjoy your business trip | 8 Aug, 19 | `img/post-6.jpg` | `#0` | **Desechable** | Viajes de negocio; Lorem. |

**Extracto:** en las seis tarjetas el texto es el **mismo Lorem ipsum** repetido.

**Encabezado de sección:** valoración **reconvertible** (cambiar título/microtexto a español y a “publicaciones”, “recursos” o “docencia” según estrategia) o **desechable** si se retira el bloque entero.

**Estructura de rejilla + card:** valoración **reutilizable** como patrón visual para enlazar a artículos, notas técnicas, materiales de docencia o PDFs con **URLs reales**.

---

## Evaluación global del bloque

- **Credibilidad:** **baja**. Todas las tarjetas son **demo de plantilla** (títulos en inglés tipo revista, fechas antiguas ficticias, **enlaces rotos funcionales** `href="#0"`).
- **Coherencia con el sitio:** **baja**. El tono es blog personal/freelance; no refleja liderazgo tecnológico institucional ni contenido propio.
- **Riesgo de mantenerlo sin cambios:** percepción de sitio **inacabado** y clics **falsos** (misma problemática auditada en otros bloques).
- **Valor de la estructura:** **alta** para un futuro listado de **recursos profesionales** con imágenes y fechas reales, si existe calendario editorial o enlaces externos verificables.

---

## Recomendación

**Retiro** (de la versión actual del bloque y de su visibilidad para el usuario mientras solo exista contenido demo y enlaces `#0`).

**Justificación de la elección:** no aplica **reconversión parcial** (ninguna tarjeta aporta texto o enlace reutilizable). La **reconversión total** es la vía correcta **cuando** existan títulos, extractos, fechas y **URLs reales** aprobadas; hasta entonces, mantener el bloque perjudica la credibilidad. En ese momento futuro se puede reutilizar la **misma estructura** de rejilla y cards (**reconversión total** del contenido respecto al estado demo).

---

## Justificación técnica

1. **Marcado:** la estructura de cards es estable; no hay dependencia JS que impida vaciar o sustituir tarjetas.
2. **Navegación:** el ítem de menú `href="#blog"` apunta a un lightbox existente; retirar el bloque implicaría en el futuro ocultar o renombrar el ítem (`main.js` ya oculta lightboxes sin enlace en navbar — habría que mantener coherencia si se elimina `#blog`).
3. **`responsiveColumns`:** seguirá funcionando si se reduce el número de `.single-post` o se mantiene la clase en nuevas tarjetas.
4. **Credibilidad vs esfuerzo:** corregir solo “un poco” (**reconversión parcial**) dejaría aún mezcla demo/real; no se recomienda.

---

## Siguiente paso prudente

1. **Decisión de producto:** ¿habrá blog/notas/recursos en el sitio estático (enlaces a PDF, Medium, revista institucional)?
2. Si **sí:** meta de **reconversión total** — nuevos títulos en español, extractos propios, `href` reales, fechas coherentes, `alt` útiles; opcional renombrar sección (“Publicaciones”, “Recursos”, “Docencia”).
3. Si **no** (a corto plazo): meta de **retiro** del HTML del bloque `#blog` y ajuste del menú para no ofrecer destino vacío.

---

## Metadatos

| Campo | Valor |
|-------|--------|
| Fecha | 2026-03-28 |
| Cambios en código | Ninguno |
