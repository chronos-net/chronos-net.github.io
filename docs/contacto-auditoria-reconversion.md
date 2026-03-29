# Contacto — auditoría y reconversión (Meta 032)

## 1. Objetivo de la auditoría

Detectar y corregir **residuos de plantilla** en el lightbox **Contacto** (`#contact`): textos en inglés, placeholders, etiquetas genéricas y tono poco acorde a un **cierre profesional** ejecutivo-institucional, aplicando solo cambios **visibles** en el marcado necesarios, sin rediseño ni nuevas funciones.

---

## 2. Archivos revisados

- `index.html` — bloque desde `<!-- Contact lightbox-->` hasta el cierre del `div#contact`.
- `video.html` — mismo bloque (paridad con `index.html`).

Además, para **consistencia del nombre de sección**, se revisó la etiqueta del ítem de menú que enlaza a `#contact` en ambos archivos.

---

## 3. Residuos detectados

| Elemento | Problema |
|----------|----------|
| `section-description` | Inglés con error (“anytimes”), tono informal. |
| `section-title` | “Get in Touch” (plantilla). |
| Columna principal `h4` | “Contact channels” (inglés). |
| Párrafo introductorio | Inglés largo; tono adecuado pero no alineado al resto del sitio en idioma. |
| `info-type` “Email” | Inglés. |
| Columna derecha `h4` | “Contact Info” (inglés). |
| Párrafo “Additional contact details” | Placeholder vacío de sustancia. |
| `info-type` Name / Location / Call Me | Inglés; “Call Me” poco formal. |
| Icono `ion-logo-ionic` | Marca/logo Ionic como icono de “nombre”; poco apropiado para identificación personal. |

**Datos de contacto** (correo, teléfono, nombre, ubicación): ya eran los del titular; **no** se inventaron ni alteraron valores, solo etiquetas y textos auxiliares.

---

## 4. Cambios aplicados

- **Encabezado del bloque:** subtítulo y título pasan a español institucional (véase sección 8).
- **Columna izquierda:** título de bloque “Correo electrónico”; texto guía para uso del correo; etiqueta de ítem “Correo”.
- **Columna derecha:** título “Datos de referencia”; descripción sustitutiva del placeholder; etiquetas Nombre, Ubicación, Teléfono.
- **Icono** del primer ítem de la columna derecha: `ion-logo-ionic` → `ion-md-person`.
- **Menú:** texto visible del enlace a `#contact`: “Contact” → “Contacto”.

**CSS / JS:** sin cambios.

---

## 5. Elementos conservados y por qué

| Elemento | Motivo |
|----------|--------|
| `id="contact"`, `href="#contact"`, clases de layout (`contact-section`, `contact-info`, grid) | Comportamiento y maquetación existentes. |
| `mailto:` y `tel:` con los mismos valores | No inventar datos; solo clarificar etiquetas. |
| Iconos `ion-md-send`, `ion-md-map`, `ion-md-call` | Siguen siendo adecuados y neutros. |
| Estructura de dos columnas | Sin rediseño. |

---

## 6. Archivos modificados

| Archivo | Cambio |
|---------|--------|
| `index.html` | Bloque Contacto + etiqueta de menú “Contacto”. |
| `video.html` | Igual. |
| `docs/contacto-auditoria-reconversion.md` | Este documento. |

---

## 7. Riesgos controlados

- **Longitud de líneas:** textos en español algo más largos que en inglés; mismas clases CSS; riesgo bajo de desbordes; no se reportaron ajustes necesarios.
- **Duplicación “Correo”** en título de columna y tipo de dato: intencional (bloque dedicado al canal correo); legible en contexto.

---

## 8. Estado final del bloque Contacto

- **Subtítulo (`section-description`):** *Coordinación profesional, académica e institucional*
- **Título (`section-title`):** *Contacto*
- **Menú visible hacia la sección:** *Contacto*
- Bloque sin mezcla español/inglés en copy visible; sin placeholder “Additional contact details”; sin CTA informal tipo “Call Me”.

**Residuo visible pendiente:** ninguno identificado dentro del alcance del lightbox Contacto y su entrada de menú.

---

| Metadato | Valor |
|----------|--------|
| Meta | 032 |
| Fecha | 2026-03-28 |
