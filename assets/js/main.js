//console.log('test');

const forKm = 0.21

const inputElementName = document.getElementById('name_surname');

const inputElementKm = document.getElementById('km');

const inputElementAge = document.getElementById('age');

let price = inputElementKm * forKm

document.getElementById('generate_btn').addEventListener('click', function () {
    console.log(inputElementName.value, inputElementKm.value, inputElementAge.value);
})


if (inputElementAge < 18) {
    const discountLess = 0.2
    price = ((price - price * discountLess).toFixed(2));
} else if (inputElementAge > 65) {
    const discountOver = 0.4
    price = ((price - price * discountOver).toFixed(2));
}

console.log(`${price}\u20AC`);

