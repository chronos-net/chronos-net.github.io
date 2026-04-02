# Meta 045 — Corrección de visibilidad del portafolio ampliado en Proyectos

## 1. Objetivo de la corrección

Garantizar que el subbloque **«Portafolio ampliado de proyectos»** sea accesible visualmente dentro del lightbox **Proyectos**, debajo de las tres tarjetas estratégicas, sin reescribir contenidos ni alterar la estructura editorial del portafolio.

## 2. Archivos revisados

- `index.html` — estructura del lightbox `#proyectos`, contenedor `lightbox-content`, bloques `portfolio-section` y `portfolio-expanded-section`
- `video.html` — misma verificación
- `css/custom.css` — reglas `#proyectos` del portafolio ampliado
- `css/main.css` — reglas generales de `.lightbox-wrapper` y scroll (referencia)
- `js/animatedModal.js` — asignación de `overflow-y` al abrir el modal (referencia)
- `js/main.js` — Isotope solo sobre `.portfolio-grid` (confirmación de que no envuelve el portafolio ampliado)

## 3. Diagnóstico real de la causa

1. **Ubicación en el DOM:** El subbloque `portfolio-expanded-section` está **correctamente anidado**: es hijo directo de `.lightbox-content`, **inmediatamente después** de `.portfolio-section` (las tres tarjetas). No quedó fuera del lightbox ni en un contenedor paralelo incorrecto.

2. **Causa probable de la “no visibilidad” percibida:** El lightbox `#proyectos` tenía **`data-simplebar`**, que inicializa **SimpleBar** sobre el wrapper. Con **contenido muy alto** (tres tarjetas con textos largos + portafolio ampliado con muchas entradas), es frecuente que el **área de scroll personalizada** no recalcule bien la altura útil o que el usuario **no distinga** el scroll interno del modal frente al cuerpo de la página, dando la impresión de que “no está” el bloque inferior. Además, **animatedModal** ya fuerza `overflow-y: scroll` en el mismo nodo al abrir, lo que puede **interferir** con el modelo de scroll de SimpleBar.

3. **Descartado:** Isotope actúa solo sobre `#proyectos .portfolio-section .portfolio-grid`; el portafolio ampliado es **hermano** de `portfolio-section`, no hijo del grid, por lo que **Isotope no recorta** ese bloque por layout.

## 4. Corrección aplicada

1. **Eliminación de `data-simplebar` en el lightbox `#proyectos`** en `index.html` y `video.html`, de modo que el desplazamiento sea **nativo** del navegador sobre `#proyectos` (coherente con lo que ya aplica `animatedModal` en `afterOpen`).

2. **CSS mínimo en `custom.css`:**
   - `#proyectos.lightbox-wrapper { overflow-y: auto; -webkit-overflow-scrolling: touch; }` — refuerzo explícito del eje vertical desplazable.
   - `#proyectos .lightbox-content { padding-bottom: 3.5rem; }` — margen inferior para que el último bloque no quede pegado al borde al hacer scroll hasta el final.

No se modificaron los textos del portafolio ampliado ni las tres tarjetas estratégicas. No se añadió JavaScript nuevo.

## 5. Archivos modificados

- `index.html`
- `video.html`
- `css/custom.css`
- `docs/proyectos-correccion-visibilidad.md` (este documento)

## 6. Estado final del bloque Proyectos

Las tres tarjetas con imagen siguen en la capa superior; el **«Portafolio ampliado de proyectos»** permanece debajo dentro del mismo lightbox y debe mostrarse **al desplazar** el contenido del modal. El resto de lightboxes (`#about`, `#resume`, `#contact`) **conservan** `data-simplebar` y su comportamiento previo.

Tras el despliegue, conviene validar en navegador real (escritorio y móvil) que el scroll del modal llega hasta el final del portafolio ampliado.
