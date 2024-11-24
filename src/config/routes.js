import express from "express";
import { listPosts, postNewContent } from "../controllers/postsController.js";

const routes = (app) => {
    app.use(express.json());
    app.get("/posts", listPosts);
    app.post("/posts", postNewContent);
    

}

export default routes;


