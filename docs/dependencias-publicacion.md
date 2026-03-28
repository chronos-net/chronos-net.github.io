# Dependencias reales para publicación

## Objetivo

Registrar qué archivos locales **están referenciados** por la versión actual del sitio (`index.html` y `video.html`) y por la cadena **CSS → fuentes/imágenes** y **JS → inicialización**, para poder versionar un **conjunto mínimo** en GitHub Pages sin asumir “subir todo el disco” ni dejar assets críticos fuera del remoto.

Esta auditoría se basa en **rutas y selectores reales** (marzo 2026). No sustituye a `git status` ni al listado de archivos que hoy estén sin trackear en el remoto.

---

## Archivos auditados

| Archivo / ámbito | Qué se revisó |
|------------------|----------------|
| `index.html` | `href`, `src`, `style` inline (`background-image`), `data-*` con URLs |
| `video.html` | Igual que `index.html` |
| `js/main.js` | Inicialización de plugins (`lity`, `tns`, `isotope`, `imagesLoaded`, `animatedModal`, `YTPlayer`, `simplebar` implícito vía `data-simplebar`) |
| `js/custom.js` | Sin referencias a rutas de assets |
| `css/custom.css` | Sin `url()` ni `@import` |
| `css/ionicons.min.css` | `@font-face` → `../fonts/` |
| `css/main.css` | `url(../img/...)` |
| `css/bootstrap-custom.css` | Solo `url(data:...)` (sin archivos externos) |
| `css/jquery.mb.YTPlayer.min.css` | `url(...)` a fuentes e imágenes relativas al CSS |
| `css/lity.min.css`, `css/simplebar.min.css`, `css/tiny-slider.css` | Sin rutas a archivos locales en este proyecto |
| `css/colors/main-darkgreen.css` | Sin `url()` propios (solo overrides de color) |

---

## Dependencias directas detectadas

### HTML (ambas páginas: misma lista de assets)

**CSS enlazados (orden de carga):**

- `css/bootstrap-custom.css`
- `css/ionicons.min.css`
- `css/tiny-slider.css`
- `css/lity.min.css`
- `css/simplebar.min.css`
- `css/jquery.mb.YTPlayer.min.css`
- `css/main.css`
- `css/colors/main-darkgreen.css`
- `css/custom.css`

**JS enlazados (orden de carga):**

- `js/jquery.min.js`
- `js/bootstrap.bundle.min.js`
- `js/imagesloaded.pkgd.min.js`
- `js/isotope.pkgd.min.js`
- `js/animatedModal.js`
- `js/tiny-slider.js`
- `js/lity.min.js`
- `js/simplebar.min.js`
- `js/jquery.mb.YTPlayer.min.js`
- `js/main.js`
- `js/custom.js`

**Imágenes y rutas en atributos HTML (idénticas en `index.html` y `video.html` salvo el bloque home, ver apartado discrepancias):**

| Ruta | Uso |
|------|-----|
| `img/favicons/apple-touch-icon.png` | Favicon Apple |
| `img/favicons/favicon-32x32.png` | Favicon 32 |
| `img/favicons/favicon-16x16.png` | Favicon 16 |
| `img/img-kitzu-logo.png` | Logo navbar |
| `img/home.jpg` | Fondo hero (`style="background-image:url(img/home.jpg)"`) |
| `img/info-img.jpg` | About |
| `img/client-1.jpg` … `img/client-3.jpg` | Testimonios |
| `img/item-1.jpg` … `img/item-6.jpg` | Portfolio + lightbox |
| `img/post-1.jpg` … `img/post-6.jpg` | Blog cards |

**Enlaces externos (no son archivos del repo; requieren red en el cliente):**

- `https://fonts.googleapis.com/css?family=Poppins:...`
- `https://www.youtube.com/watch?v=...` (lightbox en sección video del resume)

### CSS (transitivas)

| Origen | Dependencia |
|--------|-------------|
| `css/ionicons.min.css` | `../fonts/ionicons.eot`, `.woff2`, `.woff`, `.ttf`, `.svg` (misma familia, el navegador usa el formato que soporte) |
| `css/main.css` | `../img/video.jpg` (fondo del bloque video en resume) |

