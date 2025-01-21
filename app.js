// Calculator 1
document.getElementById("calculate-1").addEventListener("click", () => {
    const basePrice = parseFloat(document.getElementById("base-price-1").value) || 0;
    const squareFeet = parseFloat(document.getElementById("square-feet-1").value) || 0;
    const bedrooms = parseInt(document.getElementById("bedrooms-1").value) || 0;
    const bathrooms = parseInt(document.getElementById("bathrooms-1").value) || 0;

    const sqftPrice = basePrice * 0.6;
    let bedPrice = (basePrice * 0.4) / (bedrooms + bathrooms) * 1.25;
    let bathPrice = bedPrice;

    const totalPrice = sqftPrice + bedPrice * bedrooms + bathPrice * bathrooms;

    document.getElementById("sqft-price-1").textContent = `Square Footage Price: $${sqftPrice.toFixed(2)}`;
    document.getElementById("bed-price-1").textContent = `Bedroom Price: $${bedPrice.toFixed(2)}`;
    document.getElementById("bath-price-1").textContent = `Bathroom Price: $${bathPrice.toFixed(2)}`;
    document.getElementById("total-price-1").textContent = `Total Price: $${totalPrice.toFixed(2)}`;
});

document.getElementById("markup-1").addEventListener("click", () => {
    markupResults("results-1");
});

// Calculator 2
document.getElementById("calculate-2").addEventListener("click", () => {
    const squareFeet = parseFloat(document.getElementById("square-feet-2").value) || 0;
    const bathrooms = parseInt(document.getElementById("bathrooms-2").value) || 0;
    const bedrooms = parseInt(document.getElementById("bedrooms-2").value) || 0;

    const sqftPrice = squareFeet * 0.10;
    let bathPrice = bathrooms * 25 * 1.25;
    let bedPrice = bedrooms * 20 * 1.25;

    const totalPrice = sqftPrice + bathPrice + bedPrice;

    document.getElementById("sqft-price-2").textContent = `Square Footage Price: $${sqftPrice.toFixed(2)}`;
    document.getElementById("bath-price-2").textContent = `Bathroom Price: $${bathPrice.toFixed(2)}`;
    document.getElementById("bed-price-2").textContent = `Bedroom Price: $${bedPrice.toFixed(2)}`;
    document.getElementById("total-price-2").textContent = `Total Price: $${totalPrice.toFixed(2)}`;
});

document.getElementById("markup-2").addEventListener("click", () => {
    markupResults("results-2");
});

// Function to markup results
function markupResults(resultsId) {
    const results = document.querySelectorAll(`#${resultsId} p`);
    results.forEach((result) => {
        const currentValue = parseFloat(result.textContent.split("$")[1]);
        result.textContent = result.textContent.split(":")[0] + `: $${(currentValue * 1.1).toFixed(2)}`;
    });
}
