# Meta 043 — Integración del bloque Servicios profesionales

## 1. Objetivo de la integración

Dar **visibilidad explícita a la oferta profesional** (líneas de servicio en desarrollo, soporte/implementación y consultoría/dirección) con tono ejecutivo e institucional, sin catálogo comercial ni duplicar el bloque de **Especialización profesional**, que sigue describiendo **ámbitos de capacidad técnica y de gestión**.

## 2. Archivos revisados

- `index.html`
- `video.html`
- `js/main.js` (impacto en `responsiveColumns` al añadir otra rejilla `.single-service` dentro de `#about`)

## 3. Criterio editorial aplicado

- Tercera persona o formulación impersonal institucional en los resúmenes.
- Alta densidad informativa; sin precios, paquetes ni CTAs agresivos.
- Tres líneas distintas: **construcción de soluciones**, **operación y despliegue**, **gobernanza y estrategia**.
- Separación semántica respecto a Especialización: aquí se comunica **cómo se presta valor** (servicios); allí **en qué dominios** se sostiene la práctica (capacidades).

## 4. Estructura del bloque incorporado

- Ubicación: lightbox **Perfil** (`#about`), **después** del bloque de datos de perfil (info) y **antes** de **Especialización profesional**.
- Contenedor: `div.services-section.single-section` con `id="bloque-servicios-profesionales"`.
- Encabezado: `section-heading` con `section-description` (subtítulo) y `section-title` (título del bloque).
- Tres columnas Bootstrap (`col-12 col-md-6 col-lg-4`) con el mismo patrón visual que las tarjetas existentes: `single-service`, `service-icon`, `service-title`, `service-description`.
- Iconos Ionicons: `ion-md-code`, `ion-md-construct`, `ion-md-briefcase` (no reutilizados en las seis tarjetas de especialización).

La sección **Especialización profesional** conserva su marcado pero recibe `id="bloque-especializacion-profesional"` para acotar el script de márgenes responsivos.

## 5. Texto final del encabezado y subtítulo

- **Título (`section-title`):** Servicios profesionales  
- **Subtítulo (`section-description`):** Desarrollo, acompañamiento técnico y dirección tecnológica con enfoque institucional  

## 6. Texto final de cada servicio

**1 — Desarrollo de soluciones**  
Diseño, construcción y evolución de sistemas orientados a modernizar procesos, integrar operación y habilitar soluciones institucionales, administrativas, académicas y de control.

**2 — Soporte e implementación tecnológica**  
Acompañamiento técnico para despliegue, operación, continuidad y fortalecimiento de infraestructura, aplicativos y entornos de trabajo con criterio funcional y operativo.

**3 — Consultoría y dirección tecnológica**  
Diagnóstico, definición de lineamientos, priorización, mejora operativa y acompañamiento estratégico para iniciativas de transformación digital, normatividad, continuidad y gobierno tecnológico.

## 7. Elementos no tocados y por qué

- **Menú de navegación:** sin cambios; el bloque vive dentro de **Perfil**, accesible con el flujo actual.
- **Perfil (párrafo de síntesis, datos de contacto en info):** sin edición de contenido.
- **Trayectoria, Proyectos, Testimonios, Contacto:** sin cambios.
- **CSS:** sin cambios; se reutilizan estilos existentes de `.services-section` y `.single-service`.
- **Seis tarjetas de Especialización:** solo se añadió `id` al contenedor; textos e iconos intactos.

## 8. Archivos modificados

- `index.html`
- `video.html`
- `js/main.js`
- `docs/servicios-profesionales-integracion.md` (este documento)

## 9. Estado final del bloque dentro del sitio

El visitante que abre **Perfil** ve primero la **síntesis y datos**, después **Servicios profesionales** (oferta en tres líneas), después **Especialización profesional** (capacidades por dominio) y **Testimonios**. La lectura queda ordenada de **qué se ofrece** → **sobre qué bases técnicas** → **prueba social**, sin confundir oferta con mapa de competencias.
