
import { Employee } from './model/Employee.js';
import {Person} from './model/person.js';

/*1.	Name: Ana Smith, Date of Birth: 1998-12-15
2.	Name: Bob Jone, Date of Birth: 1945-11-16
3.	Name: Carlos Slim Helu, Date of Birth: 1976-09-24 */



let  people =[];


people.push(new Person("Ann Smith", new Date(1998, 11, 15)));
people.push(new Person("Bob Jone", new Date(1945, 10, 16)));
people.push(new Person("Carlos Slim Helu", new Date(1976, 8, 24)));


for (let p of people){


    p.toString();
}


let Jim =  new Employee("Jim Hanson", 2459000.00);
Jim.doJob("software Engineer");
//Jim Hanson, set their salary to $245.990.00 