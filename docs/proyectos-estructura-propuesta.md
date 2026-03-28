# Meta 026 — Arquitectura editorial y taxonomía del bloque Proyectos

Documento de definición estructural. **Sin implementación.** No sustituye contenido final de tarjetas ni nombres de proyectos reales.

---

## 1. Objetivo del bloque

Sustituir, en una **meta de implementación futura**, el bloque demo **Portfolio** por una sección que muestre **iniciativas o entregables concretos** (proyectos, plataformas, programas de trabajo) que **prueben en la práctica** el perfil ejecutivo-técnico institucional del sitio, sin competir con la narrativa biográfica, la cronología laboral ni el catálogo de especialidades.

---

## 2. Nombre final recomendado

**Proyectos e iniciativas** (titular principal visible del lightbox).

**Etiqueta de menú recomendada (texto visible):** **Proyectos** (corta, coherente con Perfil / Trayectoria en español).

*Nota técnica no implementada aquí:* el `id` y `href` actuales (`#portfolio`) pueden conservarse en código hasta una meta de refactor de anclas; solo se define el **nombre editorial** que debe mostrarse al usuario.

---

## 3. Justificación del nombre

| Variante evaluada | Valoración breve |
|-------------------|------------------|
| **Proyectos** / **Proyectos e iniciativas** | Término estándar en entornos tecnológicos e institucionales; comunica **obra concreta** sin sonar a galería creativa. El matiz “e iniciativas” admite trabajos que no son “proyecto formal” pero sí **líneas de acción** (modernización, gobierno digital, programa de seguridad). |
| Casos destacados | Útil para consultoría; aquí puede sonar **comercial** o de marketing de casos de éxito. |
| Experiencia relevante | **Solapa semánticamente** con **Trayectoria** (tiempo + cargos). |
| Iniciativas estratégicas | Muy acertado tono ejecutivo, pero **largo** para menú y repetición; mejor como subtítulo o microcopy que como única etiqueta. |

**Elección cerrada:** titular **Proyectos e iniciativas** + menú **Proyectos** — balance entre precisión institucional y brevedad en navegación.

---

## 4. Función estratégica dentro del sitio

- **Qué función cumple:** Puente entre **capacidades declaradas** (Especialidades, competencias en Trayectoria) y **hechos verificables** (qué se abordó, en qué tipo de contexto, con qué rol y qué resultado **sintético**).
- **Qué debe percibir el visitante:** Que existe **trayectoria aplicada**: decisiones técnicas, alcance institucional y resultados **concretos**, presentados con **sobriedad** (no campaña, no portafolio de diseño).
- **Qué no debe percibir:** Lista de empleos (eso es Trayectoria), autobiografía (Perfil), catálogo abstracto de servicios (Especialidades), ni prueba social en voz de terceros (Testimonios).

---

## 5. Decisión sobre filtros

**Decisión:** **No mantener filtros interactivos en la primera versión publicable seria** del bloque, **salvo** que, en el momento de implementación, existan **más de seis** tarjetas publicadas y una taxonomía ya consensuada.

**Justificación:** Con **pocos ítems** (véase sección 7), los filtros añaden **complejidad heredada de plantilla** y poco valor de filtrado real. La **categoría** debe bastar como **etiqueta legible en la tarjeta** (texto o línea secundaria), sin motor Isotope obligatorio. Si el inventario crece, se **reactiva** la mecánica de filtros en una meta posterior alineada a la taxonomía de la sección 6.

---

## 6. Taxonomía recomendada o justificación de retiro

**Sin filtros en v1:** la taxonomía opera como **etiqueta descriptiva** en cada tarjeta (campo editorial), no como control de UI.

**Taxonomía de respaldo** (para etiqueta de tarjeta y, en el futuro, para filtros si aplica), **máximo 4 categorías** para evitar dispersión:

| Categoría (etiqueta) | Qué agrupa |
|----------------------|------------|
| **Plataformas y sistemas** | Desarrollo, integración, evolución de sistemas o plataformas institucionales. |
| **Infraestructura y operación** | Servidores, continuidad, despliegue, telecomunicaciones, bases de datos en explotación. |
| **Seguridad y gobierno** | Ciberseguridad, controles, cumplimiento, gobierno digital, normatividad aplicada. |
| **Capacitación y adopción** | Docencia, formación, transferencia tecnológica, adopción organizacional (solo si el caso es **centralmente** formativo; no duplicar Trayectoria de docencia genérica). |

**Retiro de la taxonomía demo** (Brand / Design / Photos): **obligatorio**; no tiene correspondencia con el posicionamiento del sitio.

---

## 7. Número inicial recomendado de tarjetas

**Entre 3 y 4 tarjetas** en la primera versión seria.

- **Menos de 3:** la rejilla pierde sensación de “cuerpo” y puede parecer sección vacía.
- **Más de 4 en v1:** eleva el riesgo de **texto largo**, repetición con Trayectoria o **relleno** no sustentado.

**Valor operativo recomendado:** **4 tarjetas** si existen al menos cuatro iniciativas **documentables y publicables**; de lo contrario, **3** con calidad estricta.

---

## 8. Estructura mínima de cada tarjeta

Campos **mínimos** (todos deben poder completarse con información real; si falta uno, el caso no debería publicarse):

