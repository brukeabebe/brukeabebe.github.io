



  //  let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /)
    let seconds=null;
    let minutes= null;
    let hours=null;
    function clock()
    { 
    if(seconds|| minutes || hours ==null)
     {
         timer=setInterval( count, 1000);
         //timer=setInterval( count, 60,000);
         //timer=setInterval( count, 3,600,000);
     }
    }


    window.onload=clock();
    function count()

    {
        document.getElementById("seconds").innerHTML ="";
        document.getElementById("seconds").innerHTML += (new Date()).getSeconds();
       
        document.getElementById("minutes").innerHTML ="";
        document.getElementById("minutes").innerHTML += (new Date()).getMinutes();    
        
        document.getElementById("hours").innerHTML ="";
        document.getElementById("hours").innerHTML += (new Date()).getHours();
        
        
        
       //document.getElementById("clock").innerHTML += "ss";
    }