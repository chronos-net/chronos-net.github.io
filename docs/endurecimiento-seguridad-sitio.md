# Meta 039 — Endurecimiento base de seguridad del sitio estático (GitHub Pages)

## 1. Objetivo del endurecimiento

Reducir la superficie de exposición del navegador y reforzar la publicación con medidas compatibles con un sitio **estático** en **GitHub Pages**: política de seguridad de contenidos (CSP) y referrer en el documento, auditoría de dependencias externas, limpieza mínima de JavaScript huérfano, y nota sobria en el README. No se pretende un blindaje total ni sustituir cabeceras HTTP configurables solo en el servidor.

## 2. Archivos revisados

- `index.html`
- `video.html`
- `README.md`
- `js/main.js`
- `js/custom.js`
- Referencias externas en HTML (fuentes, YouTube)
- CSS/JS del proyecto (sin modificar CSS; sin dependencias nuevas)

## 3. Medidas aplicadas

- Inclusión de **`Content-Security-Policy`** mediante `<meta http-equiv="Content-Security-Policy">` en ambas páginas, con política **diferenciada**: más estricta en `index.html` (sin iframes de terceros) y ampliada en `video.html` para el reproductor de YouTube y recursos asociados.
- Inclusión de **`<meta name="referrer" content="strict-origin-when-cross-origin">`** en ambas páginas.
- Eliminación en `main.js` de reglas **`responsiveColumns`** que apuntaban a secciones **`.pricing-section`** y **`#blog`** inexistentes en el HTML actual (menos código ejecutado, mismo comportamiento visible).
- Ampliación breve del **README** con HTTPS, CSP/referrer y revisión previa al deploy.

## 4. CSP implementada

### `index.html` (sin video de fondo)

```
default-src 'self';
base-uri 'self';
object-src 'none';
img-src 'self' data:;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
script-src 'self' 'unsafe-inline';
font-src 'self' data: https://fonts.gstatic.com;
connect-src 'self';
form-action 'self';
frame-src 'none';
upgrade-insecure-requests
```

**Relajaciones respecto a la plantilla base autorizada:**

- **`style-src`:** `https://fonts.googleapis.com` — hoja de estilos de Google Fonts enlazada en `<head>`.
- **`font-src`:** `https://fonts.gstatic.com` — archivos de fuente servidos por Google.
- **`frame-src 'none'`** — no hay iframes de terceros en esta variante; reduce riesgo de contenido incrustado no previsto.

### `video.html` (inicio con YouTube / mb.YTPlayer)

```
default-src 'self';
base-uri 'self';
object-src 'none';
img-src 'self' data: https://i.ytimg.com;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
script-src 'self' 'unsafe-inline' https://www.youtube.com https://s.ytimg.com;
font-src 'self' data: https://fonts.gstatic.com;
connect-src 'self' https://www.youtube.com;
frame-src https://www.youtube.com https://www.youtube-nocookie.com;
form-action 'self';
upgrade-insecure-requests
```

**Relajaciones adicionales para YouTube:**

- **`script-src`:** `https://www.youtube.com`, `https://s.ytimg.com` — API en iframe y scripts auxiliares usados por el flujo del reproductor.
- **`frame-src`:** orígenes de embed de YouTube.
- **`img-src`:** `https://i.ytimg.com` — miniaturas u otros recursos gráficos que el flujo puede solicitar al documento principal.
- **`connect-src`:** `https://www.youtube.com` — peticiones desde el contexto de la página al dominio de YouTube (p. ej. inicialización/API).

Se mantiene **`'unsafe-inline'`** en `script-src` y `style-src` porque el sitio y las librerías actuales dependen de estilos y patrones inline heredados; eliminarlo exigiría nonces/hashes en una meta aparte.

## 5. Política de referrer implementada

- **`strict-origin-when-cross-origin`** en `index.html` y `video.html`: al ir a otro origen se envía origen completo solo en HTTPS→HTTPS; se reduce filtrado de path/query en referencias cruzadas.

## 6. Recursos externos detectados

| Recurso | Ubicación | ¿Esencial? | Tratamiento |
|---------|-----------|------------|-------------|
| Google Fonts (CSS + WOFF2) | `<link>` en ambos HTML | Sí para la tipografía actual | **Excepción documentada** en CSP (`fonts.googleapis.com`, `fonts.gstatic.com`) |
| YouTube (`youtu.be` + mb.YTPlayer) | `video.html` + `js/main.js` condicional | Sí para la variante con video | **Excepciones** en CSP solo en `video.html` |
| Stack Overflow (URL en comentario) | `js/main.js` | No ejecuta nada | Solo comentario; sin impacto en runtime |

No hay scripts ni hojas de estilo cargados desde CDN distintos a los anteriores en el HTML revisado.

## 7. Ajustes de superficie o dependencias

- **Google Fonts:** no retirados (evitar rediseño y descarga local de Poppins en esta meta).
- **`main.js`:** eliminadas dos entradas de `responsiveColumns` sin secciones correspondientes en el DOM (`pricing`, `blog`).
- **`custom.js`:** sin cambios (solo hooks vacíos).
- **CSS:** sin cambios.

## 8. Limitaciones por GitHub Pages

- Las **cabeceras HTTP** (`Content-Security-Policy`, `Strict-Transport-Security`, etc.) **no se configuran** desde este repositorio en el modelo estándar de Pages; la CSP aquí es vía **meta**, que no cubre igual que encabezado del servidor (p. ej. **`frame-ancestors`** no es fiable/válido en meta según especificación; no se usó).
- **Reportes CSP** (`report-uri` / `report-to`) quedan para un hosting o proxy que permita recoger informes.
- La efectividad frente a **XSS** sigue limitada mientras exista **`'unsafe-inline'`** en scripts; endurecerlo implica refactor con nonces y posible ajuste de plantillas.

## 9. Pendientes o mejoras futuras

- Valorar **autohospedaje de Poppins** (WOFF2 + `@font-face`) para reducir `connect`/`font`/`style` a terceros.
- Si el reproductor de YouTube reporta bloqueos en consola, ampliar **`connect-src`** de forma acotada (p. ej. dominios adicionales que el API exija) y documentar el motivo.
- Configurar **cabeceras HTTP** delante de Pages (Cloudflare, Fastly, otro reverse proxy) para CSP estricta, HSTS y `frame-ancestors`.
- Sustituir **`'unsafe-inline'`** en `script-src` por **nonces** si se unifica la generación con el build estático.

## 10. Archivos modificados

- `index.html`
- `video.html`
- `js/main.js`
- `README.md`
- `docs/endurecimiento-seguridad-sitio.md` (este documento)

## 11. Estado final de endurecimiento base

El sitio cuenta con **CSP y referrer documentados y alineados al código real**, con **menos código JS** orientado a secciones inexistentes. La variante **index** evita iframes de terceros; la variante **video** acepta solo los orígenes necesarios para YouTube y las fuentes. El endurecimiento es **base y realista**, no teatral: conviene validar en navegador la consola de `video.html` tras el despliegue y ajustar excepciones solo si aparecen denegaciones legítimas documentadas.
