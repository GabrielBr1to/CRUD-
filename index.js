import express from "express";
import router from "./src/routes/marca.js"

const app = express();
app.use(express.json());

app.use(router);

app.listen(3000,() =>{
    console.log("servidor funcionado na porta 3000.")
})