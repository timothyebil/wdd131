/**
 * WDD 131 - Dynamic Web Fundamentals
 * Project Interactivity Engine - Timothy Ebil
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Dynamic Footer Runtime Values Population
    const currentYearField = document.querySelector("#currentyear");
    const lastModifiedField = document.querySelector("#lastModified");
    
    if (currentYearField) {
        currentYearField.textContent = new Date().getFullYear();
    }
    
    if (lastModifiedField) {
        lastModifiedField.textContent = `Last Modification: ${document.lastModified}`;
    }

    // 2. Responsive UI Hamburger Navigation Interactive Toggles
    const menuButton = document.querySelector("#menu");
    const navigationMenu = document.querySelector(".navigation");

    if (menuButton && navigationMenu) {
        menuButton.addEventListener("click", () => {
            navigationMenu.classList.toggle("open");
            menuButton.classList.toggle("open");
            
            // Handles accessibility criteria (Updates ARIA states dynamically)
            const isMenuExpanded = navigationMenu.classList.contains("open");
            menuButton.setAttribute("aria-expanded", isMenuExpanded.toString());
        });
    }
});
