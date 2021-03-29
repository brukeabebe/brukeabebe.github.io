function max(a, b)
{
        if(a>b)
            {return a
            }
           else{
               return b
           }
}

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

function isVowel(char)
{
    if(char.length==1){


        return /[aeiou]/.test(char);
    }
  

}

function sum(arr)
{

        var sum=0
        for(let i=0;i<arr.length;i++)
        {
                sum+=arr[i]
        }
        return sum
}


function multiply(arr)
{
    var mul=1
    for(let i=0;i<arr.length;i++)
    {
       mul=mul*arr[i]     
    }
    return mul
}

function reverse(str){
    return str.split("").reverse().join("");
    
}

function findLongestWord(arr)
{

  var max=arr[0]
  for (let i=0;i<arr.length;i++)
  {
        if(arr[i]>max)
        {
            max=arr[i]
        }
  }

  return max
}

function filterLongWords(arr ,i)
{
    var arr1=[]

    for(let a =0;a<arr.length;a++)
    {
        if(arr[a].length>i)
        {
            arr1.push(arr[a])
        }
    }

    return arr1;
}

function computeSumOfSquares(arr)
{ 
  
    return  arr.reduce((a,b)=>a+Math.pow(b,2));
}

function printOddNumbersOnly(arr)
{
    arr1=[]
    for(let a =0;a<arr.length;a++)
    {
        if(arr[a]%2!=0){
                arr1.push(arr1[a])
        }
    }

    console.log(arr1)

}

function computeSumOfSquaresOfEvensOnly(arr)
{
   return  arr.filter(a=> a%2==0).reduce((a,b)=>a+Math.pow(b,2));
}


function sumFunc(arr)
{

    return arr.reduce((a,b)=>a+b)
}


function mulfunc(arr)
{

    return arr.reduce((a,b)=>a*b,1)

}


function findSecondBiggest(arr)
{

    var secondBiggest, max

    for(let i=0;a<arr.length;i++)
    {

        if(max==undefined)
        {
            max=arr[i]
        }
        else if( arr[i]>max)
        {
            max=arr[i]
        }

           
        
    }
    
    for(let i=0;a<arr.length;i++)
    {
         if(secondBiggest == undefined)
         {
            secondBiggest=a[i]
         }
         else{
            for(let j=0;a<arr.length;j++)
            {
                if(a[i])>
            }
         }

    }

}