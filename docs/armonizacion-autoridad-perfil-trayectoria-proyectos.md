# Meta 037 — Armonización transversal de autoridad, cifras y no repetición

## 1. Objetivo del refinamiento

Depurar la narrativa entre **Perfil**, **Trayectoria** y **Proyectos** para reducir repeticiones conceptuales y de cifras, redistribuir el peso (síntesis ejecutiva / respaldo evolutivo / evidencia aplicada) y mantener tono ejecutivo, técnico e institucional sin debilitar la autoridad del sitio.

## 2. Archivos revisados

- `index.html`
- `video.html`

## 3. Bloques intervenidos

- **Perfil:** `section-description` de la página del lightbox; párrafo principal en `.content-description` (bloque info).
- **Trayectoria:** `item-description` del cargo de Subdirector; `item-description` del ítem de Analista especializado (experiencia laboral).
- **Proyectos:** `section-description` de la página del lightbox; los tres `project-card-summary` de las tarjetas existentes (sin alterar títulos, imágenes ni número de tarjetas).

No se intervinieron otras secciones, competencias, formación adicional, docencia ni certificaciones.

## 4. Redundancias detectadas

- **210 mil servidores públicos y 900 dispositivos:** repetidos de forma casi literal en **Trayectoria** (Subdirector) y **Proyectos** (primera tarjeta), con la misma función informativa.
- **300 mil servidores públicos:** repetidos en **Trayectoria** (Analista) y **Proyectos** (segunda tarjeta), duplicando la prueba cuantitativa del mismo caso.
- **Eje estrategia / infraestructura crítica / continuidad / interoperabilidad:** presente en **Perfil**, en la descripción anterior del Subdirector en **Trayectoria** y en la primera tarjeta de **Proyectos**, generando triple eco semántico.
- **Tríada administrativo–académico–hospitalario / control hospitalario:** alineada entre **Perfil** y el resumen de la tercera tarjeta de **Proyectos**, con redacción muy paralela.
- **Microcopy de Perfil** con «alcance institucional» en el subtítulo de página sugería números que ya estaban duplicados en Trayectoria y Proyectos.

## 5. Criterio de redistribución narrativa

- **Perfil:** conserva credenciales, mandato en ejes técnicos (estrategia, infraestructura crítica, ciberseguridad, continuidad, interoperabilidad), integración de capacidades, tipos de solución (personal de amplio alcance, plataformas autorizadas) y docencia; **sin cifras**. Micro de sección sin la palabra «alcance» para no competir con la función cuantitativa de Proyectos. Ligero ajuste léxico («encargo», «participación sustancial») para diferenciar del texto de casos.
- **Trayectoria:** **Subdirector** pasa a enfatizar **conducción operativa, equipos e integración** sin reenumerar el mismo paquete estratégico ni las magnitudes ya expuestas como caso. **Analista** conserva la **participación sustancial en el Sistema de Puestos y Plazas** pero **sin repetir 300 mil**, reservada a la tarjeta de proyecto.
- **Proyectos:** función explícita de **evidencia y magnitudes**: primera tarjeta con **210 mil + 900**; segunda con **300 mil**; tercera con **implementación y verticales** (salud pública, evaluación en línea) sin copiar la misma frase trinomial del Perfil. Micro de sección orientado a **casos y alcance cuantificable**.

## 6. Cambios aplicados

| Ubicación | Cambio |
|-----------|--------|
| Perfil — micro de página | De «Credenciales, mandato y alcance institucional» a **«Credenciales y mandato tecnológico institucional»**. |
| Perfil — párrafo | «Orienta la dirección… hacia» → **«Orienta el encargo… en»**; «ha tenido participación» → **«participación sustancial»**; cierre de docencia **«La docencia abarca…»** (eliminado eco «capacitación técnica» redundante con el concepto). |
| Trayectoria — Subdirector | Sustitución del párrafo largo (estrategia + cifras) por texto centrado en **coordinación, responsabilidad operativa, priorización, continuidad del servicio e integración entre sistemas**. |
| Trayectoria — Analista | Eliminación de **«con alcance superior a 300 mil servidores públicos»**; mantenimiento de **participación sustancial en el Sistema de Puestos y Plazas**. |
| Proyectos — micro de página | De «Iniciativas con impacto…» a **«Casos de implementación y alcance cuantificable»**. |
| Proyectos — tarjeta 1 | Encuadre como **caso de mandato actual** + **magnitudes de referencia** (210 mil y 900) en una sola lectura densa. |
| Proyectos — tarjeta 2 | Encuadre como **caso de solución** para gestión de personal; **300 mil** solo aquí; sin duplicar el nombre del sistema en el cuerpo (el título de tarjeta ya lo identifica). |
| Proyectos — tarjeta 3 | Redacción hacia **implementación, verticalización, evaluación en línea y entornos clínicos-administrativos de salud pública**, reduciendo paralelismo literal con el párrafo de Perfil. |

Los mismos cambios se replicaron en `video.html` para paridad de contenido.

## 7. Elementos conservados y por qué

- **Títulos de tarjetas, imágenes, estructura HTML y número de proyectos:** fuera de alcance y no necesarios para la armonización textual.
- **Hero, Especialidades (dentro de Perfil pero no solicitadas), Testimonios, Contacto:** no tocados por regla estricta del encargo.
- **Competencias, formación, docencia, certificaciones y demás ítems de Trayectoria:** sin solapamiento de cifras con Proyectos; no requerían edición para esta meta.
- **Cifras aprobadas:** todas conservadas; solo se **reubicó** dónde aparecen para evitar duplicidad funcional.

## 8. Archivos modificados

- `index.html`
- `video.html`
- `docs/armonizacion-autoridad-perfil-trayectoria-proyectos.md` (este documento)

## 9. Estado final de la narrativa transversal

Cada idea fuerte tiene un **ancla principal**: el **mandato y las capacidades** en Perfil; la **evolución de cargos y operación** en Trayectoria sin reexpresar las mismas magnitudes; las **cifras y el encuadre de caso** en Proyectos. La lectura queda más ejecutiva: menos eco entre secciones y función clara de cada bloque. El sitio puede considerarse **listo para cierre público** a nivel de narrativa Perfil–Trayectoria–Proyectos. Una **ronda opcional** posterior podría limitarse a detalles periféricos (p. ej. textos `alt` de imágenes de proyecto, metadatos o consistencia léxica en navegación) sin impacto en la arquitectura de autoridad ya acordada.

### Dónde quedó cada cifra o idea fuerte (referencia rápida)

| Elemento | Bloque principal |
|----------|------------------|
| Estrategia, infraestructura crítica, ciberseguridad, continuidad, interoperabilidad (síntesis) | **Perfil** |
| Coordinación Subdirección, priorización, continuidad del servicio, integración (cronología) | **Trayectoria** — Subdirector |
| 210 mil servidores públicos + 900 dispositivos | **Proyectos** — tarjeta 1 |
| Sistema de Puestos y Plazas (nombre y alcance 300 mil) | **Trayectoria** (nombre + rol); **300 mil** solo en **Proyectos** — tarjeta 2 |
| Plataformas administrativas, académicas, hospitalario (tipología) | **Perfil** |
| Implementación, automatización, verticales, salud pública | **Proyectos** — tarjeta 3 |
