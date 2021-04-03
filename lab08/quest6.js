/*var add=(function(){
    var counter=0;
    return function(){
        return counter+=1;
    }
})(); */



const count=(function()
{
    let counter=0;
    const getCounter=  function()
    {
        return counter;

    }

    const add= function()
    {
        counter+=1;
    }

    const reset =function()
    {
        counter=0;
    }

    return{
        getCounter: getCounter,
        add :add,
        reset: reset
    }
})();

count.add();
count.add();

console.log(count.getCounter());
count.reset();

console.log(count.getCounter());


const count2={
  'counter' : 0,
 getCounter: function()
    {
        return this.counter;

    },

    add : function()
    {
        this.counter+=1;
    }
,
    reset : function()
    {
        this.counter=0;
    }

     }     ;

     count2.add();
     count2.add();
     
     console.log(count2.getCounter());
     count2.reset();
     
     console.log(count2.getCounter());
     

     makeAdder= function(addValue)
     {

        let counter=0;
         return  function()
         {
             counter+=addValue;

         //   return function(){
                 return counter;
  
           // }
         }
     }
     const add5= makeAdder(5);

    add5();
     add5();

     result=add5();

     console.log(result);
     //add5();
     //add5();


     const employee= (function(){


       let name=' ';
       let age=0;
       let salary=0.0;

       function getName(){
           return name;
       }
       function getAge(){

        return age;
       }

       function getSalary(){
           return salary;
       }

       function setName(newName){
           name=newName;

       }

       function setAge(newAge)
       {
           age=newAge;
           
       }
       function setSalary(newSalary)
       {
           salary= newSalary;
       }

       return{
           setAge: setAge,
           //getName: getName,
           setName: setName,
           setSalary: setSalary,
           increaseSalary : function(percentage)
           {
               setSalary(getSalary() + getSalary()*percentage);
           },
           incrementAge: function()
           {
               setAge(getAge()+1);

           },

           getEmpInfo : function(){
               return `\nName : ${getName()}\nAge: ${getAge()}\nSalary: ${getSalary()}\n`;

           }

       }
       
     })();

     employee.setName('John Smith');
     employee.setAge(25);
     employee.setSalary(125000.00);
     console.log(`Emoloyee Information is :${employee.getEmpInfo()}`);
     employee.incrementAge();
     employee.increaseSalary(10);
     console.log(`updated Employee Information is: ${employee.getEmpInfo()}`);


     employee.address="125 st";
     employee.setAddress= function(address)
     {
         this.address= address;
     }


     employee.getAddress= function ()
     {
         return this.address;
     }

    // console.log(`${employee.getName()}'s address is : ${employee.getAddress()}`);
