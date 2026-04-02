# Meta 044 — Ampliación estructurada del bloque Proyectos con portafolio por líneas

## 1. Objetivo de la ampliación

Conservar las **tres tarjetas estratégicas** con imágenes como capa principal y añadir, en la misma sección **Proyectos e iniciativas**, un **subbloque textual** ordenado por **tres líneas temáticas**, con **nombre + descripción breve** por iniciativa, sin convertir la vista en un catálogo comercial ni en un muro ilegible.

## 2. Archivos revisados

- `index.html`
- `video.html`
- `css/custom.css` (estilos mínimos para jerarquía y separación visual)

## 3. Criterio estructural aplicado

- El **grid de tarjetas con imagen** permanece en `portfolio-section` + `portfolio-grid`; el portafolio ampliado queda **fuera** de `portfolio-grid` para no interferir con **Isotope** ni con el layout de tres columnas de las tarjetas.
- El subbloque usa `section-heading` reutilizado (micro + `h3` con clase propia) y tres contenedores `portfolio-expanded-line`, cada uno con un `h4` de línea y bloques `portfolio-expanded-item` (nombre + descripción).
- Sin tablas, sin nuevos sliders ni JavaScript.

## 4. Estructura final del bloque

1. **Cabecera de página** (sin cambios): título «Proyectos e iniciativas» y micro ya existentes.
2. **Capa principal:** `portfolio-section` con las **3 tarjetas** (imagen + etiqueta + título + `project-card-summary`) **intactas**.
3. **Separación visual:** borde superior y margen vía CSS en `#proyectos .portfolio-expanded-section`.
4. **Capa complementaria:** `portfolio-expanded-section` con:
   - micro de subbloque (`section-description`);
   - título `h3` «Portafolio ampliado de proyectos»;
   - tres grupos temáticos con iniciativas en formato nombre + párrafo breve.

## 5. Líneas temáticas incorporadas

| Línea | Encabezado en página |
|-------|----------------------|
| 1 | Línea 1 — Dirección y transformación institucional |
| 2 | Línea 2 — Sistemas de gestión y control |
| 3 | Línea 3 — Soluciones académicas y operativas |

## 6. Proyectos agregados por línea

- **Línea 1:** Dirección tecnológica institucional; Credencialización; Reconocimiento facial escalable; Portal de servidores públicos para trámites (**4** ítems).
- **Línea 2:** Sistema de Puestos y Plazas; Históricos de movimientos; Portal de empleo; Sistema de permanencia en el servicio; Reportería nominal y estadísticos (**5** ítems).
- **Línea 3:** Servicio social y residencias; Exámenes en línea; Congresos; Constancias (**4** ítems).

**Total: 13** iniciativas en el portafolio ampliado, con textos según la base editorial autorizada.

## 7. Elementos no tocados y por qué

- **Las tres tarjetas estratégicas:** imágenes, HTML y resúmenes largos **sin modificación**.
- **`js/main.js`:** el selector de Isotope actúa solo sobre `#proyectos .portfolio-section .portfolio-grid`; el nuevo bloque no forma parte de esa rejilla → **no requiere cambios**.
- **Perfil, Trayectoria, Testimonios, Contacto** y demás lightboxes: **sin cambios**.

## 8. Archivos modificados

- `index.html`
- `video.html`
- `css/custom.css`
- `docs/proyectos-portafolio-ampliado.md` (este documento)

## 9. Estado final del bloque Proyectos

La sección mantiene el **mensaje ejecutivo** en las tres tarjetas y ofrece debajo un **inventario estructurado por líneas** para amplitud profesional. Los estilos en `custom.css` limitan el acento de color a los títulos de línea, tipografía coherente con los resúmenes de tarjeta y separación clara entre capas. Si en un despliegue real el scroll del lightbox se percibe muy largo, una **meta posterior** podría valorar acordeones por línea (solo si se prioriza compactación sin perder sobriedad).
