function convert() {
    // Get input value and selected units
    const value = parseFloat(document.getElementById("value").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    // Conversion rates to meters (base unit)
    const conversionRates = {
        m: 1, // Meters
        km: 1000, // Kilometers
        cm: 0.01, // Centimeters
        mm: 0.001, // Millimeters
        mi: 1609.34, // Miles
        yd: 0.9144, // Yards
        ft: 0.3048 // Feet
    };

    // Convert input to meters
    let valueInMeters = value * conversionRates[fromUnit];

    // Convert meters to the target unit
    let result = valueInMeters / conversionRates[toUnit];

    // Display the result
    document.getElementById("result").innerText = result.toFixed(4);
}
