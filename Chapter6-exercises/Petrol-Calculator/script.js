// Calculate total petrol cost
function calculateTotal() {
    let price = parseFloat(document.getElementById("pricePerLiter").value);
    let liters = parseFloat(document.getElementById("liters").value);

    let total = price * liters;

    document.getElementById("result").innerText =
        "Total: £" + total.toFixed(2);
}