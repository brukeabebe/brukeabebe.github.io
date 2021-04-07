"use strict";


(function(){
function Person(name)
{
  this.name=name;
  this.dateOfBirth=null;
  const getName= function()
  {
      return this.name;
  };
   const setName= function(name)
  {
        this.name=name;
  };

}


Person.prototype.toString= function ()
{
    console.log(`{Name : ${this.name}, DateOfBirth: ${this.dateOfBirth.getFullYear()}-${this.dateOfBirth.getMonth()}-${this.dateOfBirth.getDate()} }`);
}

let Peter = new Person("Peter");
Peter.dateOfBirth=new Date(1985,11,10,);
Peter.toString();



})();