var acc=document.getElementsByClassName("accordion")
var i ;

for (let i = 0; i < acc.length ;  i++) {
    acc[i].addEventListener("click ",function(){
    this.classlist.toggle("active") ; 
    var panel=this.nextElementSibling;

    if(panel.style.maxHight){
      panel.style.maxHight=null ;
    }else{
        panel.style.maxHight=panel.scrollHeight + "px" ;
    }

}) ;
}