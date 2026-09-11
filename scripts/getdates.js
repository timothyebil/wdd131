document.addEventListener("DOMContentLoaded", () => {
    // 1. Populate current footer year
    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
        currentYearSpan.textContent = ` ${new Date().getFullYear()}`;
    }

    // 2. Format and display document.lastModified to match required rubric output
    const lastModifiedParagraph = document.getElementById("lastModified");
    if (lastModifiedParagraph) {
        const lastModDate = new Date(document.lastModified);
        const pad = (num) => String(num).padStart(2, '0');
        
        const formattedDate = `${pad(lastModDate.getMonth() + 1)}/${pad(lastModDate.getDate())}/${lastModDate.getFullYear()}`;
        const formattedTime = `${pad(lastModDate.getHours())}:${pad(lastModDate.getMinutes())}:${pad(lastModDate.getSeconds())}`;
        
        lastModifiedParagraph.textContent = `Last Modification: ${formattedDate} ${formattedTime}`;
    }

    // 3. Advanced Keyboard Accessible Hamburger Menu Drawer Mechanism with localStorage Caching
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {
        const setMenuState = (shouldOpen) => {
            if (shouldOpen) {
                menuToggle.classList.add("open");
                navLinks.classList.add("open");
                menuToggle.setAttribute("aria-expanded", "true");
                localStorage.setItem("menuSidebarPreference", "expanded");
            } else {
                menuToggle.classList.remove("open");
                navLinks.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
                localStorage.setItem("menuSidebarPreference", "collapsed");
            }
        };

        // Check if a prior menu preference is already stored in browser storage
        const savedPreference = localStorage.getItem("menuSidebarPreference");
        if (savedPreference === "expanded") {
            setMenuState(true);
        } else {
            setMenuState(false);
        }

        // Click interaction toggle
        menuToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            const isOpen = menuToggle.classList.contains("open");
            setMenuState(!isOpen);
        });

        // Listen globally for the Escape key to close open drawer instantly
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" || event.key === "Esc") {
                if (navLinks.classList.contains("open")) {
                    setMenuState(false);
                    menuToggle.focus();
                }
            }
        });

        // Close drawer if user clicks outside the navigation system boundaries
        document.addEventListener("click", (event) => {
            if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
                if (navLinks.classList.contains("open")) {
                    setMenuState(false);
                }
            }
        });
    }
});
