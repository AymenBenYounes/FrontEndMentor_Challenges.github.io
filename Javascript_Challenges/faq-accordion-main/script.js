var Opening_List = document.querySelectorAll('#click');
for (var i = 0; i < Opening_List.length; i++) {
    Opening_List[i].addEventListener('click', (e) => {
        var doc = e.target;
        var parent = doc.parentNode.parentNode;
        var minus = doc.parentNode.children[2];
        var child = parent.children[1];
        if(child.style.display==="none"){
            doc.style.display = "none";
            minus.style.display = "block";
            child.style.display = "block";
        }
        else{
            console.log("ma5rout");
            doc.style.display='';
            doc.style.display = "block";
            minus.style.display='';
            minus.style.display = "none";
            child.style.display='';
            child.style.display = "none";
        }
    })
}
var Closing_List = document.querySelectorAll('#show');
for (var i = 0; i < Closing_List.length; i++) {
    Closing_List[i].addEventListener('click', (e) => {
        var doc = e.target;
        var parent = doc.parentNode.parentNode;
        var show = doc.parentNode.children[1];
        var child = parent.children[1];
        if(child.style.display==="block"){
            doc.style.display='';
            doc.style.display = "none";
            show.style.display='';
            show.style.display = "block";
            child.style.display='';
            child.style.display = "none";
        }
    })
}