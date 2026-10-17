/* ==========================================================================
   EXPLORE UGANDA ENGINE APPLICATION CONTROLLER
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initGlobalFooterMetrics();
    initResponsiveNavigation();
    
    if (document.getElementById("climate-form")) initClimateIndexEngine();
    if (document.getElementById("directory-grid")) initHabitatDirectoryEngine();
    if (document.getElementById("visit-message")) initUserPersistenceTracker();
});

function initGlobalFooterMetrics() {
    const yearSpans = document.querySelectorAll("#year-span");
    yearSpans.forEach(span => {
        span.textContent = new Date().getFullYear().toString();
    });
}

function initResponsiveNavigation() {
    const menuToggle = document.getElementById("menu-toggle");
    const primaryNav = document.getElementById("primary-nav");
    
    if (menuToggle && primaryNav) {
        menuToggle.addEventListener("click", () => {
            const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
            menuToggle.setAttribute("aria-expanded", (!isExpanded).toString());
            primaryNav.classList.toggle("open-menu");
        });
    }
}

function initClimateIndexEngine() {
    const calcButton = document.getElementById("calculate-metrics");
    if (!calcButton) return;

    calcButton.addEventListener("click", () => {
        const temp = parseFloat(document.getElementById("temp-input").value);
        const wind = parseFloat(document.getElementById("wind-input").value);
        const outputBox = document.getElementById("climate-output");

        const windChill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));
        
        let hazardStatus = "";
        let alertClass = "";

        if (windChill <= 0) {
            hazardStatus = "DANGEROUS: High risk of hypothermia. Mountain gear mandatory.";
            alertClass = "status-danger";
        } else if (windChill > 0 && windChill <= 10) {
            hazardStatus = "CAUTION: Cold wind profile. Windproof layering recommended.";
            alertClass = "status-warning";
        } else {
            hazardStatus = "NORMAL: Comfortable environmental parameters for exploration.";
            alertClass = "status-normal";
        }

        outputBox.innerHTML = `
            <div class="${alertClass}">
                <h4>Calculated Index Result</h4>
                <p>Calculated Wind Chill Profile: <strong>${windChill.toFixed(1)} °C</strong></p>
                <p>Current Hazard Matrix State: <strong>${hazardStatus}</strong></p>
            </div>
        `;
    });
}

function initHabitatDirectoryEngine() {
    const destinationsArray = [
        {
            name: "Jinja White-Water Nile Rafting",
            terrain: "river",
            location: "Jinja District, Eastern Uganda",
            description: "Experience the pure adrenaline rush of running class V rapids directly at the source of the historic Nile River."
        },
        {
            name: "Murchison Falls Wildlife Safari",
            terrain: "savanna",
            location: "Oyam Region, Northern Uganda",
            description: "Traverse golden savanna horizons featuring elephants, lions, giraffes, and cruises right up to the roaring falls bottleneck."
        },
        {
            name: "Bwindi Impenetrable Primate Trekking",
            terrain: "forest",
            location: "Kanungu District, Southwestern Uganda",
            description: "Trek through primeval ancient dense volcanic mountain rainforests to encounter the rare mountain gorilla family bands."
        },
        {
            name: "Rwenzori Alpine Peaks Climbing",
            terrain: "mountain",
            location: "Kasese District, Western Border",
            description: "Ascend the snow-capped slopes and glaciers of the fabled Mountains of the Moon, exploring unique afro-alpine ecosystems."
        }
    ];

    const gridContainer = document.getElementById("directory-grid");
    if (!gridContainer) return;

    const filterButtons = document.querySelectorAll(".filter-btn");

    const renderCards = (filteredTerrain) => {
        gridContainer.innerHTML = "";
        
        const activeItems = filteredTerrain === "all" 
            ? destinationsArray 
            : destinationsArray.filter(item => item.terrain === filteredTerrain);

        activeItems.forEach(item => {
            const cardElement = document.createElement("div");
            cardElement.className = "destination-card";
            
            cardElement.innerHTML = `
                <div class="card-details">
                    <span class="badge-tag">${item.terrain.toUpperCase()}</span>
                    <h3>${item.name}</h3>
                    <p class="card-loc">📍 ${item.location}</p>
                    <p class="card-desc">${item.description}</p>
                </div>
            `;
            gridContainer.appendChild(cardElement);
        });
    };

    filterButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            filterButtons.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            renderCards(e.target.getAttribute("data-terrain"));
        });
    });

    renderCards("all");
}

function initUserPersistenceTracker() {
    const messageContainer = document.getElementById("visit-message");
    if (!messageContainer) return;

    const lastVisitTimestamp = localStorage.getItem("explore-uganda-visit-key");
    const currentTimestamp = Date.now();

    if (!lastVisitTimestamp) {
        messageContainer.innerHTML = `<p class="welcome-badge">🌟 Welcome to the platform! This is your inaugural visit to Explore Uganda.</p>`;
    } else {
        const structuralDaysDifference = Math.floor((currentTimestamp - parseInt(lastVisitTimestamp)) / (1000 * 60 * 60 * 24));
        
        if (structuralDaysDifference < 1) {
            messageContainer.innerHTML = `<p class="welcome-badge">⚡ Welcome back! Glad you returned to plan your safari clusters today.</p>`;
        } else {
            messageContainer.innerHTML = `<p class="welcome-badge">📅 Welcome back adventurer! Your last session on this platform was ${structuralDaysDifference} day${structuralDaysDifference === 1 ? '' : 's'} ago.</p>`;
        }
    }
    
    localStorage.setItem("explore-uganda-visit-key", currentTimestamp.toString());
}
