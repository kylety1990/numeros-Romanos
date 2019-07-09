describe("Numeros Romanos", function() {


    it("Some number of the chain is incorrect", function() {
        const number = "xii";

        const result = isCorrect(number)

        expect(result).toEqual(['x', 'i', 'i']);

    });

    it("convert the numbers to arabicas", function() {

        const number = ['x', 'i'];

        const result = tipeNumber(number)

        expect(result).toEqual([10, 1]);

    });

    it("two numbers are added", function() {

        const number = [10, 1];

        const result = sumNumberArabic(number)

        expect(result).toEqual([11]);

    });


    it("when subtracting Roman numerals", function() {

        const number = [1, 10];

        const result = sumNumberArabic(number)

        expect(result).toEqual([9]);

    });
});


function equal(number) {
    let result = number.toLowerCase()

    if (result === 'i') {
        return number.toLowerCase();
    } else if (result === 'v') {
        return number.toLowerCase();
    } else if (result === 'x') {
        return number.toLowerCase();
    } else if (result === 'l') {
        return number.toLowerCase();
    } else if (result === 'c') {
        return number.toLowerCase();
    } else if (result === 'd') {
        return number.toLowerCase();
    } else if (result === 'm') {
        return number.toLowerCase();
    } else {
        return false
    }
}

function isCorrect(number) {

    number.split('');

    let resultCorrect = [];
    let resultIncorrect = [];
    for (let i = 0; i < number.length; i++) {

        const correct = equal(number[i])

        if (correct === false) {

            resultIncorrect.push(number[i])

        } else {
            resultCorrect.push(number[i]);

        }
    }

    if (resultIncorrect.length > 0) {
        return 'Datos incorrectos: ' + resultIncorrect;
    } else {
        return resultCorrect;
    }

}

function tipeNumber(number) {

    let result = []

    for (let i = 0; i < number.length; i++) {

        if (number[i] === 'i') {

            result.push(1)

        } else if (number[i] === 'v') {

            result.push(5)

        } else if (number[i] === 'x') {

            result.push(10)

        } else if (number[i] === 'l') {

            result.push(50)

        } else if (number[i] === 'c') {

            result.push(100)

        } else if (number[i] === 'd') {

            result.push(500)

        } else if (number[i] === 'm') {

            result.push(1000)

        }
    }
    return result;
}



function sumNumberArabic(number) {

    for (let i = 0; i < number.length; i++) {
        if (number[i] > number[i + 1]) {
            number[i + 1] += number[i];
            number.shift()
            return number
        } else {

        }
    }
}