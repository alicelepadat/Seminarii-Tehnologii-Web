//server express
//accesez http://localhost:8080/seminar3/index

import express from "express";
import path from "path";

var app=express();
var router=express.Router();

app.use("/seminar3", router);

app.use("/seminar3", express.static(path.resolve() + "\\public"));

router.route("/index").get((request, response) => {
    response.sendFile(path.join(path.resolve(), "/public/index.html"));
});

var port = 8080;
app.listen(port);
console.log(`API listening to ${port}`);