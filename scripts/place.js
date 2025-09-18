// place.js

// Dynamic Footer Content
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified.toDateString()}`;

// Windchill Calculation Logic
function calculateWindChill(temp, speed) {
    if (temp <= 10 && speed > 4.8) {
        // Metric windchill formula
        const windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
        return windChill.toFixed(2); // Return a string with 2 decimal places
    } else {
        return "N/A";
    }
}

// Static values for temperature and wind speed
const temperature = 32; // °C
const windSpeed = 8; // km/h

// Get the element to display the windchill value
const windChillElement = document.getElementById('wind-chill-value');

// Call the function and update the DOM
windChillElement.textContent = calculateWindChill(temperature, windSpeed);