// Fizz Buzz Example

var btnFizzBuzz = document.getElementById("FizzBuzzButton")
btnFizzBuzz.addEventListener("click", clickFizzBuzzButton);

var txtFizzBuzz = document.getElementById("FizzBuzzInput")
var outputFizzBuzz = document.getElementById("FizzOutput")

function clickFizzBuzzButton()
{
    executeFizzBuzz(defineFizzBuzzParams(), txtFizzBuzz.value);
}


function executeFizzBuzz(arrayval, maxLength) {

    for (var i = 1; i <= maxLength; i++) {
        var output = buildFizzBuzzOutput(arrayval, i);
        outputFizzBuzz.innerHTML += i+" - "+ (output || i) + "<br/>";
    }
}
