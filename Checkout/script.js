// address form attributes

let showAddress = "";
var isEditClicked = false;
var arrow_image_element;
var edit_keyword_element;
var address_display_element;
var form_container_element;

addressObject = {
    address1: "",
    address2: "",
    address3: "",
    town: "",
    state: "",
    postalcode: "",
    country: ""
};


//contact details form attributes
let showContact = "";
var isContactEditClicked = false;
var arrow_image_element_c;
var edit_keyword_element_c;
var contact_display_element;
var form_container_element_c;

const contactObject = {
    phone_number: "",
    email: ""
};


var totalPriceElement = document.getElementById("total-price");
var refNumElement = document.getElementById("ref-num");
//all user input attributes
var cardNumber = document.getElementById('card-number');
var cardHolderName = document.getElementById('cardholder');
var expireDate = document.getElementById('expiration-date');
var securityCode = document.getElementById('security-code');

var addressLine1 = document.getElementById('address1');
var addressLine2 = document.getElementById('address2');
var addressLine3 = document.getElementById('address3');
var town = document.getElementById('town');
var state = document.getElementById('state');
var postalcode = document.getElementById('postalcode');
var country = document.getElementById('country');

var phoneNumber = document.getElementById('phone_number');
var email = document.getElementById('email');

//submit success field
var successForm = document.getElementById("success");
var checkoutForm = document.getElementById("checkout");

//methods to execute
main();
main_contact();
successForm.style.display="none";
var totalPrice = localStorage.getItem("totalPrice");
totalPriceElement.textContent = parseFloat(totalPrice).toFixed(2)+"/-";

var referenceNum = localStorage.getItem("ref-num");
if(referenceNum==null) referenceNum = 1;
else referenceNum = parseInt(referenceNum);
refNumElement.textContent = referenceNum.toString().padStart(12, '0');


//if previously entered contact details exists it enter to the form
const phoneNumberTxt = localStorage.getItem("phoneNumber");
const emailTxt = localStorage.getItem("email");

let i = 0;
if(phoneNumberTxt!=null) {
    phoneNumber.value = phoneNumberTxt;
    i++;
}
if(emailTxt!=null) {
    email.value = emailTxt;
    i++;
}
if(i>0) saveContactEditedContent();


// address form functionalities
function main(){
    const today = new Date().toISOString().split('T')[0];
    document.getElementById("expiration-date").setAttribute("min", today);
    document.getElementById('form').style.display = "none";

    arrow_image_element = document.getElementById('arrow-key');
    edit_keyword_element = document.getElementById('edit-keyword');
    address_display_element = document.getElementById('show-field');
    form_container_element = document.getElementById('form');

    changingAddressInShowElement();
}

function showEditForm(){
    if(!isEditClicked){
        formAppear();
        
        for(let key in addressObject){
            document.getElementById(`${key}`).value = addressObject[key];
        }
        isEditClicked = true;
    }
    else{
        saveEditedContent();
    }
}

function saveEditedContent(){
    isEditClicked = false;
    
    addressEdited();
    changingAddressInShowElement();
    formDisappear();
}

function cancelEditedContent(){
    isEditClicked = false;
    formDisappear();
    console.log('cancel')
}

function formDisappear(){
    form_container_element.style.display = "none";
    address_display_element.style.display = "block";
    
    edit_keyword_element.innerText = "Edit";
    arrow_image_element.style.transform = "rotate(90deg)";
}

function formAppear(){
    address_display_element.style.display = "none";
    form_container_element.style.display = "block";
    
    edit_keyword_element.innerText = "Close";
    arrow_image_element.style.transform = "rotate(-90deg)";
}

function addressEdited(){
    for(let key in addressObject){
        addressObject[key] = document.getElementById(`${key}`).value;
    }

    console.log(addressObject);
}

function changingAddressInShowElement(){
    showAddress = "";

    for(let prop in addressObject){
        if(addressObject[prop].trim()=="") continue;
        if(showAddress!="") showAddress+=", ";
        showAddress+= addressObject[prop];
    }

    if(showAddress.length==0) {
        document.getElementById('maked-address').textContent = "Edit the address";
        document.getElementById('maked-address').style.color = "red";
        formAppear();
    }else{
        document.getElementById('maked-address').textContent = showAddress;  
        document.getElementById('maked-address').style.color = "white";
    }
}




