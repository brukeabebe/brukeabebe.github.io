
import {Person} from "./person.js";


export class Employee extends Person{


    constructor(name, salary, dateOfBirth)

    {
        super(name, dateOfBirth);
        this.salary= salary;

    }


    setHireDate(hireDate)
    {
        this.hireDate=hireDate;
    }
    doJob(jobTitle)
    {

        console.log(`${this.name} is a ${jobTitle} who earns \n ${this.salary}`);
    }
    


}