document.addEventListener("DOMContentLoaded", () => {
    // 1. Structural Metric Execution Data Setup
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastmodified").textContent = document.lastModified;

    // 2. Weather Elements Calculation Pipeline
    const temperature = parseFloat(document.getElementById("temp").textContent);
    const windSpeed = parseFloat(document.getElementById("wind").textContent);
    const windChillDisplay = document.getElementById("windchill");

    // Enforce logic validation check bounds: Temp <= 10 °C AND Wind Speed > 4.8 km/h
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChillCalculation = calculateWindChill(temperature, windSpeed);
        windChillDisplay.textContent = `${windChillCalculation.toFixed(1)} °C`;
    } else {
        windChillDisplay.textContent = "N/A";
    }
});

// Precise single-line arrow expression mapping standard Metric calculation factors
const calculateWindChill = (t, s) => 13.12 + (0.6215 * t) - (11.37 * Math.pow(s, 0.16)) + (0.3965 * t * Math.pow(s, 0.16));
