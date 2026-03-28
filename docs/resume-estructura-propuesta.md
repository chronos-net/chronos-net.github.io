# Propuesta de estructura del nuevo Resume

## Objetivo

Fijar, **antes de tocar HTML/CSS/JS**, la **estructura editorial y funcional** definitiva para reconvertir el lightbox `#resume` en una sección **real** de **trayectoria profesional, formación y competencias**, alineada con un perfil que integra liderazgo tecnológico institucional, dirección tecnológica, arquitectura de sistemas, infraestructura y ciberseguridad, gobierno digital, y formación tecnológica y docencia.

La sección **no** será un CV completo pegado: debe ser **escaneable, ejecutiva y sobria**.

---

## Archivos revisados

| Archivo | Uso en esta meta |
|---------|------------------|
| `index.html` | Bloque `#resume`: encabezado, `.resume-section`, `.skills-section`, `.video-section` |
| `video.html` | Paridad con `index.html` en el mismo bloque |
| `docs/resume-auditoria.md` | Cierre de auditoría (reconversión total de contenido; viabilidad técnica de skills y video) |
| `js/main.js` | Bloque “Resume: Skills” (`#resume .skills-section`, `.single-skill`, `data-percentage`, `resize`) — implica que **sustituir barras por otro formato** requiere **eliminar o no invocar** ese script en la meta de implementación |

---

## Estructura actual resumida

Dentro de `lightbox-content`:

1. **Encabezado** (`section-heading page-heading`): microtexto + `h2` “Resume”.
2. **`.resume-section`**: una fila, dos columnas (`col-md-6`):
   - **`.col-block.education`**: título “Education” + tres `.resume-item`.
   - **`.col-block.experience`**: título “Experience” + tres `.resume-item`.
3. **`.skills-section`**: encabezado interno + dos columnas de `.single-skill` con barras y `data-percentage`.
4. **`.video-section`**: texto + miniatura/enlace a YouTube (`media-lightbox`).

---

## Decisiones por subbloque

### Encabezado del lightbox (page-heading)

- **Nombre actual:** microtexto “Check out my Resume” + título “Resume”.
- **Decisión:** **Reconvertir**.
- **Justificación:** Debe reflejar una **síntesis ejecutiva** de trayectoria, en **español**, coherente con About/Services. El identificador técnico `#resume` y el ítem de navegación pueden mantenerse por compatibilidad; el **titular visible** debe hablar de trayectoria o perfil profesional, no de “currículum descargable”.

### `.resume-section` — columna Experience (`.col-block.experience`)

- **Nombre actual:** “Experience” + ítems demo.
- **Decisión:** **Reconvertir** (estructura **conservada**, contenido nuevo).
- **Justificación:** Es el contenedor natural de la **línea de tiempo de trayectoria profesional** institucional (cargos, dependencias, periodos, una o dos líneas de impacto por ítem). Encaja con dirección tecnológica y liderazgo en organizaciones.

### `.resume-section` — columna Education (`.col-block.education`)

- **Nombre actual:** “Education” + ítems demo.
- **Decisión:** **Reconvertir** (estructura **conservada**, contenido nuevo).
- **Justificación:** Mantiene el patrón `.resume-item` para **títulos académicos** verificables (grado, institución, periodo o año, breve nota opcional). La misma columna puede alojar, como ítems adicionales del mismo tipo, **certificaciones** y **docencia** (ver “Decisiones específicas”).

### `.skills-section`

- **Nombre actual:** “My Skills” + barras con porcentajes.
- **Decisión:** **Reconvertir** (sustitución **funcional y editorial** del interior; el **contenedor** de sección puede conservarse para no rediseñar el layout global del lightbox).
- **Justificación:** Los porcentajes no son adecuados para un perfil ejecutivo ni están fundamentados. El bloque debe pasar a **competencias clave** sin gradación numérica, agrupadas por **ámbitos** (p. ej. dirección y gobierno, arquitectura e infraestructura, seguridad, desarrollo organizacional tecnológico). En implementación: nuevo marcado dentro de `.skills-section` (listas, columnas de texto) y **retiro del JS** de barras asociado a `#resume`.

### `.video-section`

- **Nombre actual:** “Take a tour of my office” + Lorem + YouTube demo.
- **Decisión:** **Retirar** (recomendación explícita acordada en el encargo).
- **Justificación:** No aporta al objetivo de síntesis ejecutiva; el contenido es plantilla. Si en el futuro se desea un vídeo institucional, conviene una **meta aparte** y un criterio editorial claro (no reintroducir bloque demo).

---

## Estructura propuesta del nuevo Resume

### Secciones finales y orden recomendado

