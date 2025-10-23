var a=document.querySelector(".all");
var x=document.querySelector("i");
var y=document.querySelector(".middle");
var z=document.getElementById("information");
var b=document.getElementById("end");
var c=document.getElementById("image");
var flag=0;
x.addEventListener("click",function(){
    if(flag==0){
        a.style.backgroundColor="black";
        x.style.color="white";
        x.style.background="black";
        y.style.backgroundColor="rgb(43, 25, 63)";
        b.style.backgroundColor="rgb(158, 157, 157)";
        z.style.backgroundColor="rgb(54, 55, 54)";
        z.style.border="solid";
        z.style.borderColor="white";
        z.style.color="white";
        c.style.borderColor="white";
        flag=1;
    }
    else{
        a.style.backgroundColor="white";
        x.style.color="black";
        x.style.background="white";
        y.style.backgroundColor="rgb(225, 255, 141)";
        b.style.backgroundColor="rgb(158, 157, 157)";
        z.style.border="solid";
        z.style.borderColor="black";
        z.style.backgroundColor="white";
        z.style.color="black";
        c.style.borderColor="black";
        flag=0;
    }
})
