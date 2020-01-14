// Make sure that your javscript code doesn't use any ES6 funcitonality such as let of const or arrow functions
// Otherwise Chutpah wont recognise the tests and show them in the test explorer.
// Make sure that the chutzpah.json file is set up and points to the correct source and test directory

describe('Test fizzBuzzOutput',
    function () {
        it('Check it returns Fizz string for a matching value of 3', function () {
            var result = fizzBuzzOutput(3, [3, 'Fizz']);
            expect(result).toBe('Fizz');
        });

        it('Check it does not returns a text string for a value of 2 and a mod of 3', function () {
            var result = fizzBuzzOutput(2, [3, 'Fizz']);
            expect(result).toBe('');
        });
    });

describe('Test defineFizzBuzzParams', function () {
    it('Check it a matching array', function () {
        var firstval = [3, "Fizz"];
        var secondval = [5, "Buzz"];
        var thirdval = [4, "Top"];
        var fourthval = [6, "Frost"];
        var result = defineFizzBuzzParams();
        expect(result).toEqual([firstval, secondval, thirdval, fourthval]);
    });
});

describe('Test buildFizzBuzzOutput', function () {

    var arrayval = [];

    //This will be called before running each spec
    beforeEach(function () {
        arrayval = defineFizzBuzzParams();
    });

    it('Check for a return of Fizz for a value of 3', function () {
        var result = buildFizzBuzzOutput(arrayval, 3);
        expect(result).toBe('Fizz');
    });

    it('Check for a return of Top for a value of 4', function () {
        var result = buildFizzBuzzOutput(arrayval, 4);
        expect(result).toBe('Top');
    });

    it('Check for a return of Buzz for a value of 5', function () {
        var result = buildFizzBuzzOutput(arrayval, 5);
        expect(result).toBe('Buzz');
    });

    it('Check for a return of FizzFrost for a value of 6', function () {
        var result = buildFizzBuzzOutput(arrayval, 6);
        expect(result).toBe('FizzFrost');
    });

    it('Check for a return of FizzFrost for a value of 17', function () {
        var result = buildFizzBuzzOutput(arrayval, 17);
        expect(result).toBe('');
    });
});

