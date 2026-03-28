# Hero: auditoría y saneamiento mínimo

## Objetivo

Inventariar elementos clicables del **hero** (`#home`) en `index.html` y `video.html`, detectar destinos no operativos y documentar el saneamiento mínimo aplicado (marzo 2026), sin alterar el resto del sitio.

---

## Archivos revisados

- `index.html` — sección `<!-- Home-->` … `</section>` del hero
- `video.html` — mismo ámbito (incluye variante `video-variant` y `#homeVideo`)

---

## Inventario de elementos clickables (antes del saneamiento)

| Elemento | Destino / comportamiento | Clasificación previa |
|----------|---------------------------|----------------------|
| Lista idiomas ENG / JAP | `href="#0"` | Eliminar (sin selector real) |
| 5 iconos sociales (Twitter, Facebook, LinkedIn, GitHub, Instagram) | `href="#0"` | Eliminar |
| Título animado (Developer / Designer / Freelancer) | Texto, no enlace | Dejar (contenido editorial; no es CTA roto) |
| `video.html` — contenedor `#homeVideo` | `data-property` con `https://youtu.be/KR97TgpMyrc` | Operativo (YouTube; no es placeholder `#0`) |

**No había** en el hero: `href="#"`, `javascript:void(0)`, ni botones tipo `<button>` con acción falsa.

---

## Clasificación ejecutada

| Ítem | Decisión |
|------|----------|
| Idiomas y redes con `#0` | **Eliminar ahora** — caso claro, sin URLs reales |
| Headline rotativo | **Dejar temporalmente** — requiere definición de mensaje profesional |
| Video de fondo (`video.html`) | **No tocar** — URL externa válida |

---

## Qué se corrigió en código

- Se eliminó por completo el bloque **`.fixed-wrapper`** (columnas fijas izquierda/derecha) que contenía únicamente enlaces a `#0`.
- **Paridad:** mismo cambio en `index.html` y `video.html`.

**No se modificó:** `h1`, `h4` / animación de palabras, imagen de fondo, contenedor del video en `video.html`, ni archivos CSS/JS.

---

## Riesgos o pendientes

- **Layout:** el hero puede mostrar más espacio lateral sin las barras fijas; es coherente con retirar acciones falsas.
- **Headline** sigue en inglés con roles genéricos de plantilla (“Developer”, etc.); conviene una meta editorial futura.
- Si en el futuro se desean **idiomas o redes** en el hero, habrá que reintroducir marcado con **URLs reales** o mecanismo i18n definido.

---

## Metadatos

| Campo | Valor |
|-------|--------|
| Alcance | Solo hero en dos HTML |
| CSS/JS | Sin cambios |
