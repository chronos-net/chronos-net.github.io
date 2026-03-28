# Auditoría del bloque Resume

## Objetivo

Evaluar el lightbox **Resume** (`#resume`) en `index.html` y `video.html` para decidir si conviene **reconvertirlo**, **retirarlo** o **aprovecharlo parcialmente**, en línea con el uso pretendido como **trayectoria profesional** (formación, experiencia, competencias, docencia o certificaciones) y con el estado del resto del sitio.

**Alcance:** inventario de componentes, valoración, recomendación. **Sin cambios de código** en esta meta.

---

## Archivos revisados

| Archivo | Qué se revisó |
|---------|----------------|
| `index.html` | Lightbox `#resume`: encabezado, `.resume-section`, `.skills-section`, `.video-section` |
| `video.html` | Mismo bloque (contenido equivalente) |
| `js/main.js` | Inicialización de barras de habilidades: `ifExists('#resume .skills-section', …)` |
| `css/main.css` | Solo lectura conceptual: `.resume-section`, `.skills-section`, `.video-section`, timeline |

**Paridad:** `index.html` y `video.html` son **idénticos** en el bloque Resume.

---

## Estructura actual del bloque

1. **Encabezado de página** (`section-heading page-heading`): microtexto + título principal del lightbox.
2. **`.resume-section`**: dos columnas en `row`:
   - **`.col-block.education`**: título columna + lista de **`.resume-item`** (título, rango fechas/institución, párrafo).
   - **`.col-block.experience`**: misma estructura para experiencia laboral.
3. **`.skills-section`**: subtítulo de sección + rejilla de **`.single-skill`** con `data-percentage` y barras Bootstrap.
4. **`.video-section`**: dos columnas (texto + lightbox YouTube).

**JS:** `main.js` calcula anchos y porcentajes visibles solo dentro de `#resume .skills-section` al cargar y en `resize`. No hay lógica adicional específica para la timeline.

---

## Inventario de componentes actuales

| Componente | Contenido visible actual | Tipo de estructura | Valoración | Observación |
|------------|----------------------------|--------------------|------------|-------------|
| Encabezado Resume | *Check out my Resume* / *Resume* | Texto intro + `h2` | **Reconvertible** | Inglés genérico; debe pasar a español y alinearse a “Trayectoria” o similar. |
| Columna **Education** | Título *Education*; 3 ítems: Cambridge, Tokyo, Harvard con fechas ficticias y **Lorem** | Timeline vertical | **Reutilizable** (estructura) / **Desechable** (contenido) | El patrón `.resume-item` encaja **formación académica y certificaciones** reales. |
| Ítem Edu 1 | Computer Science — Cambridge 2004–2007 | `.resume-item` | **Desechable** | Contradice el perfil ya declarado en About (ISC, Maestría en SI en México). |
| Ítem Edu 2 | Bachelor — Tokyo 2008–2010 | `.resume-item` | **Desechable** | Demo. |
| Ítem Edu 3 | Master — Harvard 2012–2015 | `.resume-item` | **Desechable** | Demo. |
| Columna **Experience** | Título *Experience*; Adobe, Google, Discord | Dos columnas simétricas | **Reutilizable** (estructura) / **Desechable** (contenido) | Apto para **experiencia institucional y dirección tecnológica** con fechas reales. |
| Ítem Exp 1–3 | Software Engineer / Back-End / UI-UX + Lorem | `.resume-item` | **Desechable** | Marcas y roles de plantilla; no reflejan Subdirector / entorno mexicano institucional. |
| Encabezado **Skills** | *My level…* / *My Skills* | `section-heading` | **Reconvertible** | Tono herramientas freelance; porcentajes son arbitrarios. |
| Barras HTML/CSS, Web Design, JS, React, Express, TS | Porcentajes 80–95 | `.single-skill` + progress | **Reconvertible** o **Desechable** | Útiles si se sustituyen por **competencias** alineadas al CV real; **riesgo ético** de barras “%” sin método (puede percibirse poco profesional en contexto ejecutivo). |
| **Video** “office tour” | Títulos y párrafos Lorem; enlace YouTube | `.video-section` | **Reconvertible** / contenido **Desechable** | La **estructura** sirve para vídeo institucional o charla; el copy actual es demo. |

---

## Evaluación global del bloque

- **Valor estructural:** **alto**. La combinación **educación + experiencia en columnas**, más un bloque de **competencias** y un **bloque multimedia**, es adecuada para una **trayectoria** sin cambiar arquitectura.
- **Valor del contenido actual:** **nulo para credibilidad**. Instituciones y empresas son **ficticias**; descripciones **Lorem**; skills mezclan perfiles (diseño web / stack JS) poco alineados con el posicionamiento ya definido en About/Services.
- **Riesgo de mantener demo:** **alto** (contradicción explícita con datos reales del perfil en otras secciones).
- **Coherencia con “docencia / formación”:** la columna Education puede, en una meta futura, absorber parte de **docencia** o enlazarse a subapartados; no está modelada hoy más allá del título genérico.

---

## Recomendación

**Reconversión total** del **contenido** (encabezados, ítems de timeline, textos de skills, textos y enlace del video), **manteniendo** la **estructura HTML** actual.

**Retiro** de la sección completa **no** se recomienda como primera opción: se desaprovecha un contenedor ya idóneo para trayectoria.  
**Reconversión parcial** (solo una columna o solo skills) **no** se recomienda: dejaría mezcla demo/real y daños de credibilidad.

---

## Justificación técnica

1. **Marcado:** no hay dependencias que impidan sustituir textos, número de `.resume-item` (3 por columna es editable) o etiquetas de skills.
2. **`main.js`:** las barras requieren `#resume .skills-section` y `.single-skill` con `data-percentage`; si se **elimina** el bloque de skills, habría que retirar también el script asociado o aceptar que `ifExists` no ejecute (no hay error). Si se **sustituyen** por otro tipo de listado sin barras, habría que ajustar JS en una meta posterior.
3. **Video:** el lightbox usa el mismo mecanismo `[data-lightbox]` global; solo cambia URL y copy.
4. **i18n:** conviene unificar **español** con About/Services/Testimonios.

---

## Siguiente paso prudente

1. Recopilar **datos verificables**: formación (ISC, maestría, otros), experiencia por cargo/institución/fechas, docencia opcional.
2. Decidir si las **barras porcentuales** se mantienen (con nuevas etiquetas y criterio explícito) o se sustituyen por **lista de competencias** sin porcentaje.
3. Sustituir o **retirar** el subbloque de video hasta tener recurso acorde.
4. Ejecutar una **meta de implementación** de reconversión total de copy en HTML (y ajuste mínimo de JS solo si cambia el modelo de skills).

---

## Metadatos

| Campo | Valor |
|-------|--------|
| Fecha | 2026-03-28 |
| Cambios en código | Ninguno |
