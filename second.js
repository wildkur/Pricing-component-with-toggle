const toggle = document.querySelector('#toggle');
const priceOne = document.querySelector('#price-one');
const priceTwo = document.querySelector('#price-two');
const priceThree = document.querySelector('#price-three');

function changePrices() {
    if(toggle.checked == true) {
        priceOne.innerHTML = '10'
        priceTwo.innerHTML = '20'
        priceThree.innerHTML = '30'
    }
    else {
        priceOne.innerHTML = '100'
        priceTwo.innerHTML = '200'
        priceThree.innerHTML = '300'
    }
}

toggle.addEventListener('click', changePrices)
