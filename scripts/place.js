// Footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified();

// Static Weather Values
const temperature = 8;
const windSpeed = 10;

// Display Static Values
document.getElementById("temperature").textContent = temperature;
document.getElementById("windspeed").textContent = windSpeed;

// Wind Chill Function
function calculateWindChill(temp, speed) {
    return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16))).toFixed(1) + " °C";
}

// Display Wind Chill
const windChill = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChill.textContent = calculateWindChill(temperature, windSpeed);
} else {
    windChill.textContent = "N/A";
}