document.querySelectorAll('.add-to-cart').forEach(b =>{
    b.addEventListener('click' , addToCart);
});



function addToCart(event){
    event.preventDefault();
    const productId = event.target.dataset.id;


    let cart = JSON.parse(localStorage.getItem('cart'))|| {};


    cart[productId] = (cart[productId]|| 0) + 1;


    updatecartQuantity(cart);


    localStorage.setItem('cart', JSON.stringify(cart));
}


function updatecartQuantity(cart){
    const cartQuantity = Object.values(cart).reduce((acc,val)=>acc+ val,0);
    document.getElementById('cart-quantity').textContent = cartQuantity;
}



const initCart = JSON.parse(localStorage.getItem('cart'))||{};
updatecartQuantity(initCart);