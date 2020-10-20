//FUNCTII
//exista doua moduri de declarare a functiei

//functie de ridicare la patrat
function square(number) {
    //return number * number;
    const result = Math.pow(number, 2); //math.pow(pe cn ridicam la putere, la ce putere ridicam)
    console.log(result);
}
/*cand apelam in html functia  la evenimentul onclick de la button1 => transmitem param prin valoare - limitata doar in interiorul functiei*/

var myCar = {
    make: "Honda",
    model: "Accord",
    year: 1999
}

//o functie care schimba firma unei masini
function changeCar(car) {
    car.make = "Toyota";
}

function compareCars() {
    console.log(myCar);
    changeCar(myCar);
    console.log(myCar);
}

var colors = [
    { id: 0, name: "red" },
    { id: 1, name: "yellow" }
]

function changeColor(colors) {
    colors[1].name = "green"; //luam culoarea dupa index
}

function compareColors() {
    console.log("First array: ");
    console.log(colors);

    //deep copy 
    // metoda de object.assign nu functioneaza pentru un array de obiecte
    //var modifiedColors = Object.assign([], colors);
    //folosim un json si metoda stringify
    var newColors = JSON.parse(JSON.stringify(colors));
    //var modifiedColorsJSONString = JSON.stringify(colors);
    //var newColors = JSON.parse(modifiedColorsJSONString);

    //debugger
    changeColor(newColors);

    console.log("Second array: ");
    console.log(newColors);
}

//o functie poate fi tratata ca o expresie
const cube = function (number) {
    return result = Math.pow(number, 3);
}

//functie care primeste ca param un array de numere si returneaza acel array de nr, dar toate a puterea a 3-a
function mapCube(array, cube) {
    let result = [];
    for (index in array) {
        result[index] = cube(array[index]);
    }
    console.log(result);
}

//ca sa nu mai fac apelul mapCube in html il fac in js:
function callMapCube() {
    return mapCube([1, 2, 3, 4], cube);
}

//functie anonima - o cream in apelul unei alte functii
function callMapCubeWithAnon() {
    return mapCube([1, 2, 3, 4, 5, 6, 7], (number) => Math.pow(number, 3));
}

function consoleLoop(number) {
    console.log(number);
    if (number >= 10) {
        return;
    }
    //recursivitate - reapelam functia - incrementam nr
    consoleLoop(number + 1);
}

//nested function - functii in functii:
//calcul patretele a doua nr si apoi le aduna
function addSquares(a, b) {
    function square(number) {
        return Math.pow(number, 2);
    }
    console.log(square(a) + square(b));
}

function outsideFunction(x) {
    function insideFunction(y) {
        return x * y;
    }
    return insideFunction;
    //outsideFunction se poate apela in doua moduri
    //outsideFunction(param)(param2), unde param2 este parametrul pt insideFunction
}

function calculate() {
    //var inside = outsideFunction(4);
    //console.log(inside(5));
    console.log(outsideFunction(4)(5));
}

//arrow functions
//functia map - returneaza un array nou format cu obiectele array ul vechi dar modificate
var numbers = [1, 2, 3, 4];
var newNumbers = numbers.map(number => number + 1); //primeste ca parametru un arrow function care modifica cumva elementule unui array

var array = [
    { id: 1, name: "Ana", age: 23 },
    { id: 2, name: "Maria", age: 20 },
    { id: 3, name: "Marius", age: 21 }
]
//filter face un array nou-primeste o conditie pt a filtra array ul existent
var filteredArray = array.filter(item =>
    item.name === "Ana" || item.name === "Maria");
var object = array.find(item => item.id === 1); //imi returneaza un elem dintr un array


//functia reduce - imi ia toate elem din array, foloseste o functie definita de utilizatr, aplica functia pe elem din array si returneaza p sg valoare



function logArray() {
    //console.log(numbers);
    //console.log(newNumbers);
    console.log(array);
    console.log(filteredArray);
    console.log(object);
}


//TEMA:
//factorialul unui nr:
function noFactorial(number) {
    if (number === 0) {
        console.log(1);
    }
    else {
        let result = 1;
        for (let i = 1; i <= number; i++) {
            result = result * i;
        }
        console.log(result);
    }
}
