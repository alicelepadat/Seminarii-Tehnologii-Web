// const fetchPromise = fetch('https://jsonplaceholder.typicode.com/albums');
// fetchPromise.then(response => response.json())
//     .then(json => console.log(json))
//     .catch(err => console.log(err));
//nimeni pe planeta asta nu scrie sintaxa asta
//scriem asa:
fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));

//functie asyncrona -> returneaza promise-uri
async function fetchPromiseWithAsyncAwait() {
    //pt a mima comportamentul de catch fol try catch
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const json = await response.json();
        return json;
    }
    catch (err) {
        console.log(err);
    }
}

fetchPromiseWithAsyncAwait().then(json => console.log(json));
