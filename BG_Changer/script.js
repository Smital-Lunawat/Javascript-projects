const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click",function(){
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var color="rgb(" + r + "," + g + "," + b + ")";
        document.body.style.background=color;
        
})