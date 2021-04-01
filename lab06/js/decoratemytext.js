
"use strict";

function alertOnClick ()
{
 alert("Bigger Decorations");
}
function biggerTexts()
{
  const textarea1= document.getElementById("textarea1");
  // var txta=textarea1.style.fontSize;
 // var txta=parseInt(document.getElementById("textarea1").style.fontSize);
 // console.log(document.getElementById("textarea1").style.fontSize);
  //document.getElementById("textarea1").style.fontSize = txta+12+"pt";
   //document.getElementById("textarea1").style.fontSize="24pt";


   const styles = window.getComputedStyle(textarea1);
   let fontsz= styles.fontSize;
  //console.log(fontsz);
   
  document.getElementById("textarea1").style.fontSize=parseInt(fontsz)*0.75+2+"pt";
    
   
}



function onChangeCheck()
{
    alert("checkBox mark changed ");

    if(document.getElementById("bling").checked)
    {
        onChecked();
    } 
    else if(document.getElementById("bling").checked == false)
    {
        onUnchecked();
    }
}
function onChecked()
{
    const textarea1= document.getElementById("textarea1");
    textarea1.style.fontWeight = "bold";
    textarea1.style.color="green";
    textarea1.style.textDecoration="underline";
}

function increaseInTime()
{
    setInterval(biggerTexts, 500);
}



function onUnchecked()
{
    const textarea1= document.getElementById("textarea1");
    textarea1.style.fontWeight = "normal";
    textarea1.style.color="black";
    textarea1.style.textDecoration="";
}

window.onload= function (){

    document.getElementById("biggerDecorations").onclick=increaseInTime;
    
    document.getElementById("bling").onchange=onChangeCheck;
    
    
    

};


