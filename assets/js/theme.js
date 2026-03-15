(function () {
    "use strict";

    const STORAGE_KEY = "chronos-theme";

    function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
    }

    function getSavedTheme() {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch (error) {
            console.warn("[theme] No fue posible leer localStorage:", error);
            return null;
        }
    }

    function saveTheme(theme) {
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch (error) {
            console.warn("[theme] No fue posible guardar localStorage:", error);
        }
    }

    function getPreferredTheme() {
        const saved = getSavedTheme();
        if (saved) return saved;

        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return prefersDark ? "dark" : "dark";
    }

    function initTheme() {
        const theme = getPreferredTheme();
        applyTheme(theme);
        saveTheme(theme);
    }

    window.ThemeManager = {
        init: initTheme,
        applyTheme,
        saveTheme
    };
})();