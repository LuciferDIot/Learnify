
/Empty fields validation/
function validateForm() {
    let x = document.getElementById("name").value;
    let y = document.getElementById("email").value;
    let z = document.getElementById("phone").value;
    let a = document.getElementsByName("Satisfaction Rate").value;
    if (x == "" || x == null ) {
        document.getElementById("error_msg-1").innerHTML = "Field Required!";
    }
    else {
        document.getElementById("error_msg-1").innerHTML = "";
    }
    if(y == "" || y == null){
        document.getElementById("error_msg-2").innerHTML = "Fielld Required!";
    }
    else {
        document.getElementById("error_msg-2").innerHTML = "";
    }
    if(z == "" || z == null){
        document.getElementById("error_msg-3").innerHTML = "Field Required!";
    }
    else {
        document.getElementById("error_msg-3").innerHTML = "";
    }
    if (a == "" || a == null ) {
        document.getElementById("erroSr_msg-4").innerHTML = "Field Required!";
    }
    else {
        document.getElementById("error_msg-4").innerHTML = ""; 
    }
}