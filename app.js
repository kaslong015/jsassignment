function loading(){
    var el = document.getElementById("hello");
    var button = document.querySelector("button");

    el.addEventListener("mousemove",function(){
        el.textContent = "you just clicked me!!";
        document.body.style.backgroundColor = "blue";
        document.body.style.color = "yellow";
        document.body.style.fontSize = "18px";
    });

    el.addEventListener("mouseout",function(){
        document.body.style.backgroundColor ="red";
        document.body.style.fontSize = "30px";
        document.body.style.color = "#777";
    });
}