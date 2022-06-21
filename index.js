const buttonOne = document.querySelector(".fizz-buzz-button");


function fizzBuzz() {
    let answer = document.querySelector("#fizz-buzz-input").value;
    let answerAsNumber = parseInt(answer);
    
    for (let i = 1; i <= answerAsNumber; i++){
        console.log(i);
       if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
       } else if (i % 3 === 0){
        console.log("Fizz")
       } else if (i % 5 === 0) {
        console.log("Buzz")
       } else {
        console.log("i")
       }
    }
       }
       
    function handleClick(event) {
    event.preventDefault();
    answer.value = "";
}
buttonOne.addEventListener('click', fizzBuzz);