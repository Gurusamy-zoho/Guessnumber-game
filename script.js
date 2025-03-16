

let chance = 10;


function validateNumberInput(event){
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); 

   
}

setTimeout(function() {
   alert("Given input only between 0 to 100 only")
}, 500);

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomIntInclusive = getRandomIntInclusive(0, 100);


function guessingnum(){

    let input = document.getElementById("inputBox").value;
    let Result = document.getElementById("showRes");

    chance--;

    if(chance<0){
        Result.textContent = `💀 Game Over! The correct number was ${randomIntInclusive}.`;
        return;
    }

   

    if(input===""){
        alert("input can't be empty");
        return;
    }


   let Chances = document.getElementById("Chances");
   Chances.innerHTML = "Remaining Chances:"+chance;


   if(randomIntInclusive==input){
     Result.innerHTML = "Successfully you guessed 🎉🥳";
     return;
   }

   if(randomIntInclusive<input){
    Result.innerHTML = "📈 Too high! Try again.";
   }

   if(randomIntInclusive>input){
    Result.innerHTML = "📉 Too low! Try again.";
   }

   setTimeout(function() {
    document.getElementById('showRes').innerHTML = "";
}, 2000);
   
}

function clearinput(){
    document.getElementById("inputBox").value = "";
}