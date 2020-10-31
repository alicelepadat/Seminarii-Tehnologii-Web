import express from "express";
import path from "path";

var app = express();
var router = express.Router();

app.use("/api", router);

//static - gestioneaza (gaseste) toate fisierele statice din aplicatie

app.use("/api", express.static(path.resolve() + "\\public"));

router.route("/seminar3").get((request, response) => {
    //din server tre sa trimitem catre client acea pagina html
    response.sendFile(path.join(path.resolve(), "/public/seminar3.html"));
});

//serverul tre sa asculte de un port
var port = 8000;
app.listen(port);
//console.log("API listening to " + port);
console.log(`API listening to ${port}`);

//npm install express
//accesez http://localhost:8000/api/seminar3