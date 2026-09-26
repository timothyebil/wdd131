const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/temple1.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "images/temple2.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "images/temple3.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "images/temple4.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "images/temple5.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "images/temple6.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "images/temple7.jpg"
  },
  /* MANDATORY ADDITIONAL SYSTEM DATA MATRIX OBJECT EXTENSIONS ITEMS */
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "images/temple8.jpg"
  },
  {
    templeName: "Frankfurt Germany",
    location: "Friedrichsdorf, Germany",
    dedicated: "1987, August, 28",
    area: 32895,
    imageUrl: "images/temple9.jpg"
  },
  {
    templeName: "Paris France",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl: "images/temple10.jpg"
  }
];

document.addEventListener("DOMContentLoaded", () => {
    // 1. Structural DOM Site Footer Timestamp Automation
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastmodified").textContent = document.lastModified;

    // 2. Cache Crucial Document Layout Landmark Elements
    const gridCanvas = document.getElementById("temple-cards-container");
    const headerTitleViewLabel = document.getElementById("gallery-view-label");
    const tabLinkSelectors = document.querySelectorAll(".navigation-menu a");

    // Dynamic rendering function building individual cards cleanly mapping native lazy properties
    const populateGalleryDashboard = (datasetArray) => {
        gridCanvas.innerHTML = ""; 
        
        datasetArray.forEach(temple => {
            const figureCardNode = document.createElement("figure");
            figureCardNode.className = "temple-profile-card";
            
            // Layout maps precise typography text label structures matching your target image snippet perfectly
            figureCardNode.innerHTML = `
                <h3>${temple.templeName}</h3>
                <div class="info-body">
                    <p><span class="card-label">Location:</span> ${temple.location}</p>
                    <p><span class="card-label">Dedicated:</span> ${temple.dedicated}</p>
                    <p><span class="card-label">Size:</span> ${temple.area.toLocaleString()} sq ft</p>
                </div>
                <!-- Native lazy loading explicitly enabled with fixed dimensions to guarantee zero layout shifts -->
                <img src="${temple.imageUrl}" 
                     alt="${temple.templeName} Temple architectural structural overview look" 
                     loading="lazy" 
                     width="400" 
                     height="250">
            `;
            gridCanvas.appendChild(figureCardNode);
        });
    };

    // 3. Main Navigation Array Filter Logic Core Routing Processing Controller
    const processActiveFilterSelection = (clickEvent, targetModeString) => {
        clickEvent.preventDefault();
        
        // Handle visual visual indicator active selection toggles classes flags states
        tabLinkSelectors.forEach(node => node.classList.remove("active-tab"));
        clickEvent.target.classList.add("active-tab");

        let calculationResultList = [];
        
        switch(targetModeString) {
            case "old":
                headerTitleViewLabel.textContent = "Old Temples (Built Prior to 1900)";
                calculationResultList = temples.filter(t => {
                    const yearExtracted = parseInt(t.dedicated.split(",").trim());
                    return yearExtracted < 1900;
                });
                break;
            case "new":
                headerTitleViewLabel.textContent = "New Temples (Built Post 2000)";
                calculationResultList = temples.filter(t => {
                    const yearExtracted = parseInt(t.dedicated.split(",").trim());
                    return yearExtracted > 2000;
                });
                break;
            case "large":
                headerTitleViewLabel.textContent = "Large Temples (Dimensions Exceeding 90,000 Sq Ft)";
                calculationResultList = temples.filter(t => t.area > 90000);
                break;
            case "small":
                headerTitleViewLabel.textContent = "Small Temples (Dimensions Inside 10,000 Sq Ft)";
                calculationResultList = temples.filter(t => t.area < 10000);
                break;
            default:
                headerTitleViewLabel.textContent = "All Temples Portfolio Collection";
                calculationResultList = temples;
        }
        
        populateGalleryDashboard(calculationResultList);
    };

    // 4. Hook Click Action Subscriptions to Target Nodes
    document.getElementById("filter-home").addEventListener("click", (e) => processActiveFilterSelection(e, "home"));
    document.getElementById("filter-old").addEventListener("click", (e) => processActiveFilterSelection(e, "old"));
    document.getElementById("filter-new").addEventListener("click", (e) => processActiveFilterSelection(e, "new"));
    document.getElementById("filter-large").addEventListener("click", (e) => processActiveFilterSelection(e, "large"));
    document.getElementById("filter-small").addEventListener("click", (e) => processActiveFilterSelection(e, "small"));

    // Initial pass data injection rendering pool load execution parameters on dashboard runtime start
    populateGalleryDashboard(temples);
});
