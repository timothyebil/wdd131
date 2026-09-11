/**
 * WDD 131 Dynamic Footer Data Handling Interface
 * Student: Timothy Ebil
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Target and populate current calendar year
    const yearDisplayElement = document.getElementById("currentyear");
    if (yearDisplayElement) {
        yearDisplayElement.textContent = new Date().getFullYear();
    }

    // 2. Target and construct the system last modified date metadata values
    const modificationDisplayElement = document.getElementById("lastModified");
    if (modificationDisplayElement) {
        modificationDisplayElement.textContent = `Last Modification: ${document.lastModified}`;
    }
});
