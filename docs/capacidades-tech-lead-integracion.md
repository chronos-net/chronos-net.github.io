# Capacidades — integración premium Tech Lead, ciberseguridad y stack (Meta 047)

## 1. Objetivo de la integración

Incorporar (y refinar) la pestaña **Capacidades** antes de **Contacto** con posicionamiento **Tech Lead**, cuatro pilares editoriales (incluida **ciberseguridad y control operativo**), una franja de **ámbitos de actuación**, un **stack tecnológico y prácticas actuales** en seis grupos (incluido **Seguridad y control**) y un cierre breve **Prácticas actuales de ingeniería**, todo con presentación jerárquica y premium, sin texto plano ni listado tipo CV.

## 2. Archivos revisados

- `index.html`
- `video.html`
- `css/custom.css`
- `js/main.js` (sin cambios: enlaces `#` del menú enlazan lightboxes existentes)

## 3. Criterio estructural, editorial y visual aplicado

- **Estructura:** encabezado con subtítulo + título + línea de posicionamiento Tech Lead; fila de **cuatro tarjetas** (`col-md-6` / `col-lg-3`); **franja** con cuatro cápsulas de posicionamiento; **tercera capa** con título *Stack tecnológico y prácticas actuales* y paneles con chips; **bloque final** con título y cuatro chips con énfasis visual.
- **Editorial:** subtítulo con dimensión de **seguridad**; cuarto pilar dedicado a **ciberseguridad** con tono institucional; grupo 6 **Seguridad y control** con ítems autorizados; grupo 5 sin duplicar “Gestión de riesgos tecnológicos” (ubicado en grupo 6).
- **Visual:** tarjetas sobrias para pilares; franja con **píldoras** discretas con acento verde; módulos de stack con chips; chips de cierre con clase de **énfasis** (borde y fondo con acento `--custom`).

## 4. Estructura final del bloque

- Menú: `Capacidades` → `#capacidades` antes de `Contacto`.
- `section-heading`: `section-description`, `h2` Capacidades y stack tecnológico, `animated-bar`, `p.capacities-position-line`.
- `capacities-section`: `capacities-pillars-row` (4× `capacities-pillar`) → `capacities-pos-strip` → `capacities-stack-wrap` (6 grupos) → `capacities-practices-final`.

## 5. Texto final del encabezado, subtítulo y línea de posicionamiento

- **Subtítulo:** Dirección técnica, arquitectura, desarrollo, infraestructura y seguridad con experiencia en tecnologías y prácticas actuales  
- **Título:** Capacidades y stack tecnológico  
- **Línea de posicionamiento:** Tech Lead con enfoque en dirección técnica, arquitectura, operación, seguridad e integración institucional  

## 6. Texto final de los 4 bloques de capacidades

1. **Dirección técnica y coordinación** — Conducción de equipos, definición de prioridades, alineación entre operación, desarrollo, infraestructura y objetivos institucionales.  
2. **Arquitectura, desarrollo e integración** — Diseño de soluciones, estructuración de sistemas, integración de componentes y construcción de plataformas orientadas a control, automatización y operación institucional.  
3. **Infraestructura, seguridad y continuidad** — Administración de infraestructura crítica, fortalecimiento de seguridad, continuidad operativa e interoperabilidad para sostener servicios y plataformas de alto impacto.  
4. **Ciberseguridad y control operativo** — Auditoría técnica, elaboración de procedimientos, revisión de vulnerabilidades, análisis forense, fortalecimiento de controles y medidas de continuidad para reducir riesgo operativo y elevar la madurez de seguridad en entornos institucionales.  

**Franja de ámbitos (cápsulas):** Dirección técnica · Arquitectura de soluciones · Operación e integración · Seguridad y control  

## 7. Estructura final del stack tecnológico y prácticas actuales

| Grupo | Contenido |
|--------|-----------|
| Backend y motores de vista | PHP, Laravel, Java, Spring Boot, Python, C, FoxPro, Blade, Thymeleaf |
| Frontend | JavaScript, TypeScript, jQuery, Angular, React, Vue, Bootstrap, CSS |
| Bases de datos | MySQL, PostgreSQL, SQL Server, Oracle |
| Infraestructura y operación | Windows, Linux, Servidores, Redes, Despliegue, Continuidad operativa |
| Gestión, colaboración y prácticas de ingeniería | Scrum, ITIL, Jira, GitHub, Programación con IA, Revisión de código, Gobierno digital, Normatividad, Interoperabilidad institucional |
| Seguridad y control | Ciberseguridad, Auditorías técnicas, Elaboración de procedimientos, Búsqueda de vulnerabilidades, Informática forense, Gestión de riesgos tecnológicos |

**Prácticas actuales de ingeniería (énfasis visual):** Programación con IA · Revisión de código · Jira · GitHub  

## 8. Ajustes visuales aplicados para evitar texto plano

- Tarjetas con borde, fondo y `border-radius` para los cuatro pilares; `align-items-stretch` y altura uniforme por columna.
- Franja con lista flex centrada y **cápsulas** (`capacities-pos-pill`) con borde acentuado discreto.
- Stack en **paneles** con chips; sexto grupo para seguridad institucional.
- Bloque final separado por borde superior; chips **énfasis** para las cuatro prácticas actuales sin duplicar iconografía ni porcentajes.

## 9. Elementos no tocados y por qué

- **Perfil, Trayectoria, Proyectos, Servicios profesionales, Especialización profesional y Contacto:** contenido no modificado; Capacidades complementa el discurso sin sustituir esas secciones.
- **`js/main.js`:** sin cambios.

## 10. Archivos modificados

- `index.html` — bloque Capacidades ampliado (4 pilares, franja, 6 grupos de stack, bloque final).
- `video.html` — paridad con `index.html`.
- `css/custom.css` — estilos para línea de posicionamiento, tarjetas, franja, énfasis de chips y bloque final.
- `docs/capacidades-tech-lead-integracion.md` — este documento.

## 11. Estado final del posicionamiento del bloque dentro del sitio

La pestaña **Capacidades** permanece **antes de Contacto**. El bloque comunica **Tech Lead**, **ciberseguridad** de forma explícita y un **stack y prácticas** actuales articulados en capas (tarjetas → franja → paneles con chips → cierre con énfasis), con lectura más profesional y atractiva que un párrafo o lista plana.
