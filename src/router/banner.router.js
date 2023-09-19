import express from "express";
import { bannerController } from "../controllers";


const routerBanner = express.Router();

// GET ALL
routerBanner.get("/", bannerController.getAll);

// CREATE
routerBanner.post("/", bannerController.create);

// UPDATE
routerBanner.put("/:id", bannerController.update);

// REMOVE
routerBanner.delete("/:id", bannerController.remove);

export default routerBanner;