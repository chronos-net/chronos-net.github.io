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

        console.log("Portafolio inicializado correctamente.");
    } catch (error) {
        console.error("Error durante la inicialización del sitio:", error);
    }
});