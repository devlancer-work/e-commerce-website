
// cart
var cart = document.getElementById('cart')
var fav = document.getElementById('favorite')
var cartIcon = document.getElementById('cartIcon');
var cartClose = document.querySelector('.cart-btn-close');
var favClose = document.querySelector('.fav-btn-close')
var favIcon = document.getElementById('favIcon')

window.addEventListener('DOMContentLoaded', ready)

function ready()
{



// cart 
    cartIcon.addEventListener('click', () => {
        if(cart.classList.contains('cart-hide')){
            cart.classList.remove('cart-hide')
            cartClose.addEventListener('click', () => {
                cart.classList.add('cart-hide')
            })
        }else {
            cart.classList.add('cart-hide')
        }
    })

// favorite
    favIcon.addEventListener('click', () => {
        if(fav.classList.contains('cart-hide')){
            fav.classList.remove('cart-hide')
            favClose.addEventListener('click', () => {
                fav.classList.add('cart-hide')
            })
        }else {
            fav.classList.add('cart-hide')
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

    // add to fav

    var addToFav = document.querySelectorAll('.addToFav')
    addToFav.forEach(atf => {
        atf.addEventListener('click', ()=> {
            const favItem = atf.parentElement
            itemToFav(favItem)
        })
    })

}


// add to cart - fxn

function itemToCart(cartItem){
    const itemImg = cartItem.querySelector('.featured-img img').src
    const itemName = cartItem.querySelector('.product-name').textContent
    const itemPrice = cartItem.querySelector('.product-price').textContent
    // console.log(itemName, itemPrice, itemImg)

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

    updateCart()
    document.querySelectorAll('.cart-btn-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const parentEle = e.target.parentElement.parentElement
            parentEle.remove()
            updateCart()
        })
    })

}

// add to fav - fxn

function itemToFav(cartItem){
    const itemImg = cartItem.querySelector('.featured-img img').src
    const itemName = cartItem.querySelector('.product-name').textContent
    const itemPrice = cartItem.querySelector('.product-price').textContent
    console.log(itemName, itemPrice, itemImg)


    const newfavItem = `<div class="cart-item row mb-4">
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
                                <a class="btn fav-btn-remove btn-danger">Remove</a>
                            </div>
                        </div>`


    document.querySelector('.fav-item-list').innerHTML += newfavItem
    document.querySelectorAll('.fav-btn-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const parentEle = e.target.parentElement.parentElement
            parentEle.remove()
            updateCart()
        })
    })

}


// update cart

function updateCart(){
    var sumTotalAmont = 0;

    document.querySelectorAll('.cart-price').forEach(product => {
        const productPrice = parseFloat(product.textContent.replace('$', ''))
        sumTotalAmont += productPrice
    })

    sumTotalAmont = Math.round(sumTotalAmont * 100) / 100
    document.querySelector('.total-amount').innerText = `$ ${sumTotalAmont}`
}