"use strict";

(function() {
    let Person= {

    name : "",
    dateOfBirth : null,
    getName: function()
    {
        return this.dateOfBirth;

    },
    setName: function(name)
    {
        this.name=name;
    }
    ,

    printObject: function()
    {
        console.log(`The person's name is ${this.name}`);
        console.log(`${this.name} was born on ${this.dateOfBirth}`);
    }


};


const Employee= Object.create(Person);

Employee.salary=0.0;
Employee.hireDate=Date.now();
Employee.jobTitle="";
Employee.doJob= function(jobTitle)
{

this.jobTitle=jobTitle;
  console.log(`${this.name} is  a ${this.jobTitle} who earns \n $ ${this.salary} `);
}


let Anna= Object.create(Employee);
Anna.setName("Anna");
Anna.salary=249995.50 ;
Anna.doJob("programmer");

})();