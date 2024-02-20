//console.log('test');

const forKm = 0.21
//price for km

const inputElementName = document.getElementById('name_surname');
//input name of passenger

const inputElementKm = document.getElementById('km');
//input km 

const inputElementAge = document.getElementById('age');
//input age of passenger

document.getElementById('generate_btn').addEventListener('click', function () {

    console.log(inputElementName.value, inputElementKm.value, inputElementAge.value);
    //get value of input

    let price = inputElementKm.value * forKm
    //calc price standart

    if (inputElementAge < 18) {
        const discountLess = 0.2
        price = ((price - price * discountLess).toFixed(2));
        //calc price for less 18
    } else if (inputElementAge > 65) {
        const discountOver = 0.4
        price = ((price - price * discountOver).toFixed(2));
        //calc price for over 65
    }
    const finalPrice = `${price}\u20AC`

    console.log(finalPrice);
    //final price in human form

    document.getElementById("name_passenger").innerHTML = inputElementName.value;
    //stamp name of passenger

    let randomOneNumber =  ;

    document.getElementById("carriage_number").innerHTML = randomOneNumber;

    
    document.getElementById("your_price").innerHTML = finalPrice;
    //stamp price of ticket

})

document.getElementById('reset_btn').addEventListener('click', function (){

    inputElementName.value = null
    inputElementKm.value = null
    inputElementAge.value = null
    
})








