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
