# Proyectos — Refinamiento visual premium del portafolio institucional ampliado (Meta 050)

## 1. Objetivo del refinamiento

Incrementar la **sensación de profundidad, capas y jerarquía** en el subbloque **Portafolio institucional ampliado** mediante ajustes de CSS sobrios (sombras amplias, gradientes oscuros sutiles, separación y hover discreto en mini-cards), sin alterar contenidos ni la estructura HTML.

## 2. Archivos revisados

- `index.html` (revisión: sin cambios)
- `video.html` (revisión: sin cambios)
- `css/custom.css`

## 3. Problema visual atendido

Tras la estructura en paneles y mini-cards, el bloque podía seguir percibiéndose **algo plano** en el contraste entre contenedor temático, intro y fichas; faltaba **relieve editorial** y **separación óptica** más clara entre capas sin añadir ruido.

## 4. Ajustes visuales aplicados

- **Sección del portafolio ampliado:** borde superior ligeramente más definido; más aire en el encabezado del subbloque (`portfolio-institutional-section .portfolio-expanded-heading`).
- **Contenedor de paneles:** mayor `gap` entre paneles temáticos.
- **Panel temático:** gradiente en tres tonos (luz superior → transición → base oscura), borde y **sombra apilada** (inset superior suave + sombra larga + sombra media), `border-radius` 12px.
- **Título de panel:** gradiente vertical ligero e inset inferior para sensación de **cinta editorial**.
- **Intro del panel:** fondo oscuro semitransparente y tipografía ajustada en interlineado.
- **Cuerpo del panel:** velo oscuro degradado hacia transparente y más padding.
- **Grid:** mayor separación entre columnas (`-8px` / `8px`).
- **Mini-cards:** gradiente de capa, sombra en dos planos + inset, borde superior con acento verde; **transición** suave; **hover** solo con puntero fino (`hover: hover` + `pointer: fine`): leve `translateY(-3px)`, sombra más profunda, borde y acento superior reforzados.
- **`prefers-reduced-motion: reduce`:** se anulan transición y elevación en hover para respetar accesibilidad.

## 5. Criterio de profundidad y jerarquía usado

- **Capas:** de afuera hacia adentro — panel (sombra larga) → cabecella de título → intro → cuerpo con velo → mini-card (sombra corta + acento superior).
- **Sin** perspectiva 3D, neón, animaciones largas ni glassmorphism pesado.
- **Coherencia** con fondo oscuro y acento `--custom` (#009e66) existente.

## 6. Archivos modificados

- `css/custom.css` (solo reglas bajo `#proyectos` relativas al portafolio institucional ampliado y mini-cards).
- `docs/proyectos-refinamiento-visual-premium.md` (este documento).

## 7. Estado final del subbloque

El **Portafolio institucional ampliado** gana **relieve y lectura por planos** manteniendo tono **institucional y premium**; los **Casos emblemáticos** y el resto del sitio no se modificaron.
