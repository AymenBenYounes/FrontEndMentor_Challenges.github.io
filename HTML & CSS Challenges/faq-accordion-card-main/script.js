var btn=document.querySelectorAll("#sahm");
for(var i=0;i<btn.length;i++){
    btn[i].addEventListener("click", (e) => {
        var a=e.target;
        var parent=a.parentNode.parentNode;
        var title=a.parentNode.children[0];
        var child=parent.children[1];
        if(child.style.display==="none"){
            title.style="font-weight: 700";
            title.style.color='';
            title.style.color="hsl(238, 29%, 16%)";
            child.style.display="block"; 
            
        }
        else{
            title.style.color="hsl(240, 6%, 50%)";
            title.style="font-weight: initial";
            child.style.display="none"; 
        }             
    })
}