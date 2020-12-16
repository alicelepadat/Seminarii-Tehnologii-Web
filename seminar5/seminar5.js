const link = "https://jsonplaceholder.typicode.com/posts/";

async function getPosts() {
    try {
        const posts = (await axios.get(link)).data;
        return posts;
    } catch (err) {
        console.log(err);
    }
}

async function createPost(post) {
    const response = (await axios.post(
        link,
        post, {
            headers: {
                "Content-Type": "application/json"
            }
        }
    )).data;
    return response;
}

async function deletePosts(postId) {
    const response = (await axios.delete(link + postId)).data;
    return response;
}


function renderTable(posts) {
    const existentTable = document.getElementById("renderTable");
    if (existentTable) {
        document.body.removeChild(existentTable);
    }

    var table = document.createElement("table");
    var tableHeader = document.createElement("thead");
    var tableBody = document.createElement("tbody");

    var headerRow = document.createElement("tr");

    for (prop in posts[0]) {
        var headerCell = document.createElement("th");
        headerCell.appendChild(document.createTextNode(prop));
        headerRow.appendChild(headerCell);
    }
    tableHeader.appendChild(headerRow);

    posts.forEach((post, index, self) => {
        var bodyRow = document.createElement("tr");
        for (prop in post) {
            var bodyCell = document.createElement("td");
            bodyCell.appendChild(document.createTextNode(post[prop]));
            bodyRow.appendChild(bodyCell);
        }

        var deleteButtonCell = document.createElement("td");
        var deletebutton = document.createElement("button");
        deletebutton.textContent = "Delete";

        deletebutton.addEventListener("click", () => {
            callDeletePost(post.id);
            self.splice(index, 1);
            renderTable(self);
        })

        deleteButtonCell.appendChild(deletebutton);
        bodyRow.appendChild(deleteButtonCell);
        tableBody.appendChild(bodyRow);
    });

    table.appendChild(tableHeader);
    table.appendChild(tableBody);
    table.id = "renderTable";
    //table.style.cssText="border: 1px solid black; marginTop: 20px";

    document.body.appendChild(table);
}

function postForm(event) {
    event.preventDefault();
    const userId = document.getElementById("postUserId").value;
    const title = document.getElementById("postTitle").value;
    const body = document.getElementById("postBody").value;

    if (!userId || !title || !body || userId <= 0) {
        return;
    }

    callCreatePostwithInsert({ id: 101, userId: userId, title: title, body: body });
}

function callGetPosts() {
    getPosts().then(posts => renderTable(posts))
        .catch(err => console.log(err));
}


function callCreatePost() {
    createPost({ id: 101, userId: 101, title: "titlu post", body: "body post" }).then(post => console.log(post)).catch(err => console.log(err));
}

function callCreatePostwithInsert(post) {
    createPost(post).then(post => {
        getPosts().then(posts => {
            posts.push(post);
            renderTable(posts);
        });
    })
}


function callDeletePosts() {
    deletePosts().then(resp => console.log(resp)).catch(err => console.log(err));
}

function callDeletePost(postId) {
    deletePosts(postId).then(resp => console.log(resp)).catch(err => console.log(err));
}

//tema sa scapam de getPosts -> tre sa ne luam o variabila in care sa stocam postarile
//ca sa nu mai apelam getPosts
//implemetarea put ul -> ne mai facem un form exact ca asta din seminar
//punem un buton de edit -> cand apasam pe el ni se va popula campurile cu inf id necesar si se va edita in timp real inregistrarea cu id respectiv
//plus un buton de submit
//actualizarea in timp real a tabelului