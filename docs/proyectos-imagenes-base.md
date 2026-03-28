# Proyectos — imágenes base (Meta 029)

## 1. Objetivo de la intervención

Sustituir las imágenes **provisionales** (`item-1.jpg` … `item-3.jpg`) del bloque **Proyectos e iniciativas** por **recursos visuales abstractos propios**, sobrios y alineados a un tono técnico-institucional, **sin** alterar textos, títulos ni la estructura editorial de las tarjetas.

---

## 2. Archivos de imagen creados o incorporados

| Archivo | Ubicación | Formato | Dimensiones declaradas |
|---------|-----------|---------|-------------------------|
| `proyectos-direccion-tecnica.svg` | `img/` | SVG | 1200×800 |
| `proyectos-puestos-plazas.svg` | `img/` | SVG | 1200×800 |
| `proyectos-plataformas.svg` | `img/` | SVG | 1200×800 |

Los tres archivos son **vectoriales**, peso mínimo, sin texto incrustado, sin fotografía ni marca de terceros.

---

## 3. Archivos modificados

| Archivo | Cambio |
|---------|--------|
| `index.html` | Atributo `src` de las tres imágenes del bloque Proyectos. |
| `video.html` | Igual que `index.html` (paridad). |

**No modificados:** `css/custom.css`, `js/main.js`, encabezado del bloque, copy de tarjetas, demás secciones.

---

## 4. Criterio visual aplicado

- Fondo oscuro (`#0d1117` → `#151b24`) acorde al tema del sitio.
- Acentos en azules institucionales (`#2d5a87`, `#3a6d9e`, `#4a8bc8`) con opacidades bajas.
- Composición **abstracta** (líneas, nodos, módulos rectangulares, capas) sin estética comercial ni caricatura.
- Familia visual: misma resolución lógica, misma paleta y grosores de trazo similares entre los tres SVG.

---

## 5. Mapeo de imagen por tarjeta

| Tarjeta (título existente) | Archivo |
|----------------------------|---------|
| Dirección tecnológica institucional | `img/proyectos-direccion-tecnica.svg` — red/nodos, continuidad estructural. |
| Sistema de Puestos y Plazas | `img/proyectos-puestos-plazas.svg` — módulos y flujo entre bloques. |
| Plataformas administrativas y académicas | `img/proyectos-plataformas.svg` — paneles, subdivisiones, franjas tipo datos. |

---

## 6. Referencias sustituidas

| Antes | Después |
|-------|---------|
| `img/item-1.jpg` | `img/proyectos-direccion-tecnica.svg` |
| `img/item-2.jpg` | `img/proyectos-puestos-plazas.svg` |
| `img/item-3.jpg` | `img/proyectos-plataformas.svg` |

En el bloque Proyectos de `index.html` y `video.html` **ya no** se referencian `item-1.jpg`, `item-2.jpg` ni `item-3.jpg`.

*(Los archivos JPG antiguos pueden seguir en disco si existen en el repositorio local; dejaron de usarse en este bloque.)*

---

## 7. Riesgos controlados

- **No hay capturas de sistemas reales** ni datos identificables en las imágenes.
- **SVG** escala bien en la rejilla; si algún navegador antiguo fallara, sería caso marginal (SVG es ampliamente soportado).
- Los **`alt`** de las tarjetas **no se modificaron** (requisito de la meta); siguen describiendo el sentido referencial del contenido, no el dibujo abstracto literal.

---

## 8. Estado final del bloque

- Tres tarjetas con **identidad visual propia** y coherente entre sí.
- Bloque Proyectos **sin** dependencia de `item-1` … `item-3` para esas tarjetas.
- Sin cambios en filtros, encabezado, JS ni resto del sitio.

---

| Metadato | Valor |
|----------|--------|
| Meta | 029 |
| Fecha | 2026-03-28 |
