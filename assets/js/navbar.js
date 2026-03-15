(function () {
    "use strict";

    function updateHeaderState() {
        const header = document.getElementById("site-header");
        if (!header) return;

        if (window.scrollY > 20) {
            header.classList.add("is-scrolled");
        } else {
            header.classList.remove("is-scrolled");
        }
    }

    function updateActiveNavLink() {
        const navLinks = document.querySelectorAll(".site-nav a[href^='#']");
        const sections = document.querySelectorAll("section[id]");

        if (!navLinks.length || !sections.length) return;

        let currentId = "";

        sections.forEach((section) => {
            const top = section.offsetTop - 140;
            const height = section.offsetHeight;

            if (window.scrollY >= top && window.scrollY < top + height) {
                currentId = section.id;
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("is-active");

            const href = link.getAttribute("href");
            if (href === `#${currentId}`) {
                link.classList.add("is-active");
            }
        });
    }

    function closeMobileMenu(toggle, nav) {
        nav.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
    }

    function openMobileMenu(toggle, nav) {
        nav.classList.add("is-open");
        toggle.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
        document.body.classList.add("menu-open");
    }

    function bindMobileToggle() {
        const toggle = document.getElementById("nav-toggle");
        const nav = document.getElementById("site-nav");

        if (!toggle || !nav) return;

        toggle.addEventListener("click", () => {
            const isOpen = nav.classList.contains("is-open");

            if (isOpen) {
                closeMobileMenu(toggle, nav);
            } else {
                openMobileMenu(toggle, nav);
            }
        });

        nav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                closeMobileMenu(toggle, nav);
            });
        });

        document.addEventListener("click", (event) => {
            const clickedInsideNav = nav.contains(event.target);
            const clickedToggle = toggle.contains(event.target);

            if (!clickedInsideNav && !clickedToggle && nav.classList.contains("is-open")) {
                closeMobileMenu(toggle, nav);
            }
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 980) {
                closeMobileMenu(toggle, nav);
            }
        });
    }

    function bindScrollEvents() {
        updateHeaderState();
        updateActiveNavLink();

        window.addEventListener("scroll", () => {
            updateHeaderState();
            updateActiveNavLink();
        });
    }

    function initNavbar() {
        bindMobileToggle();
        bindScrollEvents();
    }

    window.Navbar = {
        init: initNavbar
    };
})();