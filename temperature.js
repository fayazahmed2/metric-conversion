function convertTemperature() {
    const value = parseFloat(document.getElementById('value').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    if (isNaN(value)) {
        alert('Please enter a valid number');
        return;
    }

    let result;

    // Convert the value to Celsius first
    if (fromUnit === 'F') {
        value = (value - 32) * (5 / 9); // Fahrenheit to Celsius
    } else if (fromUnit === 'K') {
        value = value - 273.15; // Kelvin to Celsius
    }

    // Convert the Celsius value to the target unit
    if (toUnit === 'F') {
        result = (value * (9 / 5)) + 32; // Celsius to Fahrenheit
    } else if (toUnit === 'K') {
        result = value + 273.15; // Celsius to Kelvin
    } else {
        result = value; // Celsius to Celsius
    }

    // Display the result
    document.getElementById('result').textContent = result.toFixed(2);
}
