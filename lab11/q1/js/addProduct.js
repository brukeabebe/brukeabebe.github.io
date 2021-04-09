var  prodcutNumber, quantityInStock, name, supplier, unitPrice, dateSupplied


$("#submitForm").submit(function ()
{
   
    event.preventDefault();
    
    prodcutNumber=$("#prodcutNumber").val();
    quantityInStock= $("#quantityInStock").val();
    name1=$("#name1").val();
    supplier=$("#supplier").val();
    unitPrice= $("#unitPrice").val();
    dateSupplied=$("#dateSupplied").val();
    

    const newDiv=$("<div>");
    newDiv.insertAfter("#submitForm");

    newDiv.text("" +prodcutNumber +"," + quantityInStock +", " + name1 +"," + "," +supplier + "," +unitPrice +"," +dateSupplied);
    //alert("" +prodcutNumber +"," + quantityInStock +", " + name1 +"," + "," +supplier + "," +unitPrice +"," +dateSupplied);
});
