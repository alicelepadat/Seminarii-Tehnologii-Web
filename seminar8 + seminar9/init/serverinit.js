import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

export var app = express();
export var router = express.Router();

//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

router.use((req, res, next) => {
    console.log("Hello from middleware!");
    next();
})

//export {app, router};