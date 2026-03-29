# Portafolio profesional — Christopher Delgadillo Ramírez

Sitio estático de presentación profesional. Despliegue típico: [GitHub Pages](https://pages.github.com/) u otro hosting de archivos estáticos.

## Entradas

- **`index.html`** — versión principal.
- **`video.html`** — misma estructura con variante de inicio que incorpora video de fondo.

## Publicación (GitHub Pages)

- **URL de producción verificada (Meta 040):** [https://chronos-net.github.io/](https://chronos-net.github.io/) — sitio servido en la **raíz** del dominio `*.github.io` (no en subruta `/portafolio/`).
- Si el sitio es **usuario u organización** (`username.github.io`), suele publicarse la rama configurada en *Settings → Pages* con `index.html` en la raíz del directorio publicado.
- Si el sitio vive en un **proyecto** (`username.github.io/repositorio`), las rutas relativas actuales (`css/`, `js/`, `img/`) funcionan siempre que la URL base sea la carpeta del proyecto; si en el futuro se usa subruta distinta, revisar rutas o una meta aparte de *base URL*.

## Recursos

Las rutas de imágenes, fuentes y demás activos referenciados por HTML y CSS deben existir en el repositorio desplegado. Listado orientativo: `docs/dependencias-publicacion.md`.

## Rendimiento (base)

Medidas ligeras en HTML/JS (`loading`, dimensiones intrínsecas, `preconnect`/`preload` acotados): ver `docs/optimizacion-rendimiento-base.md`.

## Seguridad y publicación

- **HTTPS:** GitHub Pages sirve el sitio por HTTPS; conviene forzar siempre enlaces públicos con `https://`.
- **CSP y referrer:** Las páginas HTML incluyen una política base vía `<meta http-equiv="Content-Security-Policy">` y `referrer` estricto; detalle y excepciones en `docs/endurecimiento-seguridad-sitio.md`.
- **Antes de cada deploy:** Revisar que no se añadan scripts o estilos de terceros sin actualizar la CSP; no incluir secretos ni tokens en el repositorio público.
