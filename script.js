

let chance = 10;


function validateNumberInput(event){
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); 

   
}

setTimeout(function() {
   alert("Given input only betwwen 0 to 100 only")
}, 500);

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomIntInclusive = getRandomIntInclusive(0, 100);


function guessingnum(){

    chance--;

    if(chance<0){
        alert ("Your change is finsihed");
        return;
    }

    let input = document.getElementById("inputBox").value;
    let Result = document.getElementById("showRes");

    if(input===""){
        alert("input can't be empty");
        return;
    }


   let Chances = document.getElementById("Chances");
   Chances.innerHTML = "Remaining Chances:"+chance;


   if(randomIntInclusive==input){
     Result.innerHTML = "Successfully you guessed";
     return;
   }

   if(randomIntInclusive<input){
    Result.innerHTML = "High";
   }

   if(randomIntInclusive>input){
    Result.innerHTML = "Low";
   }

   setTimeout(function() {
    document.getElementById('showRes').innerHTML = "";
}, 1500);
document.getElementById("inputBox").value = "";
}

function clearinput(){
    document.getElementById("inputBox").value = "";
}