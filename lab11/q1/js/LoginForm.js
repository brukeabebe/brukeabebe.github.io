
var email, password, urlInput;

function onLoginSubmit()
{

    event.preventDefault();
    email=$("#exampleInputEmail1").val();
    password= $("#exampleInputPassword1").val();
    urlInput=$("#urlInput").val();
    

    console.log(email, password, urlInput );
}


$("#submitForm").submit(onLoginSubmit);






