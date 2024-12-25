function convertVolume() {
    const value = parseFloat(document.getElementById('value').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    if (isNaN(value)) {
        alert('Please enter a valid number');
        return;
    }

    // Conversion rates (from cubic meter as base unit)
    const conversions = {
        m3: 1,
        l: 1000,
        ml: 1000000,
        gal: 264.172,
        fl_oz: 33814.0227,
        cup: 4226.75284,
        pt: 2113.37642,
        qt: 1056.68821
    };

    // Convert the value to cubic meters first
    const valueInM3 = value / conversions[fromUnit];

    // Convert the value from cubic meters to the target unit
    const convertedValue = valueInM3 * conversions[toUnit];

    // Display the result
    document.getElementById('result').textContent = convertedValue.toFixed(4);
}
