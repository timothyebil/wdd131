document.addEventListener("DOMContentLoaded", () => {
    // 1. Populate current footer year
    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
        currentYearSpan.textContent = ` ${new Date().getFullYear()}`;
    }

    // 2. Format and display document.lastModified
    const lastModifiedParagraph = document.getElementById("lastModified");
    if (lastModifiedParagraph) {
        const lastModDate = new Date(document.lastModified);
        const pad = (num) => String(num).padStart(2, '0');
        
        const formattedDate = `${pad(lastModDate.getMonth() + 1)}/${pad(lastModDate.getDate())}/${lastModDate.getFullYear()}`;
        const formattedTime = `${pad(lastModDate.getHours())}:${pad(lastModDate.getMinutes())}:${pad(lastModDate.getSeconds())}`;
        
        lastModifiedParagraph.textContent = `Last Modification: ${formattedDate} ${formattedTime}`;
    }

    // 3. Hamburger Menu State Controls with localStorage Persistence
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {
        // Function to synchronize DOM classes and accessibility attributes
        const setMenuDisplayState = (openState) => {
            if (openState) {
                menuToggle.classList.add("open");
                navLinks.classList.add("open");
                menuToggle.setAttribute("aria-expanded", "true");
                // Cache state inside localStorage
                localStorage.setItem("menuPreference", "expanded");
            } else {
                menuToggle.classList.remove("open");
                navLinks.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
                // Cache state inside localStorage
                localStorage.setItem("menuPreference", "collapsed");
            }
        };

        // 🔄 Check if a prior menu preference is already stored in browser storage
        const savedMenuPreference = localStorage.getItem("menuPreference");
        
        // Apply the saved preference immediately on page load (if on mobile view)
        if (savedMenuPreference === "expanded") {
            setMenuDisplayState(true);
        } else {
            setMenuDisplayState(false); // Default state is collapsed
        }

        // Toggle configuration on mouse click interaction events
        menuToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            const isCurrentlyOpen = navLinks.classList.contains("open");
            setMenuDisplayState(!isCurrentlyOpen);
        });

        // Dismiss drawer instantly using the Escape key
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" || event.key === "Esc") {
                if (navLinks.classList.contains("open")) {
                    setMenuDisplayState(false);
                    menuToggle.focus();
                }
            }
        });

        // Close drawer if user clicks on the page canvas outside the navigation boundaries
        document.addEventListener("click", (event) => {
            if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
                if (navLinks.classList.contains("open")) {
                    setMenuDisplayState(false);
                }
            }
        });
    }
});
