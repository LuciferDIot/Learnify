const qty_1 = document.getElementById("book1-qty");
const labelQty_1 = document.getElementById("count-1");
const price_1 = document.getElementById("price-1");

const qty_2 = document.getElementById("book2-qty");
const labelQty_2 = document.getElementById("count-2");
const price_2 = document.getElementById("price-2");

const qty_3 = document.getElementById("book3-qty");
const labelQty_3 = document.getElementById("count-3");
const price_3 = document.getElementById("price-3");

const qty_4 = document.getElementById("book4-qty");
const labelQty_4 = document.getElementById("count-4");
const price_4 = document.getElementById("price-4");

const qty_5 = document.getElementById("book5-qty");
const labelQty_5 = document.getElementById("count-5");
const price_5 = document.getElementById("price-5");

var totalPriceElement = document.querySelectorAll(".total-price");
const submitElement = document.getElementById("submit");
const form = document.getElementById("prerequest-details");
const checkBox = document.getElementById("express");

var errorContactElement = document.getElementById('error');
const phoneNumber = document.getElementById('phone');
const email = document.getElementById('email');
const expressDelivery = document.getElementById("express");
const proceedCheck = document.getElementById("proceed-topic");

qty_1.addEventListener("input", handleQTYChange);
qty_2.addEventListener("input", handleQTYChange);
qty_3.addEventListener("input", handleQTYChange);
qty_4.addEventListener("input", handleQTYChange);
qty_5.addEventListener("input", handleQTYChange);

var totalPrice = 0.0;
submitElement.disabled = true;
form.style.opacity = "0.5";
var isExpressSelected = false;

const book1 = {
    name:"Our village",
    author: "Martin Wickramasinghe",
    price: 189,
    img:"./assets/apegama.jpeg"
};
const book2 = {
    name:"Kali Yugaya",
    author: "Martin Wickramasinghe",
    price: 289,
    img:"./assets/kaliyugaya.jpeg"
};
const book3 = {
    name:"The mirage",
    author: "Martin Wickramasinghe",
    price: 309,
    img:"./assets/miringuwa.jpeg"
};
const book4 = {
    name:"Gamperaliya",
    author: "Martin Wickramasinghe",
    price: 589,
    img:"./assets/gamperaliya.jpg"
};
const book5 = {
    name:"Viragaya",
    author: "Martin Wickramasinghe",
    price: 400,
    img:"./assets/viragaya.jpeg"
};

const books = Array.of(book1, book2, book3, book4, book5);
console.log(books.length);
for (let i = 0; i < books.length; i++) {
    const name = document.getElementById('name-'+(i+1));
    const count = document.getElementById('count-'+(i+1));
    const price = document.getElementById('price-'+(i+1));

    name.textContent = books[i].name;
    count.textContent = 0;
    price.textContent = "0.00/-";
    console.log(name.textContent);
}

function handleQTYChange(event){
    const element = event.target;
    var quantity = element.value;

    if(quantity=="" || quantity<=0 || quantity===NaN) {
        element.value =0;
        quantity = 0;
    }else{
        element.value = parseInt(quantity, 10);
    }

    if(element.id==="book1-qty"){
        labelQty_1.textContent = parseInt(quantity, 10);
        const formattedPrice = (book1.price*quantity).toFixed(2);
        price_1.textContent = formattedPrice+"/-";
    }

    else if(element.id==="book2-qty"){
        labelQty_2.textContent = quantity;
        const formattedPrice = (book2.price*quantity).toFixed(2);
        price_2.textContent = formattedPrice+"/-";
    }

    else if(element.id==="book3-qty"){
        labelQty_3.textContent = quantity;
        const formattedPrice = (book3.price*quantity).toFixed(2);
        price_3.textContent = formattedPrice+"/-";
    }

    else if(element.id==="book4-qty"){
        labelQty_4.textContent = quantity;
        const formattedPrice = (book4.price*quantity).toFixed(2);
        price_4.textContent = formattedPrice+"/-";
    }

    else if(element.id==="book5-qty"){
        labelQty_5.textContent = quantity;
        const formattedPrice = (book5.price*quantity).toFixed(2);
        price_5.textContent = formattedPrice+"/-";
    }

    totalDisplay();

}

function totalDisplay(){
    totalPrice =    parseFloat(price_1.textContent.replace("/-", "").trim()) + 
                    parseFloat(price_2.textContent.replace("/-", "").trim()) + 
                    parseFloat(price_3.textContent.replace("/-", "").trim()) + 
                    parseFloat(price_4.textContent.replace("/-", "").trim()) + 
                    parseFloat(price_5.textContent.replace("/-", "").trim());

    if(totalPrice>0){
        const formattedPrice = totalPrice.toFixed(2);

        for (let i = 0; i < totalPriceElement.length; i++) {
            totalPriceElement[i].textContent = formattedPrice+"/-";
        }
        submitElement.disabled = false;
        form.style.opacity = "1";
    }
    
    else{
        for (let i = 0; i < totalPriceElement.length; i++) {
            totalPriceElement[i].textContent = "0.00/-";
        }
        submitElement.disabled = true;
        form.style.opacity = "0.5";
    }

}


function expressClicked(){
    if(isExpressSelected){
        totalPrice = totalPrice - 300;
        isExpressSelected = false;
    }
    else{
        totalPrice = totalPrice + 300;
        isExpressSelected = true;
    }

    const formattedPrice = totalPrice.toFixed(2);

    for (let i = 0; i < totalPriceElement.length; i++) {
        totalPriceElement[i].textContent = formattedPrice+"/-";
    }
}

function submitContact(){
    if(!emailValidation()){
        showError(errorContactElement,"Look like phone number is not completed", "red");
        console.log("Look like phone number is not completed");
    }
    else if(!phoneNumberValidation()){
        showError(errorContactElement,"Look like email is not completed", "red");
        console.log("Look like email is not completed");
    }
    else{
        let text = phoneNumber.value;
        localStorage.setItem("phoneNumber", text);

        text = email.value;
        localStorage.setItem("email", text);
        
        localStorage.setItem("totalPrice", totalPrice);

        window.location.href = "../Checkout/checkout.html";
    }
}

function cancelBuy(){
    history.back();
}

function phoneNumberValidation(){
    let text = phoneNumber.value;
    if(!checkEmpty(text, errorContactElement, "Phone Number") && !isNaN(text)){
        if(text.length==10){
            showError(errorContactElement,"Look like phone number is correct", "aqua");
            return true;
        }else {
            showError(errorContactElement,"Number of digits should be 10", "red");
            return false;
        }
    }else{
        showError(errorContactElement,"The phone number must contain only digits", "red");
        return false;
    }
}

function emailValidation(){
    let text = email.value;
    if(!checkEmpty(text, errorContactElement, "Email")){
        if(text.includes('@') && text.includes('.')){
            showError(errorContactElement,"Look like email is correct", "aqua");
            return true;
        }else{
            showError(errorContactElement,"Enter a correct email", "red");
            return false;
        }
    }
}

function showError(element2, message, color){
    element2.textContent = message;
    element2.style.color = color;
    setTimeout( function(){
        element2.textContent = "";
    }, 10000);

}

function checkEmpty(text, element2, message){
    if(text.length==0) {
        showError(element2, message+" field is empty", "red");
        return true;
    }
    else return false;
}