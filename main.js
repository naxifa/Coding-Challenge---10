

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

const stockStatus = document.getElementById("stock-status");
const purchaseButton = document.getElementById("purchase-button");

selectSize.addEventListener("change", function(event) {
    const selectedOption = event.target.selectedOptions[0];
    const stock = Number(selectedOption.getAttribute("data-stock")); 


    // Update stock status and enable/disable purchase button based on stock
    if (stock > 0) {
        stockStatus.textContent = "In Stock";
        purchaseButton.disabled = false;
    } else {
        stockStatus.textContent = "Out of Stock";
        purchaseButton.disabled = true;

    // Display message if product is out of stock
    alert("Sorry, this product is currently out of stock.");

    }
});


// Task 4 - Create a Checkout Event

purchaseButton.addEventListener("click", function() {
    const selectedOption = selectSize.selectedOptions[0];
    const stock = Number(selectedOption.getAttribute("data-stock"));

    // Alert message will pop up if purchase was successful
    if (stock > 0) {
        alert("Purchase successful!");
    } 
});


