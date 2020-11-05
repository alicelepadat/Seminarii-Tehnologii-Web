/*Tema speciala 2: 
a) Să se declare și să se folosească o variabilă ce va tine toate postarile utilizate in document. 
    Api-ul de get se va apela o singura data, la început -DONE
b) Să se implementeze mecanismul de edit, folosind principiile mecanismului de create. Asta presupune:
    - Crearea unui api axios de PUT
    - Crearea unui buton de edit, langa cel de delete DONE
    - Crearea unui form ce va primi și va edita informațiile obiectului curent DONE
    - Actualizarea informațiilor și reconstruirea tabelului*/
const link = "https://jsonplaceholder.typicode.com/posts/";


/*var tablePosts = getPosts().
    then(posts => {
        console.log(posts)
        renderTable(posts);
    })
    .catch(err => console.log(err));
 
*/

async function getPosts() {
    try {
        const posts = (await axios.get(link)).data;
        return posts;
    }
    catch (err) {
        console.log(err);
    }
}

async function createPost(post) {
    const response = (await axios.post(
        link,
        post,
        {
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

//----CERINTA 2---
async function getSelectedPost(postId) {
    const response = (await axios.get(link + postId)).data;
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

        //---BUTON EDIT---
        var editButtonCell = document.createElement("td");
        var editButton = document.createElement("button");
        editButton.textContent = "Edit";

        editButton.addEventListener("click", () => {
            fillEditForm(post.id);
            
        })

        editButtonCell.appendChild(editButton);
        bodyRow.appendChild(editButtonCell);
        //---BUTON EDIT---

        tableBody.appendChild(bodyRow);
    });

    table.appendChild(tableHeader);
    table.appendChild(tableBody);
    table.id = "renderTable";
    //table.style.cssText="border: 1px solid black; marginTop: 20px";

    document.body.appendChild(table);
}


function addPostForm(event) {
    event.preventDefault();
    const userId = document.getElementById("postUserId").value;
    const title = document.getElementById("postTitle").value;
    const body = document.getElementById("postBody").value;

    if (!userId || !title || !body || userId <= 0) {
        return;
    }

    callCreatePostwithInsert(
        { id: 101, userId: userId, title: title, body: body }
    );
}

//---CERINTA 2---
var editUserId = document.getElementById("editpostUserID");
var editTitle = document.getElementById("editpostTitle");
var editBody = document.getElementById("editpostBody");

function fillEditForm(postId) {
    getSelectedPost(postId).then(resp => {
        //console.log(resp);
        editUserId.value = resp.userId;
        editTitle.value = resp.title;
        editBody.value = resp.body;
        return postId;
    }).catch(err => console.log(err));
}


function editPostForm(event) {
    event.preventDefault();
    
    var newUserID = editUserId.value;
    var newTitle = editTitle.value;
    var newBody = editBody.value;

    if (!newUserID || !newTitle || !newBody || newUserID <= 0) {
        return;
    }

}

function callGetPosts() {
    getPosts().then(posts => renderTable(posts))
        .catch(err => console.log(err));
}


function callCreatePost() {
    createPost(
        { id: 101, userId: 101, title: "titlu post", body: "body post" }).then(post => console.log(post)).catch(err => console.log(err));
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