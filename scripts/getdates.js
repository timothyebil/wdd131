// Dynamic Date Functions for WDD 131 Course Compliance
document.addEventListener("DOMContentLoaded", () => {
    // Populate the current year dynamically into the designated span node
    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Populate the precise document last modified timestamp string natively using textContent
    const lastModifiedParagraph = document.getElementById("lastModified");
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
    }
});
