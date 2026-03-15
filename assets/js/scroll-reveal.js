(function () {
    "use strict";

    function initReveal() {
        const revealElements = document.querySelectorAll(".reveal");

        if (!revealElements.length) return;

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    obs.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15
        });

        revealElements.forEach((element) => observer.observe(element));
    }

    window.ScrollReveal = {
        init: initReveal
    };
})();