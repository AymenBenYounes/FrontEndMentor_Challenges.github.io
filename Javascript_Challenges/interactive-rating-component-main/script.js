var liste=document.getElementsByTagName("li");
var num='';
for(var i=0;i<liste.length;i++){
    liste[i].addEventListener("click",function(event){
        var but=document.getElementsByTagName("button");
        for(var j=0;j<but.length;j++){
            but[j].removeAttribute("style");
        }
        event.target.setAttribute("style","background-color:orange;color: white;");
        num=event.target.value;
    })
}

function moveNext(){
    var hide=document.getElementById("card");
    hide.style.display="none";
    var appear=document.getElementById("thanks");
    appear.style.display="initial";
    var show=document.getElementById("op");
    show.innerHTML=num;
}