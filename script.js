function convert() {
    // Get input value and selected units
    const value = parseFloat(document.getElementById("value").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    // Conversion factors
    const conversionRates = {
        sq_m: 1, // Square meters is the base unit
        sq_km: 1e6, // 1 square kilometer = 1,000,000 square meters
        sq_ft: 0.092903, // 1 square foot = 0.092903 square meters
        sq_mi: 2.58999e6 // 1 square mile = 2,589,990 square meters
    };

    // Convert the input value to square meters
    let valueInSqM = value * conversionRates[fromUnit];

    // Convert the value in square meters to the target unit
    let result = valueInSqM / conversionRates[toUnit];

    // Display the result
    document.getElementById("result").innerText = result.toFixed(4);
}
