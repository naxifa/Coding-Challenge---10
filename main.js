

// Task 2 - Add Event Listeners for Product Selection 

const selectSize = document.getElementById("select-size");
const productPrice = document.getElementById("product-price");

selectSize.addEventListener("change", function(event) {
    const selectedOption = event.target.selectedOptions[0];
    const price = selectedOption.getAttribute("data-price");
    
        // Update the product price displayed
        productPrice.textContent = `Price - $${price}.00`;
    });



    // Task 3 - Handle Stock Availability

// Accessing HTML elements
const stockStatus = document.getElementById("stock-status");
const purchaseButton = document.getElementById("purchase-button");



// Add change event listener to size dropdown
sizeSelect.addEventListener("change", function(event) {
    const selectedSize = event.target.value;
    const selectedStock = stock[selectedSize];

    // Update the product price based on selected size
    productPrice.textContent = `$${selectedStock.price}.00`;

    // Update stock status and enable/disable purchase button
    if (selectedStock.available > 0) {
        stockStatus.textContent = "In Stock";
        purchaseButton.disabled = false;
    } else {
        stockStatus.textContent = "Out of Stock";
        purchaseButton.disabled = true;
    }
});


