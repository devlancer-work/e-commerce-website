

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
        itemToCart(cartItem)
    })
})


function itemToCart(cartItem){
    const itemImg = cartItem.querySelector('.featured-img img').src
    const itemName = cartItem.querySelector('.product-name').textContent
    const itemPrice = cartItem.querySelector('.product-price').textContent
    console.log(itemName, itemPrice, itemImg)

//     //<div class="cart-item row mb-4">
//           <div class="col-3">
//              <img src="./img/product-1.jpg" alt="cart-item-1" class="cart-image">
//          </div>
//          <div class="col-6 d-flex flex-column px-2 justify-content-center align-items-start">
//              <h3 class="cart-title mb-2">
//                  Sneakers
//              </h3>
//              <p class="cart-price">
//                  $20.45
//              </p>
//          </div>
//          <div class="col-3 d-flex align-items-center">
//              <a href="#" class="btn cart-btn-remove btn-danger">Remove</a>
//          </div>
//        </div>

    const newCartItem = `<div class="cart-item row mb-4">
                            <div class="col-3">
                            <img src="${itemImg}" alt="cart-item-1" class="cart-image">
                            </div>
                            <div class="col-6 d-flex flex-column px-2 justify-content-center align-items-start">
                                <h3 class="cart-title mb-2">
                                    ${itemName}
                                </h3>
                                <p class="cart-price">
                                    ${itemPrice}
                                </p>
                            </div>
                            <div class="col-3 d-flex align-items-center">
                                <a class="btn cart-btn-remove btn-danger">Remove</a>
                            </div>
                        </div>`


    document.querySelector('.cart-item-list').innerHTML += newCartItem
}

// remove item from cart

var removeItemBtn = document.querySelectorAll('.cart-btn-remove');
removeItemBtn.forEach(btn => {
    
})
