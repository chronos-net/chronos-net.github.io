(function () {
    "use strict";

    /**
     * Carga una sección HTML en un contenedor específico.
     * @param {string} targetSelector - Selector CSS del contenedor destino.
     * @param {string} filePath - Ruta del archivo HTML a cargar.
     * @returns {Promise<void>}
     */
    async function loadSection(targetSelector, filePath) {
        const target = document.querySelector(targetSelector);

        if (!target) {
            console.warn(`[sections-loader] No se encontró el contenedor: ${targetSelector}`);
            return;
        }

        try {
            const response = await fetch(filePath, {
                method: "GET",
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }
            });

            if (!response.ok) {
                throw new Error(`Error ${response.status} al cargar ${filePath}`);
            }

            const html = await response.text();
            target.innerHTML = html;
        } catch (error) {
            console.error("[sections-loader] Error al cargar sección:", error);
            target.innerHTML = `
        <section class="section-shell">
          <div class="container">
            <div class="load-error">
              <h2>Error al cargar contenido</h2>
              <p>No fue posible cargar la sección solicitada.</p>
            </div>
          </div>
        </section>
      `;
        }
    }

    /**
     * Carga varias secciones en paralelo.
     * Ajusta el mapeo cuando dejes definido tu index final.
     */
    async function initSectionsLoader() {
        const sectionMap = [
            { selector: "#hero-container", file: "sections/hero.html" },
            { selector: "#profile-container", file: "sections/profile.html" },
            { selector: "#projects-container", file: "sections/projects.html" },
            { selector: "#credentials-container", file: "sections/credentials.html" },
            { selector: "#technologies-container", file: "sections/technologies.html" },
            { selector: "#contact-container", file: "sections/contact.html" },
            { selector: "#footer-container", file: "sections/footer.html" }
        ];

        const tasks = sectionMap.map((section) => loadSection(section.selector, section.file));
        await Promise.all(tasks);

        document.dispatchEvent(new CustomEvent("sections:loaded"));
    }

    window.SectionsLoader = {
        init: initSectionsLoader,
        loadSection
    };
})();