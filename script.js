function myalert(email) {
    if(email != '') {
        document.getElementById("user_email").innerHTML = email;
        document.getElementById("custom_alert").style.display ="block";
    }   
}