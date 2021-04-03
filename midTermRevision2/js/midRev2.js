

window.onload= function(){

var tableData=[], data=[]  ;



function displayAll()
{

    let tbody_ref = document.getElementById("t-body");
   

    //clear table Data First 
    for(let k=0; k<tableData.length; k++)
    {
        tbody_ref.deleteRow(-1);
        console.log("count");
    }
    

    //from data in the table data  add  insert row then cells then appendchild to cells
    for(let i=0; i<tableData.length; i++)
    {
        let trow=tbody_ref.insertRow(-1);

        for(let j=0; j<tableData[i].length; j++)
            {
                let newCell=trow.insertCell(j);
                newCell.appendChild(document.createTextNode(tableData[i][j]));
             }   

    }
 

}




/*function reset()
{
    document.getElementById("form1").reset();
}

*/

//function to check age
const isElderlyPatient = function(bd) {
    const todaysDate = new Date();
    //const strTimeOfBirth = "T00:00:00.000+06:00";
    const strYearOfBirth = bd.substr(0, 4);
    const nMonthOfBirth = parseInt(bd.substr(5, 2));
    const nDateOfMonthBirth = parseInt(bd.substr(8, 2)); 
    const strDateOfBirth = `${strYearOfBirth}-${nMonthOfBirth}-${nDateOfMonthBirth}`; //${strTimeOfBirth}`;
    const patientsBirthDate = new Date(strDateOfBirth);
    let age = (todaysDate.getFullYear()) - (patientsBirthDate.getFullYear());
    const monthDiff = todaysDate.getMonth() - patientsBirthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && todaysDate.getDate() < patientsBirthDate.getDate())) {
        age--;
    }
    return age ;
}



console.log(isElderlyPatient("2013-03-09"));


// display elderly or clear elderly and show all
function displayElderly()
{
    let tbody_ref = document.getElementById("t-body");

    if(document.getElementById("elderly").checked)
    {


        let elderly=[];
        elderly=tableData.filter(x=>isElderlyPatient(x[4])>=65);
      
            console.log(elderly);
          let tbody_ref = document.getElementById("t-body");

          //clear table data
          for(let k=0; k<tableData.length; k++)
          {
              tbody_ref.deleteRow(-1);
              console.log("count");
          }

          //then from elderly array addd to table body

          for(let i=0; i< elderly.length; i++)
        {

        let  op=elderly[i];
        let trow=tbody_ref.insertRow(-1);
       
        for(let j=0; j<op.length; j++)
            {
                let newCell=trow.insertCell(j);
                newCell.appendChild(document.createTextNode(op[j]));
             }   

         }


    }


    //else call the display all
    else{
             displayAll();
    }
}


function displayOutPatient()
{

    if(document.getElementById("outPatients").checked)
    {

    
  let outPatient=[];
  outPatient=tableData.filter(x=>x[6]==="yes");

 //console.log(outPatient[0].length);
    let tbody_ref = document.getElementById("t-body");
    for(let k=0; k<tableData.length; k++)
    {
        tbody_ref.deleteRow(-1);
        console.log("count");
    }
    

    

  for(let i=0; i<outPatient.length; i++)
    {

      let  op=outPatient[i];
        let trow=tbody_ref.insertRow(-1);
       
        for(let j=0; j<op.length; j++)
            {
                let newCell=trow.insertCell(j);
                newCell.appendChild(document.createTextNode(op[j]));
             }   

    }
  
}


else{
    displayAll();
}

   
}


//obtain data from table
function register()
{
   
    event.preventDefault();
   let idNo, firstName, lastName, middleName, date1, department, outPatient;

    idNo=document.getElementById("idNo").value;
    firstName=document.getElementById("firstName").value;
   
    middleName=document.getElementById("middleName").value;
    lastName=document.getElementById("lastName").value;
    date1=document.getElementById("date1").value;
    department=document.getElementById("department").value;
     let  outPatient1=document.getElementById("yes").checked;
    if(outPatient1)
       {
           outPatient="yes";
        }
else
        {
            outPatient="no";
        }


 data=[idNo, firstName, middleName, lastName, date1, department, outPatient];

// add data obtained will put a table data array
 tableData.push(data);


//then add data to table
console.log(data);
    let tbody_ref = document.getElementById("t-body");
    let trow = tbody_ref.insertRow(-1);

    
    for(let i=0; i<data.length; i++)
    {
        let newCell=trow.insertCell(i);
        newCell.appendChild(document.createTextNode(data[i]));
    }
//
}

document.getElementById("reset").onclick=reset;
document.getElementById("form1").onsubmit=register;
document.getElementById("elderly").onchange=displayElderly;
document.getElementById("outPatients").onchange=displayOutPatient;
}