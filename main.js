

// Task 2 - Add Event Listeners for Product Selection 

let selectSize = document.getElementById("select-size");
let productPrice = document.getElementById("product-price");
let purchaseButton = document.getElementById("purchase-button");

selectSize.addEventListener("click", (event) => {
    let selectedOption = event.target.selectedOptions[0];
    let price = selectedOption.getAttribute("data-price");
    
        // Update the product price displayed
        productPrice.textContent = `$${price}.00`;
    });


    // Task 3 - Handle Stock Availability

    