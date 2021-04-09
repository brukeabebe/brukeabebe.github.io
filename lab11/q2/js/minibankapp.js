/**
 * minibankapp.js
 */
"use strict";
window.onload = function() {
    let currentRowId = 2;
    var data=[];
    var rowData=[];
    const formNewAccount = $("#formNewAccount");
    formNewAccount.submit( function() {
            event.preventDefault();
            const txtAccountNo = $("#txtAccountNo");
            const txtCustomerName = $("#txtCustomerName");
            const ddlAccountType = $("#ddlAccountType");
            const strAccountNo = txtAccountNo.val();
            const strCustomerName = txtCustomerName.val();
            const strAccountType = ddlAccountType.val();

            rowData=[strAccountNo ,strCustomerName, strAccountType];
            data.push(rowData);
            console.log(data);
            addNewAccountDataRow(strAccountNo, strCustomerName,strAccountType);
            txtAccountNo.val("");
            txtCustomerName.val("") ;
            ddlAccountType["selectedIndex"] = 0;
            txtAccountNo.focus();
    });

    
    const addNewAccountDataRow = function(accountNo, customerName, accountType) {
        const tblAccounts = $("#tblAccounts");
        const newRow=$("<tr>");
        currentRowId++;
        const newCell0 =$("<td>");
        newCell0.text(currentRowId);
         newRow.append(newCell0);

         const newCell1 =$("<td>");
        newCell1.text(accountNo);
         newRow.append(newCell1);

         const newCell2 =$("<td>");
        newCell2.text(customerName);
         newRow.append(newCell2);

         const newCell3 =$("<td>");
        newCell3.text(accountType);
         newRow.append(newCell3);



        $("#tableBody").append(newRow);
       
       
    }

    const  showSavings =function ()
    {

        
        let savingsOnly=[];
            if($("#savingsOnly")[0].checked)
            {
               savingsOnly= data.filter(rowdata=>rowdata[2]==="Savings");
                //console.log(savingsOnly);
               $("#tableBody").empty();
                let rowNumber=0;
               for(let i=0;i<savingsOnly.length;i++)
               {
                 
                let  newRow=$("<tr>");
                rowNumber++;

                const newCell0 =$("<td>");
                newCell0.text(rowNumber);
                 newRow.append(newCell0);
        
                 const newCell1 =$("<td>");
                newCell1.text(savingsOnly[i][0]);
                 newRow.append(newCell1);
        
                 const newCell2 =$("<td>");
                newCell2.text(savingsOnly[i][1]);
                 newRow.append(newCell2);
        
                 const newCell3 =$("<td>");
                newCell3.text(savingsOnly[i][2]);
                 newRow.append(newCell3);
        
        
        
                $("#tableBody").append(newRow);

               }


            }

            else
            {

                   $("#tableBody").empty();
                    let rowNumber=0;
                   for(let i=0;i<data.length;i++)
                   {
                     
                    let  newRow=$("<tr>");
                    rowNumber++;
    
                    const newCell0 =$("<td>");
                    newCell0.text(rowNumber);
                     newRow.append(newCell0);
            
                     const newCell1 =$("<td>");
                    newCell1.text(data[i][0]);
                     newRow.append(newCell1);
            
                     const newCell2 =$("<td>");
                    newCell2.text(data[i][1]);
                     newRow.append(newCell2);
            
                     const newCell3 =$("<td>");
                    newCell3.text(data[i][2]);
                     newRow.append(newCell3);
            
            
            
                    $("#tableBody").append(newRow);

            }
    }
}


$( "#savingsOnly").change(showSavings)
}