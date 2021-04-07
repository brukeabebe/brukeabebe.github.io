functionhighlightField(){
    // turn text yellow and make it bigger
    if(!document.getElementById("text").className){
    document.getElementById("text").className="highlight";
    }elseif (document.getElementById("text").className.indexOf("invalid")
    <0){
    document.getElementById("text").className+=" highlight";
    }
    }



    document.getElementById("main").style.top=
parseInt(document.getElementById("main").style.top)
+ 100+ "px";

function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
    if(arguments[i]>max){
    max =arguments[i];
    }
    }
    return max;
    }
    constmax1 = findMax(1, 123, 500, 115, 66, 88);
    constmax2 = findMax(3, 6, 8);
  
    function sum(x, y, ...more) {
        //"more" is array of all extra passed params
        let total = x + y;
        if (more.length > 0) {
        for (let i = 0; i < more.length; i++){
        total += more[i];
        }
        }
        console.log("Total: " + total);
        return total;
        }
        sum(5, 5, 5);
        sum(6, 6, 6, 6, 6);


        let a, b, c, d, e;  
a = [1,2,3];  
b = "dog";  
c = [42, "cat"];  
// Using the concat method.  
d = a.concat(b, c); // [1, 2, 3, “dog”, 42, “cat”]
// Using the spread operator.  
e = [...a, b, ...c]; // [1, 2, 3, “dog”, 42, “cat”]

<buttononclick="delayMsg();">Click me!</button>
<spanid="output"></span>
functiondelayMsg(){
setTimeout(booyah,5000);document.getElementById("output").innerHTML
="Wait for it...";
}
functionbooyah(){
// called when the timer goes off 
document.getElementById("output").innerHTML="BOOYAH!";
}


timer = null; // stores ID of interval timer 
function delayMsg2() {
if (timer ===null) {
timer = setInterval(rudy, 1000);
} else {
clearInterval(timer); // cancel the timer
timer = null;
}
}
function rudy() { // called each time the timer goes off
document.getElementById("output").innerHTML += " Rudy!";
}


function delayedMultiply() {
    // 6 and 7 are passed to multiply when timer goes off
    setTimeout(multiply, 2000, 6, 7);
    }
    function multiply(a, b) {
    alert(a * b);
    }


    /*

    scope: The enclosing context where values and expressions are associated. 
➢essentially, the visibility of various identifiers in a program
➢lexical scope: Scopes are nested via language syntax; a name refers to the 
most local definition of that symbol.
➢most modern languages (Java, C, ML, Scheme, JavaScript)
➢dynamic scope: A name always refers to the most recently executed definition 
of that symbol.  It searches through the dynamic stack of function calls for a 
variable declaration.
➢Perl, Bash shell, Common Lisp (optionally), APL, Snobol
➢See slide 24 (Scope Example 1)

    */


