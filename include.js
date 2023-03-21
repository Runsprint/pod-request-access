let gvantsa = document.querySelector (".first");
let gretchen = document.getElementById("second");
let h5 = document.getElementsByClassName("tag");
let expressions = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let input = document.getElementById("input1");

gretchen.addEventListener("click", function(){
    if(expressions.test(input.value)){
        input.style.background = "green";
    }else {
        h5[0].style.display = "block";
    }  
});











// just exercise


















// numbers +10 ps mnishvneloba shevcvalo.





// let p = document.getElementById("numbers");
// let y = Number(p.value)  + 10;
// p.value = y;


//10 p , 0 yvelas . 
//1input, sheviyvan ricxvs,
// tu ricxvi sheviyvane, gamoiprintos ricxvi yvela 0-is nacvlad 
// tu stringi sheviyvane, rror.
// mqondes gilaki, roca davaklikeb yvela ricxvs daematos + input da gamoisaxos ekranze.

// let array = document.getElementsByClassName("something");
// let nums = array.value ;
// let length = array.length;
// let button = document.getElementById("button0")

// function changeNumber(){
//     nums = input.values
// }

// for(let i = 0 ; i < length ; i++){
//    button.addEventListener("click", changeNumber);
// }


