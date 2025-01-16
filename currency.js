
function convertCurrency() {
    const value = document.getElementById('value').value;
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    if (value === "") {
        alert("Please enter a value to convert.");
        return;
    }

    // Placeholder conversion rates (replace with real API calls)
    const rates = {
        "USD": 1,
        "EUR": 0.85,
        "GBP": 0.75,
        "JPY": 110.5,
        "AUD": 1.35,
        "CAD": 1.25,
        "INR": 83.5,
        "CNY": 6.5,
        "PKR": 285, // Example exchange rate for PKR
        "SAR": 3.75 // Example exchange rate for SAR
    };

    if (!rates[fromUnit] || !rates[toUnit]) {
        alert("Currency not supported.");
        return;
    }

    const convertedAmount = (value * rates[toUnit]) / rates[fromUnit];

    document.getElementById('result').innerText = convertedAmount.toFixed(2);
}
