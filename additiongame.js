let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');
let sum = document.getElementById('sum');
let check = document.getElementById('check');
let restart = document.getElementById('restart');
let para = document.getElementById('para');

firstNumber.innerHTML= Math.ceil(Math.random()*100);
secondNumber.innerHTML= Math.ceil(Math.random()*100);

first = firstNumber.innerHTML;
second = secondNumber.innerHTML; 
let randomNumbersSum = parseInt(first)+ parseInt(second);


function Check(){
    let userEnteredValue = sum.value;
    // console.log("User Input Value is" + " " + userEnteredValue);
    // console.log(randomNumbersSum);

    if(randomNumbersSum == userEnteredValue){
        
        para.textContent = "Congratulations Your Answer is Correct";
    }
    else{
        para.textContent = "Sorry Try Again";
    }

}

function Restart(){
    window.location.reload();
}
 