function defineFizzBuzzParams() {
    var firstval = [3, "Fizz"];
    var secondval = [5, "Buzz"];
    var thirdval = [4, "Pop"];
    var fourthval = [6, "Bang"];
    return [firstval, secondval, thirdval, fourthval];
}


function buildFizzBuzzOutput(arrayval, i) {

    return arrayval.filter(entry => (i % entry[0] == 0)).sort(function (a, b) { return a[0] - b[0] }).map(function (a) { return a[1]; }).join('');

}




