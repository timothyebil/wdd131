/**
 * WDD 131 Dynamic Footer Data Scripts
 * Timothy Ebil - Project Processing Interface
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Resolve and insert the accurate current calendar year
    const currentYearElement = document.getElementById("currentyear");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // 2. Resolve and format the system document modification record
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
    }
});
