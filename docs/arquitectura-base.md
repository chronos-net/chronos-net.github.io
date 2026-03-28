# Arquitectura base — auditoría plantilla Kitzu

## Objetivo

Documentar el estado estructural y técnico actual del proyecto basado en la plantilla **Kitzu** (v2.0.1, Exill), para orientar iteraciones posteriores hacia un sitio estático profesional, modular y alojable en **GitHub Pages**, sin ejecutar en esta meta rediseño, cambios de contenido final ni reconstrucción del sitio.

**Alcance de esta meta:** inventario, clasificación de activos, compatibilidad con hosting estático, mapeo hacia módulos objetivo, propuesta de arquitectura inicial y recomendaciones prudentes para la siguiente iteración.

---

## Estado actual de la plantilla

- **Tipo de aplicación:** sitio de una sola página (SPA visual) con secciones en “lightboxes” modales activados desde la barra de navegación; no hay sistema de plantillas ni includes del lado del servidor.
- **Puntos de entrada HTML:** `index.html` (hero con imagen de fondo) y `video.html` (misma estructura que `index.html`, con variante de video de fondo en el hero mediante `jquery.mb.YTPlayer`).
- **Gestión de dependencias:** no hay `package.json`, bundler ni pipeline de build; las librerías están embebidas en `css/` y `js/`.
- **Contenido:** textos e imágenes de demostración (perfil ficticio “Emma Smith”, servicios, testimonios, precios, blog de ejemplo).
- **Formulario de contacto:** envío por **AJAX POST** a `php/contact.php` (PHP + `mail()`), incompatible con GitHub Pages en su forma actual.

---

## Inventario técnico resumido

### Carpetas principales

| Carpeta | Contenido |
|---------|-----------|
| `css/` | Estilos base, vendors, esquemas de color (`css/colors/*.css`), `custom.css` |
| `js/` | jQuery, Bootstrap, plugins (Isotope, Lity, SimpleBar, Tiny Slider, YTPlayer, etc.), `main.js`, `custom.js` |
| `img/` | Imágenes de demo, favicons en `img/favicons/` |
| `fonts/` | Ionicon webfonts (`.eot`, `.ttf`, `.woff`, `.woff2`, `.svg`) |
| `php/` | `contact.php` — backend de correo |

### Páginas HTML y entry points

| Archivo | Rol |
|---------|-----|
| `index.html` | Entrada principal; hero estático; resto de secciones idénticas en estructura a `video.html` salvo el bloque home |
| `video.html` | Variante demo con hero en video (YouTube embebido vía plugin) |

### Hojas de estilo (agrupación)

- **Núcleo / tema:** `css/bootstrap-custom.css`, `css/main.css`, un archivo activo en `css/colors/` (p. ej. `main-darkgreen.css` referenciado en HTML), `css/custom.css`.
- **Vendors:** `ionicons.min.css`, `tiny-slider.css`, `lity.min.css`, `simplebar.min.css`, `jquery.mb.YTPlayer.min.css`.
- **Alternativas de color:** 24 archivos en `css/colors/` (intercambiables cambiando el `<link id="color-scheme">`).

### Scripts

- **Core:** `jquery.min.js`, `bootstrap.bundle.min.js`.
- **Plantilla:** `main.js` (navbar + modales, home, testimonios, skills, portfolio/isotope, contacto AJAX, preloader).
- **Extensión vacía prevista por el autor:** `custom.js` (estructura lista, sin lógica añadida).
- **Plugins:** `imagesloaded.pkgd.min.js`, `isotope.pkgd.min.js`, `animatedModal.js`, `tiny-slider.js`, `lity.min.js`, `simplebar.min.js`, `jquery.mb.YTPlayer.min.js`.

### Imágenes y assets

- Raíz `img/`: `home.jpg`, `info-img.jpg`, `img-kitzu-logo.png`, `item-1.jpg` … `item-6.jpg`, `post-1.jpg` … `post-6.jpg`, `client-1.jpg` … `client-3.jpg`, `video.jpg`, etc.
- `img/favicons/`: iconos Apple y PNG estándar.

### Archivos PHP

- `php/contact.php`: validación POST, construcción del cuerpo del mensaje, envío con `mail()`. **No ejecutable en GitHub Pages.**

### Dependencias externas o plugins (red)

- **Google Fonts:** `fonts.googleapis.com` — familia Poppins (stylesheet en `<head>`).
- **YouTube:** URLs en enlaces lightbox y en datos del reproductor de fondo (`video.html` / sección video en resume).

### Fragmentos reutilizables

- No hay partials HTML, ni SSI, ni generador estático: el marcado está **duplicado íntegro** entre `index.html` y `video.html`. La “reutilización” es solo por copia del bloque completo.

### Elementos de demo / blog / contacto / muestra

- **Blog:** sección `#blog` con tarjetas que enlazan a `#0` (sin artículos reales).
- **Contacto:** formulario con destino PHP; bloque lateral de datos de contacto estático.
- **Testimonios y precios (“Choose a Plan”):** contenido típico de portfolio freelance, no alineado por defecto con un perfil institucional académico/técnico.
- **Portfolio:** rejilla con Isotope y categorías demo (Brand / Design / Photos).