**`css/jquery.mb.YTPlayer.min.css` (crítico para riesgos):**

- Declara `@font-face` con, entre otros, `url(font/ytp-regular.eot)` y `url(font/ytp-regular.ttf)` — rutas relativas al fichero CSS ⇒ **`css/font/ytp-regular.eot`**, **`css/font/ytp-regular.ttf`**.
- Incluye también un `data:` WOFF embebido; muchos navegadores no pedirán `.eot`/`.ttf`, pero el CSS **sigue declarando** esas URLs.
- Referencias a **`images/raster.png`**, **`images/raster@2x.png`**, **`images/raster_dot.png`**, **`images/raster_dot@2x.png`** ⇒ bajo `css/` serían **`css/images/...`**.

En el árbol actual del proyecto **no aparecen** las carpetas `css/font/` ni `css/images/` ni esos ficheros: son **referencias potencialmente rotas** (404 en red si el navegador o el plugin las solicitan). No impiden necesariamente el arranque del reproductor si solo se usa el WOFF inline, pero deben figurar como riesgo de publicación.

### JS (`main.js`)

| Recurso / API | Condición de uso |
|---------------|------------------|
| `lity` | Delegación global `[data-lightbox]` |
| `animatedModal` | `.navbar .nav-link[href^="#"]` |
| `tns` (Tiny Slider) | Existe `#about .testimonials-section` |
| Barras de skills | Existe `#resume .skills-section` |
| `imagesLoaded` + `isotope` | Existe `#portfolio .portfolio-section` |
| `$('#homeVideo').YTPlayer()` | Solo si `.home-area` tiene clase **`video-variant`** (cumple en **`video.html`**, no en **`index.html`**) |

No hay rutas a archivos locales en `main.js` (solo selectores y URLs externas ya puestas en HTML).

### Fuentes

- **Ionicon:** `fonts/ionicons.{eot,svg,ttf,woff,woff2}` vía `ionicons.min.css`.
- **Poppins:** remoto (Google Fonts).
- **ytpregular (YTPlayer):** mezcla de `data:` en CSS y rutas `font/ytp-regular.*` (véase riesgo arriba).

### Iconos / favicons

- Iconos de interfaz: clase Ionicons + fuentes anteriores.
- Favicons: tres PNG bajo `img/favicons/`.

### Terceros (red)

- Google Fonts (stylesheet y, en cascada, archivos de fuente en dominios de Google).
- YouTube (iframe / API cargada por `jquery.mb.YTPlayer` cuando se inicializa; lightbox con URL YouTube en HTML).

---

## Conjunto mínimo indispensable para publicar

Para que **`index.html` y `video.html`** carguen sin 404 en recursos **referenciados por el HTML y la cadena CSS directa**, el remoto debe incluir al menos:

**Raíz**

- `index.html`
- `video.html`

**`css/`**

- `bootstrap-custom.css`
- `ionicons.min.css`
- `tiny-slider.css`
- `lity.min.css`
- `simplebar.min.css`
- `jquery.mb.YTPlayer.min.css`
- `main.css`
- `custom.css`
- `colors/main-darkgreen.css`

**`js/`**

- `jquery.min.js`
- `bootstrap.bundle.min.js`
- `imagesloaded.pkgd.min.js`
- `isotope.pkgd.min.js`
- `animatedModal.js`
- `tiny-slider.js`
- `lity.min.js`
- `simplebar.min.js`
- `jquery.mb.YTPlayer.min.js`
- `main.js`
- `custom.js`

**`fonts/`**

- `ionicons.eot`
- `ionicons.svg`
- `ionicons.ttf`
- `ionicons.woff`
- `ionicons.woff2`

**`img/`** (todos los que el HTML y `main.css` piden)

- `favicons/apple-touch-icon.png`
- `favicons/favicon-32x32.png`
- `favicons/favicon-16x16.png`
- `img-kitzu-logo.png`
- `home.jpg`
- `info-img.jpg`
- `client-1.jpg`, `client-2.jpg`, `client-3.jpg`
- `item-1.jpg` … `item-6.jpg`
- `post-1.jpg` … `post-6.jpg`
- `video.jpg`

