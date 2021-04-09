"use strict"
 export  class Person{
constructor(name, dateOfBirth)
{
    this.name=name;
    this.dateOfBirth=dateOfBirth;
}
        getName()
        {
                return this.name;
        }

        setName(name)
        {   
                this.name=name;
        }

        getDateOfBirth()
        {
                return this.dateOfBirth;
        }

        setDateOfBirth(dateOfBirth)
            {
                this.dateOfBirth=dateOfBirth;
            }


       toString()
       {
           console.log(`{Name: ${this.name}, Date of Birth: ${this.dateOfBirth.getFullYear()} - ${this.dateOfBirth.getMonth() +1}- ${this.dateOfBirth.getDate()}}`)
       }

} 