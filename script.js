let myForm1 = document.forms['myForm1'];
let fullName = myForm1['fname'];
let phoneNum = myForm1['pnum'];
let username = myForm1['uname'];
let address = myForm1['address'];
let email = myForm1['email'];
let male = myForm1['gender'][0];
let female = myForm1['gender'][1];
let notSay = myForm1['gender'][2];
let password = myForm1['pword'];
let confirmPassword = myForm1['cpword'];
let terms = myForm1['remember'];

let errors = [];

let fullNameError = document.getElementById('fnameError');
let phoneNumError = document.getElementById('pnumError');
let usernameError = document.getElementById('unameError');
let addressError = document.getElementById('addressError');
let emailError = document.getElementById('emailError');
let genderError = document.getElementById('genderError');
let passwordError = document.getElementById('pwordError');
let confirmPasswordError = document.getElementById('cpwordError');
let termsError = document.getElementById('termsError');

document.querySelector('#alert').style.visibility = 'hidden';

function submitForm(e){
    e.preventDefault();
    validateFullName();
    validatePhoneNum();
    validateUsername();
    validateAddress();
    validateEmail();
    gender();
    validatePassword();
    validateTerms();
    alertError();
    alert(`You have a total of ${errors.length} errors.`)
}

function validateFullName(){
    fullName.value = fullName.value.trim();
    var arrOfFullName = fullName.value.split(" ");
    if(arrOfFullName.length < 2){
        errors.push("Your Full name must include First name and Surname; both separated by a space");
        fullNameError.innerHTML = errors[errors.length - 1];
    }
    else if(arrOfFullName.length > 4){
        errors.push("Your Full name should not be more than 4 words");
        fullNameError.innerHTML = errors[errors.length - 1];
    }
    else{
        fullNameError.innerHTML = "";
    }   
}

function validatePhoneNum(){
    phoneNum.value = phoneNum.value.trim();
    var firstThreeDigit = phoneNum.value.substr(0, 3);
    if(phoneNum.value == ""){
        errors.push("Please input a phone number of length 11");
        phoneNumError.innerHTML = errors[errors.length - 1];
    }
    else if((isNaN(phoneNum.value) && !Number.isInteger(phoneNum.value)) || (firstThreeDigit != "070" && 
            firstThreeDigit != "080" && firstThreeDigit != "081" && firstThreeDigit != "090" && 
            firstThreeDigit != "091")){
        errors.push("Please only enter number without country code starting with 080, 081, 091 etc.");
        phoneNumError.innerHTML = errors[errors.length - 1];
    }
    else if(phoneNum.value.length != 11){
        errors.push("Your phone number cannot be less or greater than 11");
        phoneNumError.innerHTML = errors[errors.length - 1];
    }
    else{
        phoneNumError.innerHTML = "";
    }
}

function validateUsername(){
    username.value = username.value.trim();
    var arrOfUsername = username.value.split(" ");
    if(username.value == ""){
        errors.push("Please input your preferred username");
        usernameError.innerHTML = errors[errors.length - 1];
    }
    else if(arrOfUsername.length != 1){
        errors.push("Your username cannot be more and less than one word");
        usernameError.innerHTML = errors[errors.length - 1];
    }
    else{
        usernameError.innerHTML = "";
    }   
}

function validateAddress(){
    address.value = address.value.trim();
    if(address.value == ""){
        errors.push("Please input your address");
        addressError.innerHTML = errors[errors.length - 1];
    }
    else if(typeof address.value !== 'string'){
        errors.push("Please only enter string");
        addressError.innerHTML = errors[errors.length - 1];
    }
    else{
        addressError.innerHTML = "";
    }
}

function validateEmail(){
    email.value = email.value.trim();
    var search1 = email.value.search("@");
    var search2 = email.value.search(".");
    if(email.value == ""){
        errors.push("Please supply your email address");
        emailError.innerHTML = errors[errors.length - 1];
    }
    else if(search1 == -1){
        errors.push("Email must include @");
        emailError.innerHTML = errors[errors.length - 1];
    }
    else if(search2 == -1){
        errors.push("Email must include .");
        emailError.innerHTML = errors[errors.length - 1];
    }
    else if(email.value.indexOf("@") > email.value.indexOf(".")){
        errors.push("Wrong email address. @ must come before .");
        emailError.innerHTML = errors[errors.length - 1];
    }
    else{
        emailError.innerHTML = "";
    }
}

function gender(){
    if(male.checked == "" && female.checked == "" && notSay.checked == ""){
        errors.push("Please, kindly select your gender");
        genderError.innerHTML = errors[errors.length - 1];
    }
    else{
        genderError.innerHTML = "";
    }
}

function validatePassword(){
    if((password.value.length < 8) || (password.value.length > 12)){
        errors.push("Your password cannot be less than 8 or greater than 12 characters");
        passwordError.innerHTML = errors[errors.length - 1];
    }
    else if(password.value != confirmPassword.value){
        errors.push("Your password did not match");
        confirmPasswordError.innerHTML = errors[errors.length - 1];
    }
    else{
        passwordError.innerHTML = "";
    } 
}

function validateTerms(){
    if(terms.checked != 1){
        errors.push("You must agree to terms and condition");
        termsError.innerHTML = errors[errors.length - 1];
    }
    else{
        termsError.innerHTML = "";
    }
}

function alertError(){
    if(errors.length >= 1){
        document.querySelector('#alert').style.visibility = 'visible';
    }
    else{
        document.querySelector('#alert').style.visibility = 'hidden';
    }
}

myForm1.addEventListener('submit', submitForm);