**`php/`** — **no forma parte del despliegue funcional en GitHub Pages** (PHP no se ejecuta). No incluirlo en el “mínimo” por necesidad del sitio estático; solo por decisión de mantenerlo en el repo como archivo muerto.

**Total aproximado:** 2 HTML + 9 CSS (incl. 1 color) + 11 JS + 5 fuentes Ionicon + 22 imágenes bajo `img/` = **49 archivos** en rutas enumeradas (más carpeta `docs/` si se desea documentación en el repositorio, ver opcionales).

---

## Archivos opcionales

| Qué | Motivo |
|-----|--------|
| `docs/*.md` (`arquitectura-base.md`, este archivo, etc.) | No referenciados por el HTML; útiles para el repo y el equipo, no para el render del sitio en el navegador. |
| `README` u otros metadatos de proyecto | Misma lógica. |
| Publicar **solo** `index.html` | Reduciría páginas, pero **no** el conjunto de CSS/JS/imagenes mientras el HTML siga enlazando los mismos assets (salvo una meta futura que recorte scripts). |

---

## Archivos no usados o prescindibles en la versión actual

| Grupo | Detalle |
|-------|---------|
| `css/colors/main-*.css` (todos **excepto** `main-darkgreen.css`) | No enlazados por el HTML actual. Solo hacen falta si se cambia el `<link id="color-scheme">`. |
| `php/contact.php` | Fuera del flujo funcional tras contacto estático; GitHub Pages no lo ejecuta. |
| Assets declarados **solo** dentro de `jquery.mb.YTPlayer.min.css` bajo `css/font/*` y `css/images/*` | **No están** en el árbol auditado; no son “extra a subir”, son **ausencias** frente al CSS del vendor. Opciones futuras: aceptar 404 ocasionales, añadir los ficheros del paquete original del plugin, o recortar CSS/HTML en una meta dedicada (fuera del alcance de esta auditoría). |

---

## Riesgos detectados

1. **Assets sin versionar en remoto:** cualquier entrada de la lista “mínimo indispensable” que no esté en el commit publicado provoca **404** y secciones rotas (imágenes, fuentes, JS/CSS).
2. **Referencias en `jquery.mb.YTPlayer.min.css`:** rutas a `css/font/ytp-regular.eot`, `css/font/ytp-regular.ttf` y `css/images/raster*.png` **no presentes** en el proyecto local auditado → **posibles 404** en Network; el video de fondo en `video.html` puede seguir funcionando parcialmente gracias al WOFF en `data:`.
3. **Google Fonts y YouTube:** si el visitante no tiene red o bloquea dominios, tipografía o video/lightbox degradan; no es fallo de archivos del repo.
4. **HTML idéntico en scripts:** `index.html` carga `jquery.mb.YTPlayer.min.js` y su CSS aunque **no** inicialice el player (no hay `video-variant` en el hero de `index.html`) → peso extra; sigue siendo **indispensable** mientras esas etiquetas existan.
5. **Discrepancia `index.html` vs `video.html`:** solo `video.html` incluye `video-variant`, `#homeVideo` y datos del reproductor; el resto de dependencias es compartido.
6. **Ancla `#home-area` en navbar:** sigue sin coincidir con `id="home"` en el hero (riesgo de UX, no de asset faltante); citado solo como coherencia de publicación.
7. **Sitio en subruta** (`/nombre-repo/`): las rutas relativas actuales funcionan respecto al HTML; si en el futuro se usan rutas absolutas incorrectas, habría que ajustar base (fuera de esta meta).

---

## Siguiente paso prudente

**Versionar en el siguiente commit únicamente** el conjunto listado en [Conjunto mínimo indispensable para publicar](#conjunto-mínimo-indispensable-para-publicar), verificando con la pestaña Network (o build de Pages) que no queden 404 en CSS, JS, fuentes Ionicon e imágenes listadas. Opcionalmente añadir `docs/` para trazabilidad del repositorio.

No es necesario subir el resto de esquemas de color ni `php/` para que la versión actual del sitio sea **íntegra** en estático.

---

## Metadatos

| Campo | Valor |
|-------|--------|
| Alcance | Solo auditoría de referencias; sin cambios de código ni limpieza de repo |
| Fecha | 2026-03-28 |
