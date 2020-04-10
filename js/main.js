const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".model");
const close = document.querySelector(".close");
const isclose= document.querySelector('.is-close');

cartButton.addEventListener('click',function (event){
    modal.classList.add('is-open');
})
close.addEventListener('click', function(event){
    modal.classList.remove('is-open');
})
isclose.addEventListener('click', function(event){
    modal.classList.remove('is-open');
})

new WOW().init();