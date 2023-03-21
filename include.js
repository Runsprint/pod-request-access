let gvantsa = document.querySelector (".first");
let gretchen = document.getElementById("second");
let h5 = document.getElementsByClassName("tag");
let expressions = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let input = document.getElementById("input1");

gretchen.addEventListener("click", function(){
    if(expressions.test(input.value)){
        input.style.background = "green";
        h5[0].style.display = "none";
    }else {
        h5[0].style.display = "block";
    }  
});

