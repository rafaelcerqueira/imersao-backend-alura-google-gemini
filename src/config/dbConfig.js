import { MongoClient } from "mongodb";

export default async function connectToDB(stringConection) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(stringConection);
        console.log('Connected to database cluster...');
        await mongoClient.connect();
        console.log('Connected to MongoDB successfully!');

        return mongoClient;
    } catch (error) {
        console.log('Failed to connect to the database!', error);
        process.exit();
    }
    
}

