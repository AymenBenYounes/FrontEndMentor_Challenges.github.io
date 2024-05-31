document.getElementById("button").addEventListener("click", () => {
    var email = document.getElementById('email');
    var emailValue=email.value;
    var message = document.getElementById('message');
    if (emailValue === '') {
        email.style.border = "1px solid hsl(0, 93%, 68%)";
        message.innerHTML = "Please enter an email";
        document.getElementById('warning').style.display = "block";
    }
    else if(emailValue!==''){
        if(emailValue.indexOf('@')===-1 || emailValue.indexOf('.')===-1){
            email.style.border = "1px solid hsl(0, 93%, 68%)";
            message.innerHTML = "Please enter a valid email";
            document.getElementById('warning').style.display = "block";
        }
        else{
            email.style.border = '';
            message.innerHTML = '';
            document.getElementById('warning').style.display = ''; 
        }
    }
})

