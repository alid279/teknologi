// Existing JavaScript for basic cart functionality
const cart = [];

function addToCart(product) {
    cart.push(product);
    alert(`${product.name} added to cart!`);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartContainer = document.querySelector('.shopping-cart p');
    if (cart.length === 0) {
        cartContainer.textContent = 'Your cart is currently empty.';
    } else {
        cartContainer.textContent = `You have ${cart.length} item(s) in your cart.`;
    }
}

function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty. Add some items before proceeding to checkout.');
        return;
    }
    window.location.href = 'checkout.html';
}

// Example function for adding a product to the cart
function exampleAddProductToCart() {
    addToCart({ name: 'Product 1' });
}

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            
            // Form data processing
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }

            // Normally you would send the data to a server here
            // Example:
            // fetch('/submit-form', {
            //     method: 'POST',
            //     body: formData
            // })
            // .then(response => response.json())
            // .then(data => console.log(data))
            // .catch(error => console.error('Error:', error));
            
            alert('Your message has been sent!');
            contactForm.reset(); // Clear the form
        });
    }
});

// Example function to dynamically load Google Maps or other map service
function loadMap() {
    const mapContainer = document.querySelector('.map-container iframe');
    if (mapContainer) {
        mapContainer.src = 'https://www.google.com/maps/embed/v1/place?q=Your+Location&key=YOUR_API_KEY';
    }
}

// Call loadMap on page load if needed
document.addEventListener('DOMContentLoaded', loadMap);