---

## Elementos incompatibles con GitHub Pages

| Elemento | Detalle |
|----------|---------|
| **`php/contact.php`** | GitHub Pages solo sirve archivos estáticos; PHP no se ejecuta. El flujo actual de contacto **no funcionará**. |
| **Formulario `action="php/contact.php"` + AJAX POST en `main.js`** | Depende de un endpoint server-side. En estático hace falta **sustituir** por otra estrategia (servicio de formularios de terceros, `mailto:`, GitHub Issues/Discussions vía enlace, etc.) en una meta posterior. |
| **`mail()` en PHP** | Aunque hubiera servidor PHP, el envío real depende de configuración del host; en Pages no aplica. |

**Compatibles con Pages (con matices):**

- Rutas relativas (`css/`, `js/`, `img/`) — correctas para sitio en raíz de usuario u organización; si el repo se publica en subruta (`username.github.io/repo/`), habrá que revisar `base` o rutas en una iteración de despliegue.
- Recursos en CDN (Google Fonts, YouTube) — requieren red; no son “incompatibles”, pero acoplan el sitio a servicios externos.
- **Nota de implementación:** el logo del navbar usa `href="#home-area"` pero la sección hero tiene `id="home"`. El ancla puede no desplazar correctamente al inicio; conviene corregirlo cuando se aborde navegación/estructura.

---

## Clasificación de activos

La clasificación orienta trabajo futuro; no implica ejecutar cambios en esta meta.

### Conservar

- Estructura general de **una página + lightboxes** y el orden conceptual de secciones (hasta donde encaje con los módulos objetivo).
- **`css/main.css`**, **`css/bootstrap-custom.css`**, vendors necesarios según secciones que se mantengan, **un** esquema de color activo y **`css/custom.css`** como capa de overrides.
- **`js/main.js`** como núcleo de comportamiento (ajustar solo lo imprescindible al cambiar secciones o el contacto).
- **`js/custom.js`** como hook de extensiones.
- **Imágenes y fuentes** necesarias para el look vigente (sustitución de contenido en metas posteriores, no optimización en esta meta).
- **`img/favicons/`** como base; actualización de marca cuando corresponda.

### Refactorizar (estructura / mantenimiento, no rediseño cosmético)

- **Duplicación `index.html` / `video.html`:** unificar criterio (una entrada o generación estática) para no mantener dos copias.
- **Marcado monolítico:** en el futuro, modularizar secciones (includes vía herramienta estática, o componentes) según la arquitectura objetivo.
- **Navbar y anclas:** alinear IDs y enlaces (`#home` vs `#home-area`); renombrar ítems cuando se mapeen a módulos definitivos.
- **Secciones demo** (testimonios, pricing, blog): vaciar, sustituir o fusionar con módulos objetivo sin asumir nombres finales de página en esta meta.

### Eliminar o reemplazar (cuando se aborde contenido y alcance)

| Activo / bloque | Motivo típico |
|-----------------|---------------|
| **`php/contact.php`** | Reemplazar por solución estática o servicio externo; el archivo PHP puede **eliminarse** del repo de Pages o dejarse solo como referencia documentada (no ejecutable). |
| **Testimonios / Pricing** | Demo comercial; probable descarte o sustitución por “reconocimientos” / información no comercial según lineamiento editorial. |
| **Blog en formato actual** | Enlaces ficticios; reconversión a “Docencia”, “Publicaciones” o eliminación según decisión de producto. |
| **Variante `video.html`** | Opcional si el hero final no usa video de fondo; evita dependencia de YTPlayer y de API de YouTube en el hero. |

### Reemplazar (funcional)

- **Flujo de contacto:** de POST+PHP a mecanismo compatible con estático (definición en iteración siguiente).

---

## Mapeo de plantilla actual → módulos objetivo

Los módulos mínimos solicitados para el sitio profesional futuro:

| Módulo objetivo | Relación con Kitzu actual | Notas |
|-----------------|----------------------------|--------|
| **Inicio** | Sección `#home` (imagen o video de fondo), headline animado, redes | Reutilizable como capa de bienvenida; contenido y tono a sustituir. |
| **Perfil profesional** | `#about`: bloque “info”, “services”, testimonios, pricing | **Info** y **services** pueden reconducirse a líneas de competencia (liderazgo, arquitectura, ciberseguridad, etc.). Testimonios/pricing probable **reconversión** o **descarte**. |
| **Trayectoria** | `#resume`: educación + experiencia; skills con barras; bloque video | Timeline educación/experiencia **reutilizable** como esqueleto de trayectoria. Skills **reconversión** a competencias o eliminación si no encajan. Video **opcional** (no es módulo explícito). |
| **Proyectos** | `#portfolio` + Isotope | **Reutilizar** patrón de rejilla/filtros para casos o proyectos técnicos. |
| **Docencia** | No hay módulo dedicado | **Nueva** sección o reconversión del bloque blog / parte de resume. |
| **Certificaciones y reconocimientos** | No hay bloque dedicado | **Nueva** sección o subapartado dentro de trayectoria/perfil; testimonios podrían inspirar formato tipo “cita” si encaja editorialmente. |
| **CV y documentos** | Botón “Download CV” en `#about` (`href="#0"`) | **Reutilizar** patrón de CTA; enlace real a PDF u otros en `docs/` o URL externa en meta futura. |
| **Contacto** | `#contact` + datos estáticos + formulario | Datos estáticos **conservables**; formulario **reemplazar** destino. |

