function convertCurrency() {
    const value = parseFloat(document.getElementById('value').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    if (isNaN(value)) {
        alert('Please enter a valid number');
        return;
    }

    // Example exchange rates (static rates)
    const exchangeRates = {
        USD: 1,
        EUR: 0.94,
        GBP: 0.82,
        JPY: 138.15,
        AUD: 1.55,
        CAD: 1.36,
        INR: 83.27,
        CNY: 7.29
    };

    // Convert the value to USD first
    const valueInUSD = value / exchangeRates[fromUnit];

    // Convert the value from USD to the target currency
    const convertedValue = valueInUSD * exchangeRates[toUnit];

    // Display the result
    document.getElementById('result').textContent = convertedValue.toFixed(2);
}
