# Meta 042 — Enriquecimiento estratégico del bloque Proyectos

## 1. Objetivo del enriquecimiento

Fortalecer las tres tarjetas existentes para que comuniquen con mayor claridad **contexto, intervención e impacto**, con tono ejecutivo-técnico-institucional, alta densidad informativa y brevedad compatible con el layout, sin nuevas tarjetas ni cambio de imágenes ni estructura del bloque.

## 2. Archivos revisados

- `index.html` (sección `#proyectos`, lightbox Proyectos)
- `video.html` (misma sección)

## 3. Criterio editorial aplicado

- Microestructura **implícita** en cada párrafo: diagnóstico o encargo → actuación coordinada o diseño de solución → resultado o valor institucional.
- **Tarjeta 1:** conducción y transformación (procedimientos, ágil, red, parque, capacitación; frentes técnicos; habilitación de líneas de alto impacto; cifras ya autorizadas al cierre).
- **Tarjeta 2:** arquitectura, trazabilidad, reglas de negocio en el tiempo, presupuesto y proyección; liderazgo explícito; cifra 300 mil donde aporta.
- **Tarjeta 3:** diversidad de verticales y transversalidad; evolución rol técnico → dirección; salud pública con visibilidad **discreta** según base factual.
- Sin lenguaje comercial; sin duplicar el discurso de Trayectoria (aquí el foco es **caso/proyecto**, no cronología de cargos).
- **Microdatos opcionales:** no se añadió un segundo párrafo por tarjeta; las frases tipo «Procedimientos, red, seguridad…» se **integraron** en la narrativa y en las **etiquetas** (`content-more`) para no alargar el bloque ni exigir CSS nuevo.

## 4. Estado anterior resumido por tarjeta

| Tarjeta | Micro sección | Etiqueta | Resumen |
|---------|---------------|----------|---------|
| 1 | Casos de implementación y alcance cuantificable | Estrategia, infraestructura e interoperabilidad | Mandato + 210 mil / 900 dispositivos |
| 2 | (misma micro) | Arquitectura de solución institucional | Arquitectura + 300 mil |
| 3 | (misma micro) | Control, automatización y operación | Implementación verticalizada + salud |

## 5. Estado nuevo por tarjeta

| Tarjeta | Micro sección | Etiqueta (`content-more`) | Título (`content-title`) | Resumen |
|---------|---------------|---------------------------|--------------------------|---------|
| 1 | Conducción de mandato, arquitectura de solución e implementación transversal | Gobierno tecnológico, continuidad y escalamiento | Dirección tecnológica institucional | Transformación (procedimientos, ágil, equipos, red, parque, ofimática y seguridad) + coordinación transversal + impacto e habilitación de líneas (credencialización, nómina, control de personal, reconocimiento facial, portal, agendas, ventanillas, servicio social, etc.) + 210 mil / 900 |
| 2 | (misma micro) | Arquitectura de solución y control de personal | Sistema de Puestos y Plazas | Liderazgo en arquitectura; control, histórico, reglas, techos y proyecciones; trazabilidad y presupuesto; reglas en el tiempo y normativa; valor estratégico + 300 mil |
| 3 | (misma micro) | Automatización institucional en contextos diversos | Plataformas administrativas, académicas y operativas | Transversal con ejemplos (servicio social, residencias, hospitalario, exámenes, congresos, constancias, almacén); automatización, digitalización, usuarios, control; evolución programación → dirección; salud pública integrada de forma discreta |

## 6. Diferenciación narrativa lograda

- **Tarjeta 1** queda anclada en **mandato y transformación institucional** (gobierno tecnológico, continuidad, escalamiento de capacidades y cartera de iniciativas habilitadas).
- **Tarjeta 2** queda anclada en **diseño de solución de gran escala** con énfasis en control, trazabilidad y rigor presupuestal/regulatorio.
- **Tarjeta 3** queda anclada en **implementación en múltiples contextos** y versatilidad operativa, con progresión de rol y tratamiento sobrio del componente salud.

## 7. Elementos no tocados y por qué

- **Imágenes (archivos), CSS, JS:** no requeridos; la extensión del texto cabe en el modelo actual.
- **Otras secciones del sitio:** fuera de alcance.
- **Número de tarjetas:** fijado en tres por brief.
- **Segundo párrafo / microdato aislado:** omitido para mantener equilibrio visual y evitar saturación; la función del microdato se cubre con **etiqueta + cuerpo único denso**.

## 8. Archivos modificados

- `index.html`
- `video.html`
- `docs/proyectos-enriquecimiento-estrategico.md` (este documento)

## 9. Estado final del bloque Proyectos

El bloque comunica tres **tipos de valor** complementarios (conducción institucional, arquitectura de control a escala, despliegue transversal) con sustento factual y cifras solo donde ya estaban autorizadas. La estructura de tres tarjetas **satisface** la narrativa estratégica sin exigir una cuarta tarjeta; una expansión futura solo tendría sentido si apareciera un **cuarto arquetipo de caso** claramente distinto y no redundante con estos tres.
