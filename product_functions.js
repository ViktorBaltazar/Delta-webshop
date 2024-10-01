var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if(MenuItems.style.maxHeight == "0px") {
            MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}

var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclick = function() {
    ProductImg.src = SmallImg[0].src;
}

SmallImg[1].onclick = function() {
    ProductImg.src = SmallImg[1].src;
}

SmallImg[2].onclick = function() {
    ProductImg.src = SmallImg[2].src;
}

SmallImg[3].onclick = function() {
    ProductImg.src = SmallImg[3].src;
}


        const checkoutInfo = document.querySelector('.checkout-info');
        const totalAmount = document.getElementById('total-amount');

        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        function displayCheckoutCart() {
            checkoutInfo.innerHTML = ''; 

            let total = 0;
            cart.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.textContent = `${item.name} - Quantity: ${item.quantity} - Size: ${item.size} - Price: €${(item.price * item.quantity).toFixed(2)}`;
                total += item.price * item.quantity;
                checkoutInfo.appendChild(itemDiv);
            });
            totalAmount.textContent = `Total: €${total.toFixed(2)}`;
        }
        displayCheckoutCart();
        document.getElementById('complete-checkout').addEventListener('click', function() {
            localStorage.removeItem('cart');
            alert('Order completed! Thank you for your purchase.Your order number is #554654358.');
        });
    /*---------*/
    function addToCart(productName, price) {
        const sizeSelect = document.getElementById('sizeSelect');
        const quantityInput = document.getElementById('quantityInput');
    
        const selectedSize = sizeSelect.options[sizeSelect.selectedIndex].text;
        const selectedQuantity = parseInt(quantityInput.value);
    
        if (selectedSize === 'Select size') {
            alert('Please select a size before adding to the cart.');
            return;
        }
        const selectedProduct = {
            name: productName,
            price: price,
            size: selectedSize,
            quantity: selectedQuantity,
        };
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
        const existingProductIndex = cart.findIndex(
            (product) => product.name === productName && product.size === selectedSize
        );
        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += selectedQuantity;
        } else {
            cart.push(selectedProduct);
        }
    
        localStorage.setItem('cart', JSON.stringify(cart));
    
        alert(`Added ${selectedQuantity} x ${selectedSize} - ${productName} to the cart. Total price: $${(price * selectedQuantity).toFixed(2)}`);
    }



    /*-----------forma---------*/

    
    document.querySelector('.form-container').addEventListener('submit', function(event) {
        event.preventDefault(); 
        localStorage.removeItem('cart');

        const orderNumber = '#' + Math.floor(100000000 + Math.random() * 900000000);

        const checkoutInfo = document.querySelector('.checkout-info');
        checkoutInfo.innerHTML = `
            <h2>Your order is completed.</h2>
            <p>Thank you for your support and trust, feel free to reach out to us if you have any questions.</p>
            <h3 style="margin-bottom: 100px;">Your order number is: ${orderNumber}</h3>
        `;
        document.querySelector('.form-container').style.display = 'none';
    });

