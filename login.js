let username = document.forms["myLoginForm1"]["uname"];
let email = document.forms["myLoginForm1"]["email"];
let userForm = document.forms['userFrm'];

function userDetails(e){
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET"
    })

    .then((response) => {
        return response.json();
    })
    
    .then((data) => {
        for(let eachUser in data){
            if(data[eachUser].username == username.value && data[eachUser].email == email.value){
                let userDetails = {
                    fullName: data[eachUser].name,
                    phoneNumber: data[eachUser].phone,
                    username: data[eachUser].username,
                    email: data[eachUser].email,
                    street: data[eachUser].address.street,
                    suite: data[eachUser].address.suite,
                    city: data[eachUser].address.city,
                    zipcode: data[eachUser].address.zipcode
                };

                userForm['userFrmFullName'].value = userDetails.fullName;
                userForm['userFrmPhoneNum'].value = userDetails.phoneNumber;
                userForm['userFrmUsername'].value = userDetails.username;
                userForm['userFrmEmail'].value = userDetails.email;
                userForm['userFrmStreet'].value = userDetails.street;
                userForm['userFrmSuite'].value = userDetails.suite;
                userForm['userFrmCity'].value = userDetails.city;
                userForm['userFrmZipcode'].value = userDetails.zipcode;
                document.getElementById('loginError').innerHTML = "";
                break;
            }
            else{
                document.getElementById('loginError').innerHTML = "Invalid username or email address";
            }

            
        }
        if(document.getElementById('loginError').innerHTML != "Invalid username or email address"){
            userForm.style.display = "block";
            document.forms["myLoginForm1"].style.display = "none";
            document.querySelector("#userImg").style.display = "none";

        }
    })
};

document.forms["myLoginForm1"].addEventListener('submit', userDetails);