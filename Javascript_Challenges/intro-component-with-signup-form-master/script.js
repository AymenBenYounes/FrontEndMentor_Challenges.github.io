function checkFields(){
    var error=0;
    var name=document.getElementById("name");
    var lastName=document.getElementById("lastName");
    var email=document.getElementById("email");
    var pass=document.getElementById("pass");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(name.value!="" && lastName.value!="" && emailRegex.test(email.value) && pass.value!=""){
        return true;
    }
    else{
        if(name.value==""){
            errorField(name);
            error++;
        }
        else{
            resetField(name);
        }
        if(lastName.value==""){
            errorField(lastName);
            error++;
        }
        else{
            resetField(lastName);
        }
        if(email.value=="" || !emailRegex.test(email.value)){
            errorField(email)
            error++;
        }
        else{
            resetField(email);
        }
        if(pass.value==""){
            errorField(pass);
            error++;
        }
        else{
            resetField(pass);
        }
    }
    if (error!=0){
        return false;
    }   
}
function errorField(field){
    var parentName=field.parentNode;
    parentName.children[1].style.display="block";
    parentName.children[2].style.display="block";
    field.style.border="1px solid hsl(0, 100%, 74%)";
    field.innerHTML='';
}
function resetField(field) {
    var parentField = field.parentNode;
    parentField.children[1].style.display = "none";
    parentField.children[2].style.display = "none";
    field.style.border = "0";
}