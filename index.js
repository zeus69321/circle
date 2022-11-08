let r;
let op;
const pi=Math.PI;
let name=window.prompt("PLEASE ENTER YOUR NAME :- ");
name=name.toUpperCase();
document.getElementById("h1").innerHTML="WELCOME    " + name ;
document.getElementById("b1").onclick=function(){
    op=document.getElementById("i1").value;
    r=document.getElementById("i2").value;
    if(op==1)
    {
        document.getElementById("ans").innerHTML=pi * r *r ;
    }
    if(op==2)
    {
        document.getElementById("ans").innerHTML=pi * r *2  ;
    }
    if(op==3)
    {
        document.getElementById("ans").innerHTML=2*r ;
    }
   if(op!=1&&op!=2&&op!=3){
        document.getElementById("ans").innerHTML="ENTER A VALID OPTION !";
    }
}
