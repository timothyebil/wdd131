/**
 * WDD 131 Dynamic Footer Data Handling Interface
 * Student: Timothy Ebil
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Compute and insert current calendar year
    const yearDisplayElement = document.getElementById("currentyear");
    if (yearDisplayElement) {
        yearDisplayElement.textContent = new Date().getFullYear();
    }

    // 2. Compute and append the live server document file modification metadata string
    const modificationDisplayElement = document.getElementById("lastModified");
    if (modificationDisplayElement) {
        modificationDisplayElement.textContent = `Last Modification: ${document.lastModified}`;
    }
});
