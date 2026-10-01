import express from "express";
import Controllermarca from "../controllers/marca.js"

const router = express.Router();

const controllers = new Controllermarca();

router.post("/api/marca", controllers.adicionar);

export default router;