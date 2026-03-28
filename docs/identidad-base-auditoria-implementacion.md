# Identidad base — auditoría e implementación (Meta 027)

## 1. Objetivo de la intervención

Retirar del **sitio operativo** (páginas, estilos y scripts propios del proyecto) la **marca visible y la atribución de plantilla** asociada a **Kitzu / Exill**, y sustituir la identidad del navbar y de los metadatos principales por una **marca textual sobria** centrada en **Christopher Delgadillo**, sin logotipo gráfico complejo ni eslogan comercial.

---

## 2. Referencias heredadas detectadas

| Ubicación | Tipo |
|-----------|------|
| `index.html`, `video.html` | `<title>` y `meta name="description"` con texto de plantilla; imagen `img/img-kitzu-logo.png` en `navbar-brand` con `alt="Logo"`. |
| `css/main.css`, `css/bootstrap-custom.css`, `css/custom.css` (antes), `css/colors/*.css` | Cabecera de comentario con *Item: Kitzu*, Exill, Themeforest. |
| `js/main.js`, `js/custom.js` | Misma cabecera de comentario. |
| `docs/arquitectura-base.md`, `docs/dependencias-publicacion.md` | Menciones históricas a Kitzu y al archivo de logo (no forman parte del HTML servido). |

**No detectado** en esta pasada: `Kitzu` dentro de librerías minificadas de terceros (`bootstrap.bundle.min.js`, etc.) más allá de coincidencias ajenas al nombre de la plantilla.

---

## 3. Archivos modificados

| Archivo | Motivo |
|---------|--------|
| `index.html` | Título, descripción meta, sustitución del logo por marca textual. |
| `video.html` | Igual que `index.html` (paridad). |
| `css/custom.css` | Nueva cabecera de archivo; reglas `.brand-wordmark` para legibilidad y sin `text-transform: uppercase` heredado del tema sobre el nombre. |
| `css/main.css` | Cabecera de comentario neutralizada. |
| `css/bootstrap-custom.css` | Cabecera de comentario neutralizada. |
| `css/colors/main-*.css` (24 hojas) | Cabecera de comentario neutralizada. |
| `js/main.js` | Cabecera de comentario neutralizada. |
| `js/custom.js` | Cabecera de comentario neutralizada. |

**No modificados:** `docs/arquitectura-base.md`, `docs/dependencias-publicacion.md` (quedan como registro de auditoría previa; ver sección 7).

---

## 4. Cambios aplicados

- **Metadatos:** `title` → `Christopher Delgadillo`; `description` → texto breve en español alineado al propósito del sitio (perfil, trayectoria, contacto).
- **Navbar:** el enlace `#home` mantiene clases y comportamiento; el contenido visible es `<span class="brand-wordmark">Christopher Delgadillo</span>`.
- **CSS de proyecto:** comentarios iniciales unificados a una cabecera que identifica el sitio como profesional del titular, sin URL de Themeforest ni nombre de plantilla comercial.
- **JS propio:** misma sustitución de cabecera de comentario (sin cambiar lógica ni plantillas Lity en línea).

---

## 5. Elementos retirados

- Referencia en HTML a **`img/img-kitzu-logo.png`** como logo de barra de navegación.
- Comentario HTML `<!-- Navbar Logo-->` asociado al bloque sustituido.
- Texto **Kitzu**, **Personal Portfolio Template** y atribución **Exill / Themeforest** en cabeceras de los archivos fuente listados en la sección 3.

El archivo físico `img/img-kitzu-logo.png` **no se eliminó del disco** en esta meta (solo dejó de usarse en el marcado); puede borrarse en una limpieza de assets posterior si ya no se necesita.

---

## 6. Elementos sustituidos

| Antes | Después |
|-------|---------|
| Logo imagen Kitzu | Marca textual **Christopher Delgadillo** |
| Título de pestaña plantilla | **Christopher Delgadillo** |
| Meta description plantilla | Descripción corta en español |
| Cabeceras de comentario Kitzu/Exill | Cabecera **Christopher Delgadillo — sitio profesional** |

**Descriptor opcional** (“Tecnología, arquitectura y liderazgo”): **no aplicado**; el layout del navbar no exigió segunda línea.

---

## 7. Riesgos controlados

- **Contraste y tipografía:** `custom.css` fuerza color, peso y `text-transform: none` para evitar que el nombre completo se muestre en mayúsculas por la regla existente `.navbar .navbar-brand span`.
- **Ancho del nombre:** en viewport muy estrechos el texto puede ocupar más que el logo previo; no se alteró el grid del navbar más allá del contenido del `navbar-brand`.
- **Favicon:** los `<link rel="icon">` existentes apuntan a `img/favicons/`; **no se regeneraron iconos** en esta meta (riesgo de siga siendo arte de plantilla si los archivos existen en despliegue).
- **Documentación:** permanecen menciones a **Kitzu** en `docs/arquitectura-base.md` y `docs/dependencias-publicacion.md` a propósito histórico y de inventario; **no son visibles en el sitio público** salvo que se publique la carpeta `docs/`.

---

## 8. Estado final de la identidad base

- **Marca visible principal en cabecera:** Christopher Delgadillo (texto).
- **Sin eslogan** en navbar ni en metadatos añadidos.
- **Sin referencias a Kitzu** en `index.html`, `video.html`, ni en las cabeceras de los CSS/JS propios del proyecto tratados.
- **Rastros pendientes de la cadena "Kitzu"** únicamente en documentación bajo `docs/` (ver sección 7), más la posible presencia del **archivo de imagen** sin uso en `img/`.

---

| Metadato | Valor |
|----------|--------|
| Meta | 027 |
| Fecha | 2026-03-28 |
