import connectToDB from "../config/dbConfig.js";

const connection = await connectToDB(process.env.STRING_CONEXAO);

export async function getAllPosts() {
    const db = connection.db("imersao-backend");
    const collection = db.collection("posts");

    return collection.find().toArray();

}

export async function createPost() {
    const db = connection.db("imersao-backend");
    const collection = db.collection("posts");

    return collection.insertOne();
}