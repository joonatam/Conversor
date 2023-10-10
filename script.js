
function conversor() {
    let celsius = parseFloat(document.getElementById("celsiusInput").value);

    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;

    document.getElementById("fahrenheitResult").textContent = fahrenheit + ".";
    document.getElementById("kelvinResult").textContent = kelvin.toFixed(2);
}