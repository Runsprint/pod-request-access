let gvantsa = document.querySelector (".first");
let gretchen = document.getElementById("second");
let h5 = document.getElementsByClassName("tag");
let expressions = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let input = document.getElementById("input1");

// regular expretions
//eventlistener
//sawyisi lekcia js
//shemidzlia gavamwvano

gretchen.addEventListener("click", function(){
    if(expressions.test(input.value)){
        input.style.background = "green";
    }else {
        h5[0].style.display = "block";
        // h5[0].style.color = "green";
        console.log("jsbj");
    }  
});
// .value aris imistvis, rom





























// numbers +10 ps mnishvneloba shevcvalo.





// let p = document.getElementById("numbers");
// let y = Number(p.value)  + 10;
// p.value = y;


//10 p , 0 yvelas . 
//1input, sheviyvan ricxvs,
// tu ricxvi sheviyvane, gamoiprintos ricxvi yvela 0-is nacvlad 
// tu stringi sheviyvane, rror.
// mqondes gilaki, roca davaklikeb yvela ricxvs daematos + input da gamoisaxos ekranze.

let numbers = document.getElementsByClassName("something");
let nums = numbers.value ;
let length = numbers.length;
for(let i = 0 ; i < length ; i++){
    
    nums.addEventListener("click", function(){
        
        
    });

}