// contact details form functionalities
function main_contact(){
    arrow_image_element_c = document.getElementById('arrow-key-c');
    edit_keyword_element_c = document.getElementById('edit-keyword-c');
    contact_display_element = document.getElementById('show-field-c');
    form_container_element_c = document.getElementById('c-form');

    changingContactInShowElement();
}

function showContactEditForm(){
    if(!isContactEditClicked){
        contactEditFormAppear();
        
        for(let key in contactObject){
            document.getElementById(`${key}`).value = contactObject[key];
        }
        isContactEditClicked = true;
    }
    else{
        saveContactEditedContent();
    }
}

function saveContactEditedContent(){
    isContactEditClicked = false;
    
    contactEdited();
    changingContactInShowElement();
    contactEditFormDisappear();
}

function cancelContactEditedContent(){
    isContactEditClicked = false;
    contactEditFormDisappear();
    console.log('cancel')
}

function contactEditFormDisappear(){
    form_container_element_c.style.display = "none";
    contact_display_element.style.display = "block";
    
    edit_keyword_element_c.innerText = "Edit";
    arrow_image_element_c.style.transform = "rotate(90deg)";
}

function contactEditFormAppear(){
    contact_display_element.style.display = "none";
    form_container_element_c.style.display = "block";
    
    edit_keyword_element_c.innerText = "Close";
    arrow_image_element_c.style.transform = "rotate(-90deg)";
}

function contactEdited(){
    for(let key in contactObject){
        contactObject[key] = document.getElementById(`${key}`).value;
    }

    console.log(contactObject);
}

function changingContactInShowElement(){
    showContact = 0;
    if(contactObject.phone_number!="") showContact+=1;
    if(contactObject.email!="") showContact+=2;

    if(showContact==0) {
        document.getElementById('maked-mobile').textContent = "Edit the contact details";
        document.getElementById('maked-mobile').style.color = "red";
        document.getElementById('maked-email').textContent = "";  
        contactEditFormAppear();
    }
    if(showContact==1){
        document.getElementById('maked-mobile').textContent = "Phone number: "+contactObject.phone_number;  
        document.getElementById('maked-mobile').style.color = "white";
        document.getElementById('maked-email').textContent = ""; 
    }
    if(showContact==2){
        document.getElementById('maked-mobile').textContent = "Email: "+contactObject.email;  
        document.getElementById('maked-mobile').style.color = "white";
        document.getElementById('maked-email').textContent = "";  
    }
    if(showContact==3){
        document.getElementById('maked-mobile').textContent = "Phone number: "+contactObject.phone_number;  
        document.getElementById('maked-mobile').style.color = "white";
        document.getElementById('maked-email').textContent = "Email: "+contactObject.email;  
        document.getElementById('maked-email').style.color = "white";
    }
}

//validations

//payment details
var errorPaymentElement = document.getElementById('error-pay');

function cardNumberValidation(){
    empty(errorPaymentElement);
    
    
    let text = cardNumber.value;
    if(!checkEmpty(text, errorPaymentElement, "Card Number")){
        if (isNaN(text)) {
            showError(errorPaymentElement,"The value is not a number","red");
            return false;
        }
        else {
            if(text.replace("-","").length==16) {
                showError(errorPaymentElement,"Look like card number is correct", "aqua");
                return true;
            }
            else{
                showError(errorPaymentElement,"The number count should be 16. Plz check again card number", "red");
                return false;
            }
        }
    } else return false;
}

function cardHoldersNameValidation(){
    empty(errorPaymentElement);

    let text = cardHolderName.value;
    if(text.length>3 ){
        let regex = /\d/;
        if(!regex.test(text)){
            showError(errorPaymentElement,"","red");
            showError(errorPaymentElement,"Look like card holder's name is correct", "aqua");
            return true;
        }
        else{
            showError(errorPaymentElement,"Cardholder's name can't contain any numbers","red");
            return false;
        }
    }else {

        if(!checkEmpty(text, errorPaymentElement, "Cardholder's Name")){
            showError(errorPaymentElement, "Cardholder's name must be longer than 3 characters", "red");
            return false;
        }else return false;
    }
}

function cvv_Validation(){
    empty(errorPaymentElement);

    let text = securityCode.value;
    if(checkEmpty(text, errorPaymentElement, "CVV")){
        return false;
    }else{
        if (isNaN(text)) {
            showError(errorPaymentElement,"The value is not a number","red");
            return false;
        }else{
            if(text.length==3){
                showError(errorPaymentElement,"Look like CVV is correct", "aqua");
                return true;
            }else{
                showError(errorPaymentElement, "CVV must be contain 3 numbers", "red");
                return false;
            }
        }

    }
}

function expireDateValidation(){
    let text = expireDate.value;
    if(checkEmpty(text, errorPaymentElement, "Expire date")){
        return false;
    }else{
        showError(errorPaymentElement, "Make sure the year and month on the card is a month after the current one", "aqua");
        return true;
    }
}


//billing address
var errorAddressElement = document.getElementById('error-a');

function addressLine1Validation(){
    let text = addressLine1.value;
    return !checkEmpty(text, errorAddressElement, "Address line 1");
}

function townValidation(){
    let text = town.value;
    return !checkEmpty(text, errorAddressElement, "Town / City");
}

function stateValidation(){
    let text = state.value;
    return !checkEmpty(text, errorAddressElement, "State / Region");
}

function postalcodeValidation(){
    let text = postalcode.value;
    return !checkEmpty(text, errorAddressElement, "Postalcode / Zip code");
}

function countryValidation(){
    let text = country.value;
    return !checkEmpty(text, errorAddressElement, "Country");
}



//contact details validation
var errorContactElement = document.getElementById('error-c');

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




function showError(element, message, color){
    element.textContent = message;
    element.style.color = color;
    setTimeout( function(){
        element.textContent = "";
    }, 10000);

}

function checkEmpty(text, element, message){
    if(text.length==0) {
        showError(element, message+" field is empty", "red");
        console.log('empty');
        return true;
    }
    else return false;
}

function empty(element){
    element.textContent="";
}


//submit the form

function saveTheForm(){

    let element = null;

    if(!cardNumberValidation()){
        errorPaymentElement.scrollIntoView();
        element = cardNumber;
    }else if(!cardHoldersNameValidation()){
        errorPaymentElement.scrollIntoView();
        element = cardHolderName;
    }else if(!expireDateValidation()){
        errorPaymentElement.scrollIntoView();
        element = expireDate;
    }else if(!cvv_Validation()){
        errorPaymentElement.scrollIntoView();
        element = securityCode;
    }else if(!addressLine1Validation()){
        errorAddressElement.scrollIntoView();
        element = addressLine1;
    }else if(!townValidation()){
        errorAddressElement.scrollIntoView();
        element = town;
    }else if(!stateValidation()){
        errorAddressElement.scrollIntoView();
        element = state;
    }else if(!postalcodeValidation()){
        errorAddressElement.scrollIntoView();
        element = postalcode;
    }else if(!countryValidation()){
        errorAddressElement.scrollIntoView();
        element = country;
    }else if(!phoneNumberValidation()){
        errorContactElement.scrollIntoView();
        element = phoneNumber;
    }else if(!emailValidation()){
        errorContactElement.scrollIntoView();
        element = email;
    }else{
        submitForm();
        return true;
    }

    if(element!=null){
        element.style.borderColor = "red";
        setTimeout( function(){
            element.style.borderColor = "#444";
        }, 5000);
    }else{
        submitForm();
    }
}

function submitForm(){
    checkoutForm.style.opacity = 0.4;
    document.body.style.backgroundColor = "black";
    successForm.style.display='flex';
    
    localStorage.setItem("ref-num",(referenceNum+1))

    var countdown = document.getElementById("countDown");
    var count = 15;
    setInterval(()=> {
        count--;
        console.log(count);
        countdown.textContent = count;
    
        if(count === 0) {
            window.location.href = '../Home/home.html';
        }
    }, 1000);
}

function cancelSubmission(){
    window.location.href = "../Buy Products/products.html";
}