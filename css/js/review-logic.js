// Array source definitions for target selection blocks
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    const selectElement = document.getElementById('product-name');
    
    // Safety block to ensure element selection behaves correctly
    if (selectElement) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id; 
            option.textContent = product.name; 
            selectElement.appendChild(option);
        });
    }

    // Capture dynamic metric targets for footer year and modification tracking
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('lastModified');

    const now = new Date();

    if (yearSpan) yearSpan.textContent = now.getFullYear();
    if (lastModifiedSpan) lastModifiedSpan.textContent = document.lastModified;
});
