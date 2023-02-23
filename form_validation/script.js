function seterror(id, error) {
    //sets error inside tag of id
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

// function clearErrors(){
//     errors=document.getElementsByClassName('formerror');
//     for(let item of errors)
//     {
//         item.innerHTML=" "
//     }
// }

function validateForm() {
    var returnval = true;
    // clearErrors();

    //perform validation and if validation fails,set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    if (name.length < 5) {
        seterror("name", "*Length of name is too short!");
        returnval = false;
    }
    //this has been handled already by HTML required
    // if(name.length==0){
    //     seterror("name", "*Enter your name");
    //     returnval = false;
    // }
    var email = document.forms['myForm']["femail"].value;
    if (email.length > 25) {
        seterror("email", "*Email length is too long!");
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length < 10) {
        seterror("phone", "*Phone number must be of 10 digits!");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 6) {
        seterror("pass", "*Not Strong!11");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (regularExpression == false) {
        seterror("pass", "*min 8 letter password, with at least a symbol, upper and lower case letters and a number");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (password != cpassword) {
        seterror("cpass", "*Passwords not matching!");
        returnval = false;
    }




}