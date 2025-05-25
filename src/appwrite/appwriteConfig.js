import { Client, Account, Databases } from 'appwrite';
const PROJECT_ID= import.meta.env.VITE_APPWRITE_PROJECT_ID;
const database_id= import.meta.env.VITE_APPWRITE_DATABASE_ID;
const collection_id= import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client = new Client();
const account = new Account(client);
const databases = new Databases(client)
client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject(PROJECT_ID)

export { client, account, databases, database_id,collection_id};