var posts = [
    { title: "post one", body: "this is post one" },
    { title: "post two", body: "this is post two" }
];

function getPosts() {
    setTimeout(function () {
        posts.forEach(post => console.log(post));
    }, 2000);

}

function createPost(post, callback){
    setTimeout(function () {
        posts.push(post);
        console.log("Hello from createPost!");
        callback();
    }, 2000);
}

getPosts();
createPost(
    {title: "post three", body: "this is post three"},
    getPosts);
