var posts = [
    { title: "post one", body: "this is post one" },
    { title: "post two", body: "this is post two" }
];

function getPosts() {
    setTimeout(function () {
        posts.forEach(post => console.log(post));
    }, 2000);

}

//ctrl + k + c -> comentam o secv de cod
//ctrl + k + u -> decomentam o secv de cod
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            posts.push(post);
            //in cazul in care exista erori tre sa apelam reject
            const error = { status: false, message: "This is an error." };
            if (!error.status) {
                resolve();
            }
            else {
                reject(error.message);
            }
        }, 2000);
    });
}

//getPosts();
createPost(
    //in then stabilim ce se intampla daca functia s a rezolvat
    { title: "post three", body: "this is post three" })
    .then(getPosts).catch(err => console.log(err));

// Promises //

//Multiple promises //
const promise1 = new Promise((resolve, reject) => {
    resolve("Hello from promise 1!");
});

const promise2 = new Promise((resolve, reject) => {
    resolve("Hello from promise 2!");
});

Promise.all([promise1, promise2]).then(message => console.log(message));
//Multiple promises//