**Resumen de actitud por bloque actual:**

- **Reutilizar como base:** home, about (núcleo informativo), resume (timeline), portfolio, contacto (estructura).
- **Reconversión fuerte:** services, skills, blog, testimonios, pricing, video opcional.
- **Descartar o sustituir por decisión editorial:** testimonios comerciales, planes de precio, posts de blog ficticios.

---

## Arquitectura objetivo propuesta (inicial, estática)

Propuesta **sobria** para un repositorio GitHub Pages, separando presentación, activos y documentación/contenido estable. Los nombres son orientativos; pueden ajustarse sin cambiar el espíritu modular.

```
/                          # Raíz del sitio publicado
├── index.html             # Entrada principal (o redirección si se usa Jekyll con front matter en meta futura)
├── video.html             # Solo si se mantiene variante documentada; idealmente consolidar
├── css/
├── js/
├── img/
├── fonts/
├── docs/                  # Documentación del repo (p. ej. esta auditoría); NO confundir con PDFs públicos del CV
├── assets/                # Opcional: PDFs, CV, diplomas para enlazar de forma explícita (o usar docs/cv/ si se prefiere)
├── data/                  # Opcional: JSON/YAML de contenido si en una meta se externaliza texto desde JS o plantillas
└── pages/ o secciones/    # Opcional: si se migra a multipágina estática, HTML por módulo (p. ej. proyectos.html)
```

**Convenciones:**

- Mantener **`css/custom.css`** y **`js/custom.js`** como capas del propietario frente a vendor y `main.*`.
- Cualquier **PDF o documento** descargable puede vivir en `assets/` (o subcarpeta `assets/docs/`) con enlaces relativos estables.
- Si en el futuro se adopta **11ty, Jekyll u otro SSG** compatible con Pages, la raíz puede generarse desde `src/`; no es requisito de esta auditoría.

---

## Riesgos y cuidados

1. **Contacto:** el bloque de contacto pasó a canales estáticos (`mailto` + LinkedIn); `php/contact.php` queda fuera del flujo funcional (véase nota al final del documento).
2. **Duplicación de HTML:** dos archivos casi iguales incrementan errores al actualizar secciones.
3. **Dependencia de terceros:** fuentes Google y YouTube (privacidad, disponibilidad en redes restringidas, cumplimiento normativo en entornos institucionales).
4. **Ancla navbar / `id` del home:** comportamiento de scroll inconsistente si no se corrige.
5. **Alcance de “demo”:** muchos bloques son placeholders; la transformación en plataforma de posicionamiento requerirá decisiones de contenido fuera del alcance de esta meta técnica.

---

## Siguiente paso prudente (siguiente meta)

1. **Contacto (hecho en meta posterior):** canales estáticos en `index.html` / `video.html`; sin envío por PHP. Opcional: eliminar `php/contact.php` del repo al publicar o dejarlo solo como referencia no usada.
2. **Sustituir placeholders** de correo y LinkedIn cuando existan datos definitivos.
3. **Decidir** si el sitio permanece **monopágina** con secciones renombradas o evoluciona a **multipágina** estática; en ambos casos, alinear el mapa de navegación con los siete módulos mínimos.
4. **Consolidar** `index.html` vs `video.html` para reducir duplicación.
5. Reservar **contenido y SEO** para metas explícitas; no adelantar optimización ni redacción final hasta que corresponda.

---

## Nota de implementación: contacto compatible con GitHub Pages

- **Qué:** el formulario que enviaba a `php/contact.php` vía AJAX se sustituyó por un bloque estático “Contact channels” (`mailto` + enlace LinkedIn) en `index.html` y `video.html`. La columna “Contact Info” conserva la lista de apoyo con datos demo marcados como opcionales para reemplazo.
- **JS:** se eliminó el manejador `submit` / `$.ajax` asociado al formulario en `js/main.js`.
- **PHP:** `php/contact.php` **no interviene** en el sitio publicado; GitHub Pages no ejecuta PHP. El archivo puede permanecer en el repositorio sin uso o eliminarse en una limpieza futura.

---

## Metadatos de esta auditoría

| Campo | Valor |
|-------|--------|
| Fecha de referencia | 2026-03-28 |
| Plantilla | Kitzu v2.0.1 (Exill) |
| Ámbito | Solo diagnóstico y arquitectura documental; sin reconstrucción del sitio en esta meta |
