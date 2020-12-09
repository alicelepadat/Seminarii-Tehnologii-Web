const mainDiv = document.getElementById("mainDiv");
console.log(mainDiv);

const elements = document.getElementsByClassName("outsideParagraph");
for (elem of elements) {
    console.log(elem);
}
//console.log(elements);

const elemsTag = document.getElementsByTagName("p");
console.log(elemsTag);

//return o lista de nocuri ce cnitne elem html
const elemByName = document.getElementsByName("testName");
//console.log(elemByName);
for (elem of elemByName) {
    console.log(elem);
}