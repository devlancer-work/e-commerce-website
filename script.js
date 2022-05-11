

// cart
var cart = document.getElementById('cart')
var cartIcon = document.getElementById('cartIcon');
var cartClose = document.querySelector('.cart-btn-close');

cartClose.addEventListener('click', () => {
    cart.classList.add('cart-hide')
})

cartIcon.addEventListener('click', () => {
    if(cart.classList.contains('cart-hide')){
        cart.classList.remove('cart-hide')
    }else {
        cart.classList.add('cart-hide')
    }
})

// add to cart class in all product - click - pick up the parent class or the whole item

var addToCart = document.querySelectorAll('.addToCart')
addToCart.forEach(atc => {
    atc.addEventListener('click', () => {
        const cartItem = atc.parentElement
    })
})


