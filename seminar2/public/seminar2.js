//variabilele se definesc cu var, let, const
//dif intre let si var:
/*  var este folosit in tot programul
    let (si const) este folosit doar in interiorul blocului in care am declarat variabila*/

//functiile se definesc in doua moduri
//functiile sunt constante
/*function checkType(a,b,c) {
    -----corpul functiei
}

const checkType = (a,b,c) => {
    ------corpul functiei
}*/

function checkType() {
    const testConst = 1; //test = 4; nu se pot reasigna variabilele constante
    var testVar = "Ana"; //function scope
    let testLet; //block scope
    //asignarea este dinamica in js
    console.log("Var value: " + testVar);
    console.log("Let value: " + testLet);
    console.log("Const value: " + testConst);

    if (1 == 1) {
        var testVar2 = "Maria";
    }

    console.log("Var second value: " + testVar2);
}

//operatori
function checkOperators() {
    //js isi evalueaza espresiile de la stanga la dreapta
    console.log(1 + "Ana"); //afis 1Ana
    console.log("Ana" + 1); //afis Ana1
    console.log(3 + 2 + "Ana"); //afis 5Ana
    console.log("Ana" + 2 + 3); //Ana23

    console.log(1 == '1');
    console.log(1 === '1'); //=== egal si de acelasi tip
    console.log(typeof 1);
    console.log(typeof '1');
    //orice variabila declarata are valoarea undefined
    //undefined nu are tip, null are tip object

    var testArray1 = [1, 2, 3];
    console.log(typeof testArray1); //object, nu exista tipul array, un array are componentele unui object + length
}

function arrayOperations() {
    var array = [1, 2, 3];
    //push si pop - insereaza sau elimina un element
    array.push(4); //inserare la sfarsit
    array.unshift(0); //inserare la inceput
    console.log(array);
    //array.pop(4);

    var array2 = array; //shallow copy
    array.push(5);


    var array3 = Object.assign([], array);
    array.push(6);
    console.log(array2);
    console.log(array3);
}

function forOperations() {
    var forArray = [1, 2, 3];
    //3 tipuri de for: 
    //for(i=o;i<..;i++), for in, for of
    for (let i = 0; i < forArray.length; i++) {
        console.log(forArray[i]);
    }

    //obiecte
    const forInObject = {
        name: "Ana",
        age: 20,
        eyecolor: "green"
    };

    //for in - iteram prin proprietatile obiectului
    for (attribute in forInObject) {
        console.log(attribute); //numele proprietatii
        console.log(forInObject[attribute]);
    }

    var colors =["red", "green", "yellow", "blue"];
    //for of-iteram prin array-ul de culori
    for(let color of colors){
        console.log(color);
    }
}