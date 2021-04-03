
function onSubmit()
{


    
    event.preventDefault();
    let acc= document.getElementById("acc").value;
    let cust=document.getElementById("cust").value;
    let type=document.getElementById("type").value;

   let list=document.getElementById("listAccounts");
   let entry=document.createElement('li');

 
   entry.appendChild(document.createTextNode(acc + " | " + cust + "|" + type));
    
   list.appendChild(entry);
}



var okButton=document.getElementById("form1");
okButton.onsubmit=onSubmit;
