"use strict"

function max(a, b)
{
        if(a>b)
            {return a
            }
           else{
               return b
           }
}

console.log(max(2,3));

function maxOfThree(a,b,c)
{
    var max
    if(a>b)  {
        if(a>c){
                return a
        }
        else {
               return c
        }
    }

    else{
        if(b>c) {
            return b
        }
        else {
            return c
        }
    }

}

console.log(maxOfThree(2,3,4));

function isVowel(char)
{
    if(char.length==1){


        return /[aeiouAEIOU]/.test(char);
    }
  

}

console.log(isVowel("i"));
console.log(isVowel("A"));
console.log(isVowel("v"));

function sum(arr)
{

        var sum=0;
        for(let i=0;i<arr.length;i++)
        {
                sum+=arr[i];
        }
        return sum;
}

console.log(sum([1,2,3,4]));


function multiply(arr)
{
    var mul=1
    for(let i=0;i<arr.length;i++)
    {
       mul=mul*arr[i]     
    }
    return mul;
}
console.log(multiply([1,2,3,4]));

function reverse(str){
    
   let reverse=[];

    for(let i=str.length-1;i>=0;i--)
    {
           reverse.push(str.charAt(i));
    }
    return reverse.join("");
}
console.log(reverse("abc"));


function findLongestWord(arr)
{

  var max=arr[0]
  for (let i=0;i<arr.length;i++)
  {
        if(arr[i].length>max.length)
        {
            max=arr[i]
        }
  }

  return max;
}


console.log(findLongestWord(["bruke", "joy", "scientology"]));

function filterLongWords(arr ,i)
{
    var arr1=[]

    for(let a =0;a<arr.length;a++)
    {
        if(arr[a].length>=i)
        {
            arr1.push(arr[a])
        }
    }

    return arr1;
}

console.log(filterLongWords(["bruke", "joy", "scientology"],4 ));

function computeSumOfSquares(arr)
{ 
  
    return  arr.reduce((a,b)=>a+Math.pow(b,2));
}


var arr=[1,2,3];


console.log(computeSumOfSquares(arr));

function printOddNumbersOnly(arr)
{
    let arr1=[]
    for(let a =0;a<arr.length;a++)
    {
        if(arr[a]%2!=0){
                arr1.push(arr[a])
        }
    }

    return arr1;

}
console.log(printOddNumbersOnly([1,2,3,4,5,6,7,8,9,10]));

function computeSumOfSquaresOfEvensOnly(arr)
{
   return  arr.filter(a=> a%2==0).map(a=>a*a).reduce((a,b)=>a+b);
}


console.log(computeSumOfSquaresOfEvensOnly([1,2,3,4,5,6])); //56

function sumFunc(arr)
{

    return arr.reduce((a,b)=>a+b);
}

console.log(sumFunc([3,5,6,8]));

function mulfunc(arr)
{

    return arr.reduce((a,b)=>a*b,1)

}

console.log(mulfunc([4,5,6]));


function findSecondBiggest(arr)
{
    if(arr.length < 2) {
        throw new Error("array size should be greater than 2");
    }
    var secondBiggest, max;

    for(let i=0;i<arr.length;i++)
    {

        if(max==undefined)
        {
            max=arr[i];
        }
        else if( arr[i]>max)
        {
            max=arr[i];
        }     
    }
    
    for(let i=0;i<arr.length;i++)
    {
         if(secondBiggest == undefined)
         {
            secondBiggest=arr[i]
         }
         else if(arr[i]<max && arr[i] >secondBiggest)
         {
                secondBiggest=arr[i]
         }
            
    }

    return secondBiggest;

}


console.log(findSecondBiggest([5,6,7,8,9,1,23,21]));

console.log(findSecondBiggest([5,16,47,8,19,1,23,51]));


function printFibo(n,a,b)
{

    if(n === 0) return;
    if(n === 1) {
        return a;
    } else if(n === 2) {
        return [a,b];
    } 
  


   else{
    let fibArr=[]
    fibArr.push(a)
    fibArr.push(b)
   for(let i=2; i<n;i++)
   {
       fibArr.push(fibArr[i-1] +fibArr[i-2])
   }

   return  fibArr;

    }

   
}

console.log(printFibo(10,0,1 ));

// question 14  in lab 04 directory and question 15 in q15.js file