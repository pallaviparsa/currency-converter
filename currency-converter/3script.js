const exchangeRates = {
  USD: { USD: 1, INR: 83.25, EUR: 0.93, GBP: 0.79 },
  INR: { INR: 1, USD: 0.012, EUR: 0.011, GBP: 0.0095 },
  EUR: { EUR: 1, USD: 1.08, INR: 89.0, GBP: 0.85 },
  GBP: { GBP: 1, USD: 1.26, INR: 104.5, EUR: 1.17 },
};

function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = document.getElementById("from-currency").value;
  const toCurrency = document.getElementById("to-currency").value;

  if (isNaN(amount)) {
    alert("Please enter a valid amount.");
    return;
  }

  const rate = exchangeRates[fromCurrency][toCurrency];
  const converted = amount * rate;
  document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${converted.toFixed(2)} ${toCurrency}`;
}
