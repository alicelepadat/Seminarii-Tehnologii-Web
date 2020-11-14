import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

var posts = [];
for (let i = 1; i <= 20; i++) {
    posts.push({ id: i, userId: i, title: `title ${i}`, body: `body ${i}` });
}

var app = express();
var router = express.Router();

//  middleware - seteaza headerul
app.use(bodyParser.json());
//parsarea informatiilor din url
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", router);

//  Middleware - se apeleaza in ordinea declararii in proiect
//- o functie care ne permite sa lucram cu ob de request si response
router.use((req, res, next) => {
    //res.setHeader("Content-Type", "application/json"); - putem seta headerul si aici
    console.log("Hello from Middleware!");
    next();
});

//middleware si ruta asta
router.route("/posts").get((req, res) => {
    console.log("Hello from get!");
    res.json(posts);
});

router.route("/posts").post((req, res) => {
    console.log("Hello from post!");
    const post = req.body;
    if (!post) {
        res.sendStatus(500);
        return;
    }

    posts.push(post);
    res.json(posts);
});

router.route("/posts/:id").put((req,res) => {
    const postId = req.params.id;
    const newPost = req.body;
    if(!newPost){
        res.sendStatus(500);
        return;
    }
    const newPosts = posts.map(post => 
        post.id == postId ? newPost : post);
    res.json(newPosts);
});

router.route("/posts/:id").patch((req,res)=>{
    const postId = req.params.id;
    const newPost = req.body;
    if(!newPost){
        res.sendStatus(500);
        return;
    }
    const newPosts = posts.map(post => 
        post.id == postId ? Object.assign(post, 
            {title: newPost.title, body: newPost.body}) : post);

    res.json(newPosts);
})

router.route("/posts/:id").delete(function (req,res){
    const postId = req.params.id;
    const index = posts.findIndex(post => post.id == postId);

    posts.splice(index, 1);
    res.json(posts);
});

var port = 8000;
app.listen(port, () => console.log(`The app is listening to ${port}`));
