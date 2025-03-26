

let chance = 10;


function validateNumberInput(event){
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); 

   
}

setTimeout(function() {
    Swal.fire({
        title: 'Game Rule',
        html: `Given input between 0 and 100`,
        icon: 'warning',
        confirmButtonText: 'Done',
        timer: 3000,
        position: 'center',
        heightAuto: false,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
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
        Result.textContent = ``;
        Swal.fire({
            title: 'Game Over 💀',
            html: `Game Over! The correct number was ${randomIntInclusive}.`,
            icon: 'info',
            confirmButtonText: 'Done',
            timer: 3000,
            position: 'center',
            heightAuto: false,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
        return;
    }



    if(input===""){
        Swal.fire({
            title: 'Error',
            html: `Input is empty`,
            icon: 'error',
            confirmButtonText: 'Ok',
            timer: 3000,
            position: 'center',
            heightAuto: false,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
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