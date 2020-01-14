function defineFizzBuzzParams() {
    var firstval = [3, "Fizz"];
    var secondval = [5, "Buzz"];
    var thirdval = [4, "Top"];
    var fourthval = [6, "Frost"];
    var arrayval = [firstval, secondval, thirdval, fourthval];
    return arrayval;
}



function fizzBuzzOutput(i, arrayentry) {
    if (i % arrayentry[0] == 0) {
        return arrayentry[1];
    }
    return "";
}

function buildFizzBuzzOutput(arrayval, i) {
    var output = "";
    if (arrayval.length > 0) {
        for (var x = 0; x < arrayval.length; x++) {
            output += fizzBuzzOutput(i, arrayval[x]);
        }
    }
    return output;
}




