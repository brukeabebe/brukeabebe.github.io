
var email, password, urlInput;

function onLoginSubmit()
{

    event.preventDefault();
    window.email=document.getElementById("exampleInputEmail1").value;
    window.password= document.getElementById("exampleInputPassword1").value;
    window.urlInput=document.getElementById("urlInput").value;

    console.log(email, password, urlInput );
}

var okButton=document.getElementById("submit1");
 okButton.onclick=onLoginSubmit;





