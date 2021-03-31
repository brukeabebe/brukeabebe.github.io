



  //  let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /)
    
    function clock()
    { 
  
         timer=setInterval( count, 1000);
         //timer=setInterval( count, 60,000);
         //timer=setInterval( count, 3,600,000);
     
    }


    window.onload=clock();
    function count()

    { 
        
        document.getElementById("year").innerHTML ="";
        document.getElementById("year").innerHTML += (new Date()).getFullYear();

        document.getElementById("month").innerHTML ="";
        document.getElementById("month").innerHTML += (new Date()).getMonth();

        document.getElementById("date").innerHTML ="";
        document.getElementById("date").innerHTML += (new Date()).getDate();

        document.getElementById("seconds").innerHTML ="";
        document.getElementById("seconds").innerHTML += (new Date()).getSeconds();
       
        document.getElementById("minutes").innerHTML ="";
        document.getElementById("minutes").innerHTML += (new Date()).getMinutes();    
        
        document.getElementById("hours").innerHTML ="";
        document.getElementById("hours").innerHTML += (new Date()).getHours();
        
        
        
       //document.getElementById("clock").innerHTML += "ss";
    }