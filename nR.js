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

        } else {
            return false
        }
    }
    return result;
}

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

            resultIncorrect.push(number[i].toLowerCase())

        } else {
            resultCorrect.push(number[i].toLowerCase());

        }
    }

    if (resultIncorrect.length > 0) {
        return 'Datos incorrectos: ' + resultIncorrect;
    } else {
        return resultCorrect;
    }


}




function changeValue(number) {

    let result = [];
    for (let i = 0; i < number.length; i++) {
        if (number[i] < number[i + 1]) {
            result.push(number[i] - (number[i] * 2));

        } else {
            result.push(number[i])
        }

    }
    return result
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

let number = "xi"


let toma = isCorrect(number);
console.log(toma)
let vamos = tipeNumber(toma)
console.log(vamos)
let casi = sumNumberArabic(vamos)
console.log(casi)