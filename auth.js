import{auth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "./firebase.js";
const signupForm = document.getElementById('signupForm');
const signupStatus = document.getElementById('signupStatus');


signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        signupStatus.innerHTML = '✅ User signed up successfully!';
    } catch (error) {
        console.error('Error:', error.message);
        signupStatus.innerHTML = `❌ ${error.message}`;
    }
});


let cart = [];


document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.closest('.product');
        const id = product.dataset.id;
        const name = product.querySelector('h3').innerText;
        const price = product.querySelector('p').innerText.replace('Price: $', '');

        const item = { id, name, price };
        cart.push(item);

        updateCartUI();
        saveCartToFirebase();
    });
});


function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });

    cartCount.innerText = cart.length;
}

// Save Cart to Firebase
function saveCartToFirebase() {
    db.collection('carts').doc('user_cart').set({
        cartItems: cart,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        console.log('Cart saved to Firebase');
    })
    .catch(error => {
        console.error('Error saving cart:', error);
    });
}

// Checkout
document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    alert('Checkout successful!');
    cart = [];
    updateCartUI();
    saveCartToFirebase();
});

