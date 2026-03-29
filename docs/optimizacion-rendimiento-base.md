# Meta 041 — Optimización base de rendimiento del sitio estático

## 1. Objetivo de la optimización

Reducir el coste de red y mejorar la estabilidad visual del primer pintado y de las secciones diferidas, sin rediseñar el sitio ni alterar el contenido editorial: lazy loading selectivo, dimensiones intrínsecas, pistas de recurso crítico para el hero y fuentes, y eliminación mínima de código JS muerto.

## 2. Archivos revisados

- `index.html`
- `video.html`
- `js/main.js`
- `js/custom.js`
- `README.md`
- `css/main.css` (solo como referencia para dimensiones coherentes con el layout)
- `img/proyectos-*.svg` (viewBox / width / height del SVG)

## 3. Imágenes optimizadas

| Recurso | Rol | `loading` | `decoding` | `width` × `height` |
|---------|-----|-----------|------------|-------------------|
| `img/home.jpg` | Fondo del hero (`background-image` en `#home`) | — (no es `<img>`) | — | **Preload** en `<head>` (ver §5) |
| `img/info-img.jpg` | Foto de perfil (lightbox Perfil) | `lazy` | `async` | 430 × 430 (coherente con ancho máximo en CSS y recortes `object-fit`) |
| `img/client-1/2/3.jpg` | Avatares testimonios | `lazy` | `async` | 54 × 54 (ancho definido en `.client-avatar`) |
| `img/proyectos-*.svg` | Ilustraciones tarjetas Proyectos | `lazy` | `async` | 1200 × 800 (dimensiones del `viewBox` del SVG) |

**Criterio:** Ningún `<img>` del documento forma parte del primer viewport visible al cargar (el hero usa solo CSS background); por tanto **no** se aplicó `loading="lazy"` a recursos críticos de primera pantalla vía `<img>`.

## 4. Ajustes de estabilidad visual

- Los atributos **`width` y `height`** en `<img>` reservan **relación de aspecto** antes de la decodificación, reduciendo saltos de layout (CLS) cuando el CSS (`img-fluid`, anchos fijos en testimonios, etc.) redimensiona el dibujo final.
- La foto de perfil usa proporción 1:1 intrínseca; el CSS aplica `object-fit: cover` y alturas variables en breakpoints, comportamiento ya previsto en la plantilla.

## 5. Recursos críticos ajustados

- **`preconnect`** a `https://fonts.googleapis.com` y `https://fonts.gstatic.com` (este último con `crossorigin`) — acorta el descubrimiento de la hoja CSS de Google Fonts y de los archivos WOFF2 en `gstatic`, alineado con la CSP existente.
- **`preload` as="image"`** para `img/home.jpg` — prioriza el recurso del **fondo del hero** en ambas páginas (incluida la variante con video, donde el JPG sigue siendo capa de fondo declarada en el markup).

No se añadieron más `preload` (p. ej. CSS o JS) para no competir con el HTML inicial ni duplicar descargas ya encadenadas de forma eficiente.

## 6. Limpieza o ajustes JS aplicados

- **`main.js`:** eliminada la función interna **`takePrev`** del bloque del titular animado (`.cd-headline`), que **no tenía referencias**; el comportamiento del carrusel de palabras no cambia.
- **`custom.js`:** sin cambios — solo contiene *hooks* vacíos; retirar el archivo o el bundle podría afectar convenciones de despliegue; el coste de parseo es despreciable.

**No abordado en esta meta:** en `main.js`, el código de Isotope referencia `.filter-control li` cuando **no hay** filtros en el HTML actual; los manejadores se enlazan a un conjunto vacío. Eliminar ese bloque sería una decisión de producto mayor (por si se reintroducen filtros); queda documentado para una fase posterior.

## 7. Hallazgos documentados para una fase posterior

- **Compresión / formatos:** evaluar peso de `home.jpg`, `info-img.jpg` y JPG de testimonios (WebP/AVIF con fallback, o menor calidad JPEG) tras medir en Lighthouse.
- **Fuentes:** migrar Poppins a **autohospedaje** eliminaría terceros y simplificaría CSP; implica copiar WOFF2 y `@font-face` en CSS.
- **Isotope y filtros:** unificar implementación con el DOM real (quitar listeners de filtro muertos o añadir UI de filtro).
- **`custom.js`:** consolidar o eliminar si el proyecto confirma que no habrá scripts personalizados en ese archivo.
- **Hero solo CSS:** si en el futuro el LCP pasa a ser un `<img>` explícito, valorar `fetchpriority="high"` y ausencia de `lazy` en ese único recurso.

## 8. Archivos modificados

- `index.html`
- `video.html`
- `js/main.js`
- `README.md`
- `docs/optimizacion-rendimiento-base.md` (este documento)

## 9. Estado final de optimización base

Implementadas medidas de **bajo riesgo** alineadas con un sitio estático en GitHub Pages: menos trabajo de red en imágenes fuera de vista inmediata, mejor pista de aspecto para el motor de diseño, conexión temprana a orígenes de fuentes y priorización del fondo del hero. La navegación, lightboxes, testimonios (slider), Proyectos (Isotope) y contacto **no fueron alterados en lógica** salvo la retirada de una función JS no usada. Se recomienda validar en navegador y, si aplica, Lighthouse tras desplegar.
