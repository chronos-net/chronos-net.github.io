# Armonización del acento: verde → azul tecnológico (Meta 051)

## 1. Objetivo del ajuste

Sustituir los acentos cromáticos verdes activos en la interfaz por un sistema coherente de **azul tecnológico** sobrio (`#3365b0` y derivados), alineado con un perfil Tech Lead, infraestructura y seguridad, sin rediseñar layout, tipografías ni textos.

## 2. Archivos revisados

- `index.html`
- `video.html`
- `css/custom.css`
- `css/main.css` (búsqueda de verdes activos: sin coincidencias)
- `css/colors/main-darkblue.css` (tema destino ya existente)
- `css/colors/main-darkgreen.css` (tema anterior; **ya no enlazado**; permanece en el repositorio como archivo histórico)
- `img/favicon.svg` (acento visible en pestaña del navegador)

## 3. Elementos visuales afectados

- Esquema de color global cargado por la página (`--custom`, botones `.btn-custom`, enlaces acentuados, focus rings, etc. vía `main-darkblue.css`).
- Meta `theme-color` (barra de UI en móviles).
- Paneles institucionales en Proyectos: borde izquierdo de títulos de panel, línea superior de mini-cards, color de etiquetas tipo tag, hover del borde superior.
- Capacidades: borde izquierdo de títulos de pilar, pills del strip, títulos de categoría de stack, chips con énfasis.
- Textos secundarios con tinte verdoso residual (microcopy de casos emblemáticos e intro de panel) neutralizados hacia gris frío.
- Favicon (relleno del icono).

## 4. Criterio cromático aplicado

- **Acento principal:** `#3365b0` (azul medio-profundo, no saturado; coherente con `main-darkblue.css`).
- **RGB para translucidez:** `51, 101, 176` centralizado en `custom.css` como `--accent-tech-rgb`, reutilizado en `rgba()` para bordes, fondos y texto con opacidades variables.
- **Hover / énfasis:** mismas opacidades que antes sobre el azul (p. ej. borde superior de mini-card al hover ligeramente más intenso), sin añadir cian brillante.
- **Fallbacks** en `var(--custom, …)` actualizados de `#009e66` a `#3365b0` para coherencia si fallara la variable.

## 5. Sustituciones principales realizadas

- Enlace de hoja de estilos: `main-darkgreen.css` → `main-darkblue.css` en `index.html` y `video.html`.
- `theme-color`: `#009e66` → `#3365b0`.
- En `custom.css`: todas las apariciones de `#009e66` / `rgba(0, 158, 102, …)` sustituidas por el sistema azul (`var(--custom, #3365b0)` y `rgba(var(--accent-tech-rgb), …)`).
- Ajuste de grises con matiz verdoso en líneas editoriales secundarias a grises ligeramente azulados.
- `img/favicon.svg`: `fill` de `#009e66` a `#3365b0`.

## 6. Archivos modificados

- `index.html`
- `video.html`
- `css/custom.css`
- `img/favicon.svg`
- `docs/armonizacion-acento-azul.md` (este documento)

## 7. Estado final de la armonización visual

- La UI cargada por las páginas públicas usa el tema **azul** (`main-darkblue.css`) y **no** aplica reglas verdes de `main-darkgreen.css`.
- En `custom.css` no quedan literales `#009e66` ni `rgba(0, 158, 102, …)`.
- El favicon y `theme-color` coinciden con el acento azul.
- **Nota:** `css/colors/main-darkgreen.css` sigue conteniendo verdes por ser archivo de tema no enlazado; no afecta a la UI hasta que se vuelva a referenciar.
