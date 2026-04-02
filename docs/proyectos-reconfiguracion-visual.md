# Proyectos — reconfiguración visual del portafolio ampliado (Meta 046)

## 1. Objetivo de la reconfiguración

Sustituir la presentación plana del subbloque «Portafolio ampliado de proyectos» por una segunda capa visualmente ordenada, escaneable y con tono ejecutivo, sin reescribir el contenido ya aprobado y sin alterar las tres tarjetas estratégicas superiores ni sus imágenes.

## 2. Archivos revisados

- `index.html`
- `video.html`
- `css/custom.css`
- `js/main.js` (revisión: no fue necesario modificarlo)

## 3. Problema visual detectado

Las tres líneas temáticas y sus proyectos se mostraban como un listado continuo con encabezados de línea poco diferenciados del cuerpo, lo que reducía la jerarquía respecto a la capa estratégica (tarjetas) y daba sensación de texto documental más que de portafolio institucional navegable.

## 4. Estructura nueva aplicada

- Contenedor `portfolio-expanded-panels` con `role="region"` y etiqueta accesible.
- Cada línea temática es un `<details class="portfolio-expanded-panel" open>` con `<summary class="portfolio-expanded-panel-summary">` (mismos títulos de línea que antes).
- El cuerpo de cada línea va en `portfolio-expanded-panel-body`, con los mismos `portfolio-expanded-item` (nombre + descripción) que en la versión anterior.
- Los tres paneles inician abiertos (`open`) para lectura rápida; el usuario puede colapsar/expandir cada línea sin JavaScript adicional.

## 5. Criterio visual utilizado

- Acordeón nativo (`details`/`summary`): sobrio, sin animaciones recargadas; solo rotación discreta del indicador.
- Paneles con borde sutil, fondo ligeramente elevado sobre el fondo oscuro y acento en el borde izquierdo del título (coherente con `--custom`).
- Separación clara entre proyectos mediante líneas divisorias dentro del cuerpo del panel.
- Espaciado y área mínima de toque en el resumen para uso en móvil.
- `focus-visible` en el `summary` para teclado.

## 6. Archivos modificados

- `index.html` — sustitución del bloque plano por la estructura de paneles/acordeón en el lightbox Proyectos.
- `video.html` — misma estructura que `index.html` para mantener paridad.
- `css/custom.css` — estilos para `portfolio-expanded-panels`, panel, summary y cuerpo; sustitución de reglas antiguas de `.portfolio-expanded-line` / `.portfolio-expanded-line-heading`.

## 7. Estado final del bloque Proyectos

- Las tres tarjetas estratégicas y su grid permanecen intactas.
- El portafolio ampliado deja de leerse como párrafo/lista plana y pasa a organizarse en tres bloques visuales claramente delimitados, alineados con las líneas temáticas autorizadas, con navegación colapsable opcional y sin dependencia de `main.js`.
