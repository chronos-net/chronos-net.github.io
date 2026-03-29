# Meta 036 — Fortalecimiento narrativo de autoridad (Perfil y Trayectoria)

## 1. Objetivo del refinamiento

Elevar la autoridad profesional del sitio reforzando la narrativa visible de **Perfil** y **Trayectoria** con tono ejecutivo, técnico e institucional; alta densidad informativa sin inflar el discurso; **Perfil** como síntesis de mandato y **Trayectoria** como respaldo evolutivo y operativo, evitando duplicar el mismo mensaje entre ambos bloques. Sin nuevas secciones ni cambios de estructura.

## 2. Archivos revisados

- `index.html`
- `video.html`

## 3. Bloques intervenidos

**Perfil (sección #about, bloque info):**

- `section-description` bajo el título de página del lightbox.
- `content-subtitle` (etiqueta del bloque de texto junto a la foto).
- Párrafo principal en `.content-description`.

**Trayectoria (sección #resume):**

- `section-description` bajo el título de página del lightbox.
- Descripciones (`item-description`) de los cuatro ítems de experiencia laboral.
- Descripciones breves de formación (maestría e ingeniería).

**No intervenido en esta meta:** lista de competencias clave (texto ya denso), títulos de docencia, certificaciones, fechas ni títulos de cargo; resto del sitio.

## 4. Criterio editorial aplicado

- Tercera persona institucional en el párrafo de Perfil (coherente con tono ejecutivo y distancia profesional).
- Verbos de mandato y alcance: orientar, integrar, dirección, interoperabilidad, continuidad, cumplimiento.
- Cifras y alcances solo donde la base factual lo autoriza; sin nuevas métricas inventadas.
- Perfil: rol + credenciales + ámbitos de responsabilidad + integración de capacidades + referencia cualitativa a soluciones de administración de personal y plataformas (sin repetir el detalle cronológico de Trayectoria).
- Trayectoria: anclaje operativo (900 dispositivos, 210 mil servidores en cargo actual; 300 mil en ítem alineado al Sistema de Puestos y Plazas), precisión en verbos de cada etapa (evolución, respaldo, conducción, organismo estatal).
- Sin adjetivos grandilocuentes, sin lenguaje comercial, sin listas largas nuevas.

## 5. Texto anterior resumido

- **Perfil — micro de sección:** «Formación, especialización e impacto institucional».
- **Perfil — subtítulo interno:** «Resumen ejecutivo».
- **Perfil — párrafo:** Ingeniero y maestro; experiencia en dirección tecnológica, arquitectura, infra crítica, ciberseguridad y gobierno digital; liderazgo en modernización y plataformas; primera persona («He liderado», «Mi perfil»); cierre en docencia y capacidades digitales de forma genérica.
- **Trayectoria — micro de sección:** «Formación, cargos y competencias».
- **Subdirector:** Dirección de estrategia, infra, seguridad, continuidad, interoperabilidad y equipo; sin cifras de alcance.
- **Analista especializado:** Administración de servidores y BD, despliegue, arquitectura, soporte a plataformas; sin mención explícita al sistema de puestos y plazas ni alcance en servidores.
- **Líder de proyecto:** Desarrollo, soporte integral, participación en migración.
- **ISEM:** Plataformas en entornos de salud pública (redacción genérica).
- **Maestría:** «Título y cédula profesional».
- **Ingeniería:** «Titulado».

## 6. Texto nuevo aplicado

**Perfil — `section-description`:**  
«Credenciales, mandato y alcance institucional»

**Perfil — `content-subtitle`:**  
«Síntesis de mandato»

**Perfil — párrafo:**  
«Subdirector de Desarrollo Tecnológico, Ingeniero en Sistemas Computacionales y Maestro en Seguridad Informática. Orienta la dirección tecnológica institucional hacia estrategia, infraestructura crítica, ciberseguridad, continuidad operativa e interoperabilidad, con equipos multidisciplinarios y criterio de cumplimiento normativo y mejora continua. Integra gestión, arquitectura de sistemas, desarrollo de software, infraestructura y datos con gobierno digital; ha tenido participación sustancial en soluciones institucionales de administración de personal de amplio alcance y en plataformas administrativas, académicas y de control hospitalario. La docencia y la capacitación técnica abarcan seguridad informática, informática aplicada, normatividad y desarrollo de sistemas.»

**Trayectoria — `section-description`:**  
«Cargos, formación y competencias operativas»

**Subdirector — descripción:**  
«Dirección de estrategia tecnológica institucional, infraestructura crítica, seguridad informática, continuidad operativa e interoperabilidad, con coordinación de equipos técnicos multidisciplinarios. Alcance operativo en entorno de más de 900 dispositivos conectados y soporte institucional orientado a más de 210 mil servidores públicos.»

**Analista especializado — descripción:**  
«Administración y evolución de servidores y bases de datos, despliegue de sistemas institucionales, arquitectura de software y respaldo a equipos de desarrollo y operación en plataformas de impacto institucional, incluida participación sustancial en el Sistema de Puestos y Plazas con alcance superior a 300 mil servidores públicos.»

**Líder de proyecto — descripción:**  
«Desarrollo de sistemas institucionales, soporte transversal en infraestructura y telecomunicaciones, y conducción de procesos de migración tecnológica.»

**ISEM — descripción:**  
«Desarrollo de plataformas académicas, administrativas y de apoyo operativo en un organismo de salud pública estatal.»

**Maestría — descripción:**  
«Título de maestría y cédula profesional en vigor.»

**Ingeniería — descripción:**  
«Licenciatura con titulación concluida.»

## 7. Elementos no tocados y por qué

- **CSS y JS:** No requeridos; la longitud del contenido cabe en el layout existente.
- **Imágenes y estructura HTML** fuera de los párrafos y microcopy indicados: fuera de alcance de la meta.
- **Hero, Especialidades, Proyectos, Testimonios, Contacto:** explícitamente excluidos por el encargo.
- **Competencias clave (lista):** ya cumple función de densidad técnica; ampliarla arriesgaba CV y redundancia con el párrafo de Perfil.
- **Docencia (solo títulos de materias):** no había `item-description` que refinar sin convertir la sección en listado narrativo largo.
- **Certificaciones y datos de contacto en Perfil:** no forman parte del objetivo de autoridad narrativa Perfil/Trayectoria en esta meta.

## 8. Archivos modificados

- `index.html`
- `video.html`
- `docs/perfil-trayectoria-fortalecimiento.md` (este documento, creado en esta meta)

## 9. Estado final de la narrativa de autoridad

El **Perfil** declara de inicio el rol institucional y las credenciales académicas, ordena el mandato en ejes técnicos (estrategia, infraestructura crítica, seguridad, continuidad, interoperabilidad) y cierra con la integración de capacidades y el ámbito docente autorizado, sin desglosar cronología ni cifras que ya ancla **Trayectoria**. La **Trayectoria** aporta prueba operativa y temporal: el cargo actual con métricas de alcance autorizadas; el puesto de analista con el anclaje explícito al Sistema de Puestos y Plazas y el umbral de 300 mil servidores; etapas previas con verbos que marcan evolución y contexto institucional (salud pública estatal). La duplicación entre ambos bloques se reduce a complementariedad (síntesis vs. evidencia).

**Sobre una ulterior ronda larga de narrativa:** no es estrictamente necesaria para Perfil y Trayectoria; el binomio queda suficientemente sólido. Una ronda adicional solo tendría sentido si se desea alinear microcopy con otras secciones (p. ej. Proyectos) para pulir posibles repeticiones de cifras entre secciones distintas, fuera del alcance de esta meta.
