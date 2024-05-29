/* Mobile Animation */
document.getElementById("open_share").addEventListener("click",function(){
    var parent=document.getElementById("open_share").parentNode;
    var grand_parent=parent.parentNode.parentNode;
    var shown=grand_parent.lastElementChild;
    var device_width=window.innerWidth;
    if(parent.style.display!=="none" && device_width<1000){
        document.getElementById("close_share").style.display='';
        document.getElementById("close_share").style.display="block";
        parent.style.display="none";
        shown.style.display="block";
    }
    else if(device_width>=1000){
        if(shown.style.display==="none"){
            document.getElementById("close_share").style.display="none";
            shown.style.display="block";
        }
        else{
            shown.style.display='';
            shown.style.display='none';
        }
    }
})
document.getElementById("close_share").addEventListener("click",function(){
    var parent=document.getElementById("close_share").parentNode.parentNode;
    var shown=parent.parentNode.children[0].children[2];
    if(parent.style.display!=="none"){
        parent.style.display='';
        parent.style.display="none";
        shown.style.display='';
        shown.style.display="flex";
    }
})
