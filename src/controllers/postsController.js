import { getAllPosts, createPost } from "../models/postsModel.js";

export async function listPosts (req, res) {
    const posts = await getAllPosts();

    res.status(200).json(posts);
}

export async function postNewContent(req, res) {
    
    const newPost = req.body;

    try {
        const postCreated = await createPost(newPost);
        
        res.status(200).json(postCreated);
        
    } catch (error) {
        console.error(error.message);

        res.status(500).json({"error": "request failed"});
    }
    
}