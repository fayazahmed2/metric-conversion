function convertMass() {
    const value = parseFloat(document.getElementById('value').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    if (isNaN(value)) {
        alert('Please enter a valid number');
        return;
    }

    // Conversion rates (from kg as base unit)
    const conversions = {
        kg: 1,
        g: 1000,
        mg: 1000000,
        lb: 2.20462,
        oz: 35.274,
        st: 0.157473
    };

    // Convert the value to kilograms first
    const valueInKg = value / conversions[fromUnit];

    // Convert the value from kilograms to the target unit
    const convertedValue = valueInKg * conversions[toUnit];

    // Display the result
    document.getElementById('result').textContent = convertedValue.toFixed(4);
}
