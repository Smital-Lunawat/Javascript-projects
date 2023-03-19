function displayTime(){
    var time = new Date();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var session = document.getElementById('session');
    
    if(hrs>=12){
        session.innerHTML="PM"
    }
    else{
        session.innerHTML="AM"
    }

    if(hrs>12){
        hrs=hrs-12;
    }

    document.getElementById('hours').innerHTML=hrs;
    document.getElementById('minutes').innerHTML=min;
    document.getElementById('seconds').innerHTML=sec;
    
}
setInterval(displayTime, 10);