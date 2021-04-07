"use strict";

(function(){
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
        console.log(`${this.name} was born on ${this.dateOfBirth.getFullYear()}-${this.dateOfBirth.getMonth()+1}-${this.dateOfBirth.getDate()}`);
    }
 }


let john= Object.create(Person);
john.setName("john");
john.dateOfBirth=new Date(1998, 11, 10);

john.printObject();

})();