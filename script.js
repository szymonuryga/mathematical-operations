

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomOperation() {
    //opertaion = getRandomInt(1,  5);
    opertaion = 3;
    a = getRandomInt(-20, 20);
    b = getRandomInt(-20, 20);
    if (opertaion === 1) {
        result = a + b;
        if (b < 0) {
            b = -b;
            printOperation(a, b, '-');
        } else {
            printOperation(a, b, '+');
        }
    }
    if (opertaion === 2) {
        result = a - b;
        if (b < 0) {
            b = -b;
            printOperation(a, b, '+');
        } else {
            printOperation(a, b, '-');
        }
    }
    if (opertaion === 3) {
        while (a % b !== 0) {
            b = getRandomInt(-20, 20);
        }
        result = a / b;
        printOperation(a, b, '/');
    }
    if (opertaion === 4) {
        result = a * b;
        printOperation(a, b, '*');
    }
    return result;
}

function printOperation(a, b, operat) {
    const print = document.getElementById("operation");
    print.innerText = `${a} ${operat} ${b}`;
}

var res = getRandomOperation();

function checkResult() {
    const answer = document.getElementById("answer").value;
    const message = document.querySelector(".message");
    if (res == answer) {
        message.innerText = "Bravo, well done. The result is " + res;
        message.className = 'succes';
    }
    else {
        message.innerText = "Wrong The result is " + res + ", please try again";
        message.className = 'error';
    }
}
