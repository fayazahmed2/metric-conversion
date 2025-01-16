function convert() {
    const value = parseFloat(document.getElementById('value').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    if (isNaN(value)) {
        alert('Please enter a valid number');
        return;
    }

    let valueInSqMeters;

    // Convert the input value to square meters first
    if (fromUnit === 'sq_km') {
        valueInSqMeters = value * 1e6; // Square Kilometers to Square Meters
    } else if (fromUnit === 'sq_cm') {
        valueInSqMeters = value * 1e-4; // Square Centimeters to Square Meters
    } else if (fromUnit === 'sq_mm') {
        valueInSqMeters = value * 1e-6; // Square Millimeters to Square Meters
    } else if (fromUnit === 'sq_ft') {
        valueInSqMeters = value * 0.092903; // Square Feet to Square Meters
    } else if (fromUnit === 'sq_yd') {
        valueInSqMeters = value * 0.836127; // Square Yards to Square Meters
    } else if (fromUnit === 'ac') {
        valueInSqMeters = value * 4046.85642; // Acres to Square Meters
    } else if (fromUnit === 'sq_mi') {
        valueInSqMeters = value * 2.589988e6; // Square Miles to Square Meters
    } else {
        valueInSqMeters = value; // Square Meters to Square Meters
    }

    let convertedValue;

    // Convert from square meters to the target unit
    if (toUnit === 'sq_km') {
        convertedValue = valueInSqMeters * 1e-6; // Square Meters to Square Kilometers
    } else if (toUnit === 'sq_cm') {
        convertedValue = valueInSqMeters * 1e4; // Square Meters to Square Centimeters
    } else if (toUnit === 'sq_mm') {
        convertedValue = valueInSqMeters * 1e6; // Square Meters to Square Millimeters
    } else if (toUnit === 'sq_ft') {
        convertedValue = valueInSqMeters * 10.7639; // Square Meters to Square Feet
    } else if (toUnit === 'sq_yd') {
        convertedValue = valueInSqMeters * 1.19599; // Square Meters to Square Yards
    } else if (toUnit === 'ac') {
        convertedValue = valueInSqMeters * 2.47105e-4; // Square Meters to Acres
    } else if (toUnit === 'sq_mi') {
        convertedValue = valueInSqMeters * 3.861e-7; // Square Meters to Square Miles
    } else {
        convertedValue = valueInSqMeters; // Square Meters to Square Meters
    }

    // Display the converted area
    document.getElementById('result').textContent = convertedValue.toFixed(2);
}
