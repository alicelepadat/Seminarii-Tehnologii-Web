var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function showArray() {
    let text = document.getElementById("text1");
    text.value = numbers;
}

function reduceFunction(a, b) {
    return a * b;
}

function doFactorial(array, reduceFunction) {
    var result = array.reduce(reduceFunction);
    return result;
}

function showFactorial() {
    let text1 = document.getElementById("text1");
    let text = document.getElementById("text2");
    text.value = doFactorial(numbers, reduceFunction);
    alert(`${numbers.length}! = ${text.value}.`);
}
