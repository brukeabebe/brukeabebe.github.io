var  prodcutNumber, quantityInStock, name, supplier, unitPrice, dateSupplied
function onProductAdd()
{
    event.preventDefault();
    window.prodcutNumber=document.getElementById("prodcutNumber").value;
    window.quantityInStock= document.getElementById("quantityInStock").value;
    window.name1=document.getElementById("name1").value;
    window.supplier=document.getElementById("supplier").value;
    window.unitPrice= document.getElementById("unitPrice").value;
    window.dateSupplied=document.getElementById("dateSupplied").value;
    
    window.alert("" +prodcutNumber +"," + quantityInStock +", " + name1 +"," + "," +supplier + "," +unitPrice +"," +dateSupplied);
}
var okButton1=document.getElementById("productAdd");
okButton1.onclick=onProductAdd;