| Campo | Finalidad |
|-------|-----------|
| **Título del proyecto o iniciativa** | Nombre sobrio, reconocible internamente o por alcance (sin sensacionalismo). |
| **Etiqueta de ámbito** | Una de la taxonomía de la sección 6 (texto visible; sin filtro obligatorio en v1). |
| **Rol** | Cómo se participó (p. ej. dirección técnica, arquitectura, liderazgo de despliegue) — **una frase corta**. |
| **Contexto institucional** | Organización o ámbito (sin datos sensibles: no clasificar información restringida). |
| **Resultado o impacto** | **Una o dos frases máximo**, cuantitativo o cualitativo a alto nivel (disponibilidad, cobertura, modernización, reducción de riesgo, etc.), sin jerga de ventas. |

**Opcional pero recomendado si hay activo aprobado:** imagen o diagrama **no confidencial** (captura genérica, esquema, iconografía) para la miniatura y el lightbox de apoyo.

**No obligatorio en tarjeta:** fechas extensas (si hiciera falta, **año** o rango corto; la cronología detallada sigue en Trayectoria).

---

## 9. Estructura mínima del detalle expandido

**Contexto:** la carcasa actual enlaza el `portfolio-item` a **lightbox de imagen** vía `data-lightbox`.

**Propuesta compatible con carcasa actual (sin rediseño en esta meta):**

1. **Detalle editorial principal:** reside en la **tarjeta** (overlay + campos de la sección 8). El usuario obtiene la síntesis **antes** del clic.
2. **Clic / lightbox:** función **principal** = **ampliación de evidencia visual** (imagen o figura aprobada), con **texto alternativo (`alt`) descriptivo** y, si el comportamiento del lightbox del tema lo permite sin reescritura mayor, **leyenda breve** (título + una línea) como complemento.
3. **Si el lightbox solo muestra imagen sin texto:** aceptar que el “detalle expandido” **es solo visual**; no forzar narrativa larga en el modal sin cambiar JS/plantilla en una meta posterior.
4. **Alternativa futura (fuera de este documento):** modal o sección con **ficha corta** (párrafo + lista de logros) si la política de contenido lo exige; eso implicaría **evolución de marcado o JS**, explícitamente **no** exigida aquí.

**Criterio:** sustituir el texto genérico **“More Info”** por algo acorde al tono institucional (p. ej. **“Ampliar”** o **“Ver imagen”**) en implementación, alineado a que el clic **no promete** un dossier que el lightbox actual no entrega.

---

## 10. Límites editoriales del bloque

**Sí debe aparecer**

- Iniciativas o proyectos **reales** con límites claros de **qué se puede decir en público**.
- Enfoque en **problema institucional / técnico abordado**, **rol** y **resultado sintético**.
- Coherencia de **idioma y tono** con Perfil, Trayectoria y Especialidades ya reconvertidos.

**No debe aparecer**

- Mockups, stock creativo o imágenes **no atribuibles** al trabajo descrito.
- Lista de **tecnologías por moda** sin vínculo con el caso.
- **Datos personales** de terceros, información clasificada o detalles operativos que comprometan seguridad.
- **Repetición** de párrafos del Perfil o copia de ítems de Trayectoria (cargos y fechas); aquí solo **referencia contextual** si aporta al caso.
- **Duplicar** el catálogo de Especialidades: las especialidades son **capacidades**; este bloque es **aplicación en casos**.

**Testimonios:** la prueba social queda en su sección; en Proyectos **no** insertar citas largas de clientes salvo decisión editorial excepcional y mínima.

---

## 11. Riesgos de implementación futura

- **Contenido sensible:** muchos proyectos institucionales no son publicables en detalle; el riesgo es **sección vacía** o **texto vago** — mitigar con **casos anonimizados** o **descripción de tipo de iniciativa** acordada con compliance interno.
- **Lightbox solo imagen:** riesgo de **expectativa incumplida** si el copy del botón sugiere “más información” extensa; mitigar con redacción honesta en tarjeta y CTA (sección 9).
- **Isotope / filtros:** si se retiran filtros en HTML pero queda JS que asume grid, validar en implementación que **no haya errores** en consola (meta técnica posterior).
- **Paridad `index.html` / `video.html`:** cualquier cambio debe **replicarse** en ambos.
- **SEO y título de página:** el `<title>` del documento sigue siendo de plantilla; es **deuda distinta** de esta meta editorial.

---

## 12. Recomendación final

Adoptar el bloque **Proyectos e iniciativas** (menú **Proyectos**) como **reconversión total** del contenido y de la taxonomía sobre la **carcasa** existente del lightbox: rejilla de tarjetas con **3–4 ítems iniciales**, **sin filtros en v1**, **etiqueta de ámbito en tarjeta**, **lightbox reservado a evidencia visual** con síntesis en la tarjeta, y **límites editoriales** estrictos para no duplicar Perfil, Trayectoria, Especialidades ni Testimonios.

---

## 13. Siguiente paso prudente sugerido

1. **Inventario interno** de iniciativas publicables (nombre tentativo, ámbito, rol, contexto, resultado, activo visual opcional), con **visto bueno** de lo que puede exponerse.
2. **Meta de implementación controlada:** sustituir textos, imágenes, clases de categoría (si se usan), eliminar o desactivar filtros según esta decisión, ajustar `aria-label` y CTA, y verificar **JS** (Isotope/lightbox) coherente con el nuevo marcado.
3. **Opcional después:** reintroducir filtros si el número de tarjetas y la taxonomía lo justifican.

---

| Metadato | Valor |
|----------|--------|
| Fecha | 2026-03-28 |
| Alcance | Solo creación de este documento |
