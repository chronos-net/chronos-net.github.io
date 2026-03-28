# Auditoría de enlaces placeholder

## Objetivo

Inventariar y clasificar enlaces **no operativos**, **placeholder** o **inconsistentes** en la versión actual del sitio (`index.html`, `video.html`), para priorizar correcciones mínimas en una meta posterior sin confundir auditoría con implementación.

**Alcance:** enlaces de contenido y CTAs visibles para el visitante. Se excluyen del inventario principal los `<link rel="stylesheet">` / favicons / bundles locales (son dependencias técnicas, auditadas en `docs/dependencias-publicacion.md`).

**Paridad:** `index.html` y `video.html` comparten la misma estructura de enlaces de contenido; las filas duplicadas se documentan una vez indicando **ambos archivos**.

---

## Archivos revisados

| Archivo | Contenido revisado |
|---------|---------------------|
| `index.html` | Todos los `href` en cuerpo (excl. `<link>` de assets) |
| `video.html` | Igual |
| `js/main.js` | Delegación `click` en `[data-lightbox]`; `animatedModal` en `.nav-link[href^="#"]`; filtros portfolio |

**`main.js`:** no redefine comportamiento de `href="#0"`. Los enlaces `#0` son anclas inválidas típicas de plantilla (no navegan a contenido útil). `[data-lightbox]` abre Lity para imágenes locales y URL de YouTube — **operativo**.

---

## Inventario de enlaces no operativos

Leyenda de **tipo:** navegación | redes | CTA | blog/demo | idiomas | tarjetas/proyectos | contacto | otros.

| Archivo(s) | Elemento / texto visible | href / destino actual | Tipo | Prioridad | Observación |
|------------|---------------------------|------------------------|------|-----------|-------------|
| Ambos | Logo navbar | `#home` | navegación | — | **Operativo** (ancla corregida). |
| Ambos | Menú About…Contact | `#about` … `#contact` | navegación | — | **Operativo** (modales / secciones). |
| Ambos | ENG / JAP (hero) | `#0` | idiomas | Medio | Selector de idioma sin implementación; clic no lleva a contenido. |
| Ambos | Iconos redes sociales (hero, 5) | `#0` | redes | Medio | Aparentan perfiles; no hay URL real. |
| Ambos | Email en bloque About (“Emma Smith”) | `mailto:emma@example.com` | contacto | Crítico | Demo de plantilla; **inconsistente** con bloque Contact (`correo@pendiente.com`). |
| Ambos | Botón “Download CV” | `#0` | CTA | Crítico | Promete descarga; no hay PDF ni destino. |
| Ambos | Iconos redes (About, 5) | `#0` | redes | Medio | Mismo caso que hero. |
| Ambos | “Get Standard” / “Get Pro” / “Get Business” | `#0` | CTA | Medio | Precios demo; no hay checkout ni página destino. |
| Ambos | Miniatura + título de cada post (6 tarjetas × 2 enlaces) | `#0` | blog/demo | Medio | Blog ficticio; tarjetas enteras clicables sin artículo. |
| Ambos | Lightbox video “Office tour” | `https://www.youtube.com/watch?v=doteMqP6eSc` | otros | Bajo | **Operativo** (externo). |
| Ambos | Ítems portfolio (6) | `img/item-*.jpg` + `data-lightbox` | tarjetas/proyectos | — | **Operativo** (galería Lity). |
| Ambos | Contact channels: Email | `mailto:correo@pendiente.com` | contacto | Crítico | Dominio explícitamente pendiente de reemplazo. |
| Ambos | Contact channels: LinkedIn | `https://www.linkedin.com/in/pendiente` | contacto | Crítico | Ruta placeholder; puede abrir perfil genérico/404 según LinkedIn. |
| Ambos | Contact Info: teléfono | `tel:+441632967704` | contacto | Medio | Número demo UK; no validado como propio. |
| `video.html` | Reproductor fondo (data-property) | `https://youtu.be/KR97TgpMyrc` | otros | Bajo | **Operativo** (YouTube API vía plugin). |

**No detectado en estos archivos:** `href="#"`, `javascript:void(0)` ni `onclick` con pseudo-URLs.

---

## Clasificación por prioridad

### Críticos

- **`mailto:correo@pendiente.com`** y **`https://www.linkedin.com/in/pendiente`** (Contact channels): rotulados como pendientes; afectan credibilidad y contacto real.
- **`Download CV` → `#0`:** CTA principal que no entrega recurso.
- **Incoherencia `emma@example.com` (About) vs correo de Contact:** mismo sitio muestra dos correos distintos; uno es demo y otro placeholder.

### Medios

- **Todos los `href="#0"`** en idiomas, redes (×10 por página), pricing (×3), blog (×12): visibles y clicables sin destino útil.
- **`tel:+441632967704`:** parece contacto real pero es contenido demo.

### Bajos

- **Enlaces YouTube** (resume + video de fondo en `video.html`): funcionan; solo dependen de terceros y política de contenido.
- **Portfolio a imágenes locales:** funcionan como lightbox.

---

## Recomendación de corrección mínima

Orden sugerido para una **meta posterior** de implementación acotada:

1. **Unificar y sustituir datos de contacto** en About + Contact: un solo `mailto` real (o placeholder único documentado) y LinkedIn definitivo.
2. **Sustituir `Download CV`** por enlace a PDF en `assets/`/`docs/` o a `mailto:` con asunto; mientras tanto, deshabilitar o etiquetar como “próximamente” solo si se acuerda criterio editorial (fuera de esta auditoría).
3. **Redes sociales:** reemplazar `#0` por URLs reales o quitar `href` (botón/span no enlazado) según política de presencia digital.
4. **Blog:** enlaces a `#0` → URLs de posts reales, o eliminar capa clicable hasta tener contenido.
5. **Pricing / idiomas:** baja prioridad; son demo claro pero siguen siendo “clics vacíos”.

---

## Riesgos si se publican sin ajuste

- Percepción de sitio **inacabado** o **no confiable** en contacto y CV.
- **Conflicto de mensajes** (dos emails distintos).
- **LinkedIn** `/in/pendiente` puede generar frustración o señal de baja calidad.
- **Patrón `#0`** en muchos elementos puede afectar accesibilidad (destinos confusos) y analítica de clics.

---

## Siguiente paso prudente

Abrir una meta dedicada a **sustituir placeholders de contacto y CV** y, en segundo orden, redes y blog, **sin rediseño**, solo reemplazo de `href` y alineación de textos con datos definitivos o una única convención de placeholder acordada.

---

## Metadatos

| Campo | Valor |
|-------|--------|
| Fecha | 2026-03-28 |
| Alcance | Solo auditoría; sin cambios de código en el repositorio aplicados en esta meta |
