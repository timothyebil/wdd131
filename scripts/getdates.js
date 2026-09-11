/**
 * WDD 131 Dynamic Footer Data Handling Interface
 * Student: Timothy Ebil
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Resolve and update current calendar year
    const yearDisplayElement = document.getElementById("currentyear");
    if (yearDisplayElement) {
        yearDisplayElement.textContent = new Date().getFullYear();
    }

    // 2. Resolve and write system document file modification details
    const modificationDisplayElement = document.getElementById("lastModified");
    if (modificationDisplayElement) {
        modificationDisplayElement.textContent = `Last Modification: ${document.lastModified}`;
    }
});
