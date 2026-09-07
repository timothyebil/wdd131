// Dynamically populate the copyright year
const currentYearSpan = document.getElementById("currentyear");
if (currentYearSpan) {
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;
}

// Dynamically populate the last modified date and time directly in the footer paragraph
const lastModifiedPara = document.getElementById("lastModified");
if (lastModifiedPara) {
    lastModifiedPara.textContent = `Last Modified: ${document.lastModified}`;
}