| Orden | Sección | Propósito | Contenido esperado |
|------|---------|-----------|---------------------|
| 1 | **Encabezado del lightbox** | Contextualizar en una frase + título principal | Microtexto breve (línea) + `h2` alineado a “Trayectoria”, “Trayectoria y formación” o equivalente sobrio |
| 2 | **Fila de dos columnas** (actual `.resume-section`) | Lectura paralela escaneable | Ver columnas A y B abajo |
| 2A (columna izquierda en desktop) | **Trayectoria profesional** | Evidenciar recorrido y responsabilidad | Ítems `.resume-item`: cargo o rol → institución / ámbito → periodo → descripción **muy breve** (1–2 frases: foco en dirección, arquitectura, gobierno digital, seguridad según aplique) |
| 2B (columna derecha) | **Formación académica** (título de columna) | Credenciales formales | Ítems `.resume-item`: grado o programa → institución → periodo o año → opcional: una línea de enfoque |
| 2B (continuación misma columna) | **Docencia y formación** (como ítems bajo la misma columna o subtítulo semántico si el HTML lo permite sin rediseño) | Actividad docente y transferencia | Mismos `.resume-item`: asignatura, programa o modalidad → institución o contexto → periodo |
| 2B (continuación) | **Certificaciones** (ítems adicionales) | Credenciales puntuales | `.resume-item`: nombre de certificación → emisor → año (sin párrafos largos) |
| 3 | **Competencias clave** (contenedor `.skills-section` reutilizado) | Mapa de capacidades sin fingir precisión | Bloque **ancho completo** bajo la fila anterior: grupos temáticos con listas o viñetas; **sin** barras ni `%` |

### Notas de implementación futura (solo referencia)

- El **número** de `.resume-item` por columna es **flexible** (más o menos de tres).
- **Docencia** y **certificaciones** no requieren una tercera columna nueva: integrarlos en la columna de formación mantiene la arquitectura actual y reduce ruido visual.
- Si la densidad de ítems crece mucho, la meta de implementación puede valorar **subtítulos** (`h4`/`h5`) dentro de `.col-block.education` sin cambiar el grid global.

---

## Decisiones específicas

| Tema | Decisión |
|------|----------|
| **Timeline de experiencia** | **Conservar** el modelo de lista vertical `.resume-item` en `.col-block.experience`, renombrando el título de columna a algo como “Trayectoria profesional”. Orden recomendado de ítems: **cronológico inverso** (más reciente arriba) para lectura ejecutiva. |
| **Bloque de formación** | **Conservar** columna `.col-block.education` renombrada a “Formación académica” (o similar). Contenido solo verificable y conciso. |
| **Bloque de competencias** | **Sustituir** el interior de `.skills-section` por **agrupaciones temáticas** (listas). **Sin** porcentajes ni barras. |
| **Docencia** | **Incluir** en la **misma columna** que formación académica, como **ítems adicionales** del mismo tipo estructural (no una sección duplicada en otra columna salvo necesidad editorial extrema). |
| **Certificaciones** | **Incluir** en esa **misma columna**, después de títulos académicos y docencia (o intercaladas por relevancia si son pocas). Formato ítem corto. |
| **Bloque de video** | **Retirar** por completo el `.video-section` del lightbox en `index.html` y `video.html` en la meta de implementación. |
| **Skills con porcentajes** | **No usar**. Eliminar en implementación las barras, `data-percentage` y el bloque JS en `main.js` que solo sirve a `#resume .skills-section`. |

---

## Recomendación editorial

- **Tono:** profesional, institucional, en **tercera persona** o **primera plural** según coherencia con el resto del sitio; evitar jerga de marketing y superlativos.
- **Nivel de detalle:** **síntesis**: cada `.resume-item` debe poder leerse en **10–15 segundos**; descripciones de cuerpo **máximo 1–2 frases** orientadas a alcance y tipo de responsabilidad, no listas de tareas.
- **Criterios de inclusión:** priorizar lo que refuerza **liderazgo tecnológico, dirección, arquitectura, infraestructura, ciberseguridad y gobierno digital**; omitir stack de herramientas tipo CV de desarrollador junior salvo que sea estratégico para el posicionamiento.
- **Coherencia:** no contradecir datos ya presentes en **About** u otras secciones; tratar el lightbox como **ampliación ordenada**, no como otro relato distinto.
- **Idioma:** **español** en titulares y cuerpo del bloque Resume.

---

## Siguiente paso prudente

La **siguiente meta** debe ser la **implementación controlada** del nuevo Resume: actualizar copy y estructura interna en `index.html` y `video.html`, **retirar** `.video-section`, **reemplazar** el marcado de competencias y **ajustar** `js/main.js` para eliminar la lógica de barras asociada a `#resume`, verificando que no queden referencias rotas ni regresiones en otros lightboxes.

---

## Metadatos

| Campo | Valor |
|-------|--------|
| Fecha | 2026-03-28 |
| Cambios de código en esta meta | Ninguno (solo este documento) |
