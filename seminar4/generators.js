//functii generatori - sau fctii start
//functiile generator nu se pot declara fol arrow function
function* squareGenerator(number) {
    //consitie de iterativitate
    while (true) {
        //yield returneaza mai multe valori
        yield Math.pow(number, 2);
        number = Math.pow(number, 2);
    }
}

// const generator = squareGenerator(2);
// console.log(generator.next().value); //next.value imi genereaza urm valoare
// console.log(generator.next()); //next imi genereaza urm obiect
// generator.return();
// console.log(generator.next());

// Square generator //

// Fibonacci generator //1,1,2,3,5,8,..
function* fibonacciGenerator(number) { //number e un fel de index
    if (number < 2) {
        return 1;
    }
    else {
        yield fibonacciGenerator(number - 1).next().value
            + fibonacciGenerator(number - 2).next().value;
    }
}

function* fibonacciSeries() {
    let number = 0;
    while (true) {
        const result = fibonacciGenerator(number).next().value;
        yield result;
        number++;
    }
}

function callFibonacciSeries(limita) {
    for (let i = 0; i < limita; i++) {
        console.log(fibonacci.next().value);
    }
}

const fibonacci = fibonacciSeries();
callFibonacciSeries(10);
// Fibonacci generator //

// Square generator //