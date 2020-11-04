/*Tema speciala 2: 
a) Să se declare și să se folosească o variabilă ce va tine toate postarile utilizate in document. 
    Api-ul de get se va apela o singura data, la început -DONE
b) Să se implementeze mecanismul de edit, folosind principiile mecanismului de create. Asta presupune:
    - Crearea unui api axios de PUT
    - Crearea unui buton de edit, langa cel de delete DONE
    - Crearea unui form ce va primi și va edita informațiile obiectului curent DONE
    - Actualizarea informațiilor și reconstruirea tabelului*/

const link = "https://jsonplaceholder.typicode.com/posts/";


//cerinta 1
var posts = axios.get(link).
    then(response => response.data).
    then(data => {
        //console.log(data); //afisare posts la consola
        renderTable(data); //populare tabel
        return data; //return posts pentru a folosi ulterior variabila
    })
    .catch(err => console.log(err));


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

function callCreatePostwithInsert(post) {
    createPost(post).then(posts => {
        posts.push(post); //adaugam un nou post - ne folosim de variabila in care am stocat array-ul de posts
        renderTable(posts);
    });
}

async function deletePosts(postId) {
    const response = (await axios.delete(link + postId)).data;
    return response;
}

function callDeletePosts() {
    deletePosts().then(resp => console.log(resp)).catch(err => console.log(err));
}

function callDeletePost(postId) {
    deletePosts(postId).then(resp => console.log(resp)).catch(err => console.log(err));
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

function addPostForm(event) {
    event.preventDefault();
    const userId = document.getElementById("postUserID").value;
    const title = document.getElementById("postTitle").value;
    const body = document.getElementById("postBody").value;

    if (!userId || !title || !body || userId <= 0) {
        return;
    }

    callCreatePostwithInsert(
        { id: 11, userId: userId, title: title, body: body }
    );
}