/*

javaScript has a 2-pass compiler that hoistsall function and variable 
declarations.  These declarations are visible  anywhere in the current function 
scope regardless of where they are declared.  Variables have value 
'undefined' until the execution pass and an assignment is made. 


hen code executes, JS engine first creates global environment objects and 
“this” object and looks for function and variable declarations
• In first phase, JS engine looks through all global code for functions and global 
variables (hoisting)
• functions:  saves entire function definition
• variables:  saves only variable name and value of ‘undefined’

➢‘hoists’ variable and function declarations
• No variable initialization or function expressions are hoisted
In second phase, JS engine 
• executes code line-by-line 
• for every function call adds new context and to execution context stack

Closures
• closure:  A first-class function that binds to free variables that are defined in its 
execution environment.
• free variable: A variable referred to by a function that is not one of its 
parameters or local variables.
• bound variable: A free variable that is given a fixed value when "closed over" by a function's 
environment. 
• A closure is defined when a(n inner) function is defined that has free variables
• aclosure instance is created when the inner function is returned orassignedto avariable
and it attaches itself to the free variables from the surrounding environment to "close" up 
those stray references.  

A closure lets you associate some data (the environment) with a function
• parallel to properties and methods in OOP. 
• Consequently, use a closure anywhere you might use an object with a single method. 
• objects have properties to capture state info
• JavaScript closures capture state info by saving references to free variables
• Situations like this are common on the web. 
• an event handler is a single function executed in response to an event. 
• e.g., DOM and timer event handlers
• .. in 30 seconds print out whatever is in the currentQuestionvariable
• E.g., factory function that sets state information in reusable code (next slide)
• closures for encapsulation and namespace protection (module pattern)
• Event handlers must be functions without parameters
• If you need to pass parameter information with an event handler 
• callback with no parameters but include free variables from the lexical environment.  
• JavaScript engine will create closure over bound variables when assign callback to event handler



Function factory with closures (cont)


have a function that sets the fontsize, and want to have some state info (about
the environment)
• state info is the font size associated with different buttons
• normally could make this a parameter, 
• but must add parameter without executing the function 
• also, the click event will not pass any parameters to the callback function 
• hence, if want to save some state info along with the function, the common way to do it in 
JS is to use a closure because it creates a function and can save enclosing state info in the 
‘free’ variables


Closures are created whenever an inner function with free variables is returned 
or assigned as a callback. Closures provide encapsulation of methods and 
data.  Encapsulation promotes self-sufficiency, stability, and re-usability.  

thisinside event handler
• When using thisinside an event handler, it will always refer to the invoker.  
(event.target)
• A very useful feature of ‘this’ for JavaScript and DOM manipulation
• Portable context
• Rule:  ‘this’ refers to the object that called the function



constchangeMyColorButton1 =document.getElementById("btn1");
constchangeMyColorButton2 =document.getElementById("btn2");
changeMyColorButton1.onclick =changeMyColor;
changeMyColorButton2.onclick =changeMyColor;
functionchangeMyColor(){
this.style.backgroundColor="red";

var a = {
name: "",
log: function() {
var self = this;
self.name = "Hello";
console.log(self.name); //Hello
var setFrench = function(newname) {
self.name = newname;
};
setFrench("Bonjour");
console.log(self.name); //Bonjour
}
};

thisinside arrow function (ES6)


consta = {
name: "",
log: function() {
this.name = "Hello";
console.log(this.name); //Hello
const setFrench = (newname => this.name = newna
setFrench("Bonjour");
console.log(this.name); //Bonjour
}
};
a.log();
}


.call() .apply() .bind()
• There are many helper methods on the Function object in JavaScript
• .bind() when you want that function to be called back later with a certain context, useful in 
events.  (ES5)
• .call() or .apply() when you want to invoke the function immediately, and modify the context.
• http://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind
varfunc2 =func.bind(anObject, arg1, arg2, …)// creates a copy of 
funcusing anObjectas ‘this’ and its first 2 arguments bound to arg1 
and arg2 values
func.call(anObject,arg1,arg2...);
func.apply(anObject,[arg1,arg2...]);


//Recall closure example for event handling from previous lesson
//needed to pass a parameter without executing the function
// returned an inner function with closure over the bound parameter
// can have same effect by binding a null context value with the required parameter
<a href="#" id="size-12">Size 12</a> 
<a href="#" id="size-16">Size 16</a> 
<a href="#" id="size-18">Size 18</a>
function makeSizer(size) {
return function() {
document.body.style.fontSize= size + "px";
}; 
} 
function makeSizerSimple(size){  //can use this version with .bind()
document.body.style.fontSize= size + "px";
}
document.getElementById("size-12").onclick= makeSizer(12); 
document.getElementById("size-16").onclick= makeSizer(16); 
document.getElementById("size-18").onclick = makeSizerSimple.bind(null,18);  //null ok if not using ‘this’


constme ={
first:'Tina',
last:'Xing',
getFullName:function(){
returnthis.first+' '+this.last;
}
}
const log =function(height,weight){// ‘this’ refers to the invoker
console.log(this.getFullName()+height +' '+weight);
}
constlogMe=log.bind(me);
logMe('180cm‘, '70kg');// Tina Xing 180cm 70kg 
log.call(me,'180cm','70kg');// Tina Xing 180cm 70kg 
log.apply(me,['180cm','70kg']);// Tina Xing 180cm 70kg

var me = {
first: 'Tina',
last: 'Xing',
getFullName: function() {
return this.first + ' ' + this.last;
}
};
var you = {
first: 'Rujuan',
last: 'Xing'
};
console.log(me.getFullName.apply(you)); // Rujuan Xing 

function Currying with ‘bind’
➢ Recall:  bind takes a context (this) and set of parameters,and returns a 
function that has that context and parameters set.  
➢This can be used in a functional programming technique called ‘currying’ 
which creates a new function from an old one by fixing the values of one or 
more parameters.
function multiply(a, b) {
return a * b; //no usage of ‘this’
}
constmultipleByTwo = multiply.bind(null, 2); // set a = 2 
console.log(multipleByTwo(4)); // 8 
constmultipleByThree = multiply.bind(null, 3); // set a = 3 
console.log(multipleByThree(4)); // 12

Recall:  Fix Closure bug with IIFE  (“Module Pattern”)
31
varfuncs=[];
for(vari=0;i<5;i++){
funcs[i]=(function(n){
returnfunction()
{
returnn;
}
}(i));
};

Module factory example

constmakeCounter = function() {
let privateCounter = 0;
function changeBy(val) {
privateCounter += val;
}
return {
increment: function() {
changeBy(1);
},
decrement: function() {
changeBy(-1);
},
value: function() {
return privateCounter;
}
}
}

We could store this function in a 
separate variable and use it to 
create several counters. 
constcounter1 = makeCounter();
constcounter2 = makeCounter();
alert(counter1.value());/* Alerts 0 

counter1.increment();
counter1.increment();
alert(counter1.value());/* Alerts 2 

counter1.decrement();
alert(counter1.value());/* Alerts 1 

alert(counter2.value());/* Alerts 0 



*/



var helper = function(n) {
    return function() {return n;}
    }
    var funcs = [];
    for (var i = 0; i < 5; i++) {
    funcs[i] = helper(i);
    };
    console.log(funcs[0]());
    console.log(funcs[1]());
    console.log(funcs[2]());
    console.log(funcs[3]());
    console.log(funcs[4]());

  /*  <a href="#" id="size-12">Size 12</a>
<a href="#" id="size-16">Size 16</a>
<a href="#" id="size-18">Size 18</a>  */
function makeSizer(size) {
return function() {
document.body.style.fontSize= size + "px";
};
}
document.getElementById("size-12").onclick = makeSizer(12);
document.getElementById("size-16").onclick = makeSizer(16);
document.getElementById("size-18").onclick = makeSizer(18);


nstname ={
    'fieldName':value,
    ...
    'fieldName':value 
    };
    constpt ={
    'x':4,
    'y':3
    };
    alert(pt.x+", "+pt.y);
    