function tipeNumber(number) {

    let result = []
    if (number != false) {
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
    } else {
        result = false
        return result;
    }
    if (result)

}

function equal(number) {
    let result = number.toLowerCase()
    if (number != false) {
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
            return false;
        }
    } else {
        return false
    }
}

function isCorrect(number) {

    number.split('');

    let resultCorrect = [];
    let resultIncorrect = [];
    if (number != false) {
        for (let i = 0; i < number.length; i++) {

            const correct = equal(number[i])

            if (correct === false) {

                resultIncorrect.push(number[i].toLowerCase())

            } else {
                resultCorrect.push(number[i].toLowerCase());

            }
        }

        if (resultIncorrect.length > 0) {
            console.log('Datos incorrectos: ' + resultIncorrect);
            return false
        } else {
            return resultCorrect;
        }
    }



}


function sumNumberArabic(number) {
    let final = number.length
    console.log(final);
    if (number != false) {
        for (let i = 0; i < number.length; i++) {
            if (number[i] >= number[i + 1]) {
                number[i + 1] += number[i];



            } else if (number[i] < number[i + 1] || (number[i + 1] === 1 && number[i + 1] === 10 && number[i + 1] === 100)) {

                number[i + 1] -= number[i];

            }
        }
        return number[final - 1]
    } else {
        return false
    }
}

let number = "Ilx"


let toma = isCorrect(number);
console.log(toma)
let vamos = tipeNumber(toma)
console.log(vamos)
let casi = sumNumberArabic(vamos)
console.log(casi)