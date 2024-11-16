// JavaScript Code for Cart and Modal Management

// Array to store cart items
let cart = [];

// Open Sign-In Modal
function openSignInModal() {
    document.getElementById('signInModal').style.display = 'block';
}

// Close Sign-In Modal
function closeSignInModal() {
    document.getElementById('signInModal').style.display = 'none';
}

// Sign-In Function
function signIn() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Perform a mock sign-in
    if (username && password) {
        alert('Signed in successfully');
        closeSignInModal();
    } else {
        alert('Please enter valid credentials');
    }
}

// Open Cart Modal
function openCart() {
    document.getElementById('cartModal').style.display = 'block';
    updateCartDisplay();
}

// Close Cart Modal
function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

// Add to Cart Function
function addToCart(productName, price) {
    const item = { productName, price };
    cart.push(item);
    updateCartCount();
}

// Update Cart Count
function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

// Update Cart Display in Modal
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear previous items

    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.productName} - Rs${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    document.getElementById('cart-total').innerText = total;
}

// Checkout Function
function checkout() {
    if (cart.length > 0) {
        alert(`Thank you for your purchase! Total amount: Rs${document.getElementById('cart-total').innerText}`);
        cart = []; // Clear the cart after checkout
        closeCart();
        updateCartCount();
    } else {
        alert('Your cart is empty');
    }
}

// Event Listeners for Close Buttons in Modals
document.querySelectorAll('.close').forEach(button => {
    button.addEventListener('click', function () {
        this.parentElement.parentElement.style.display = 'none';
    });
});
// Open and close Contact Modal
function openContactModal(message) {
    document.getElementById('modalMessage').innerText = message;
    document.getElementById('contactModal').style.display = 'block';
}

function closeContactModal() {
    document.getElementById('contactModal').style.display = 'none';
}

// Submit Contact Form
function submitContactForm(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    if (name && email && message) {
        // Show success message in modal
        openContactModal(`Thank you, ${name}! Your message has been received.`);
        
        // Clear form fields
        document.getElementById('contactForm').reset();
    } else {
        openContactModal('Please fill out all fields.');
    }
}

// Event Listener for Close Button in Contact Modal
document.querySelector('#contactModal .close').addEventListener('click', closeContactModal);