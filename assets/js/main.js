document.addEventListener("DOMContentLoaded", async () => {
    try {
        if (window.ThemeManager) {
            window.ThemeManager.init();
        }

        if (window.SectionsLoader) {
            await window.SectionsLoader.init();
        }

        if (window.Navbar) {
            window.Navbar.init();
        }

        if (window.ScrollReveal) {
            window.ScrollReveal.init();
        }

        const projectToggles = document.querySelectorAll(".project-toggle");

        projectToggles.forEach((button) => {
            button.addEventListener("click", () => {
                const targetId = button.getAttribute("aria-controls");
                const detail = document.getElementById(targetId);

                if (!detail) {
                    return;
                }

                const isExpanded = button.getAttribute("aria-expanded") === "true";

                button.setAttribute("aria-expanded", String(!isExpanded));
                button.textContent = isExpanded ? "Ver enfoque" : "Ocultar enfoque";
                detail.hidden = isExpanded;
            });
        });

        console.log("Portafolio inicializado correctamente.");
    } catch (error) {
        console.error("Error durante la inicialización del sitio:", error);
    }
});