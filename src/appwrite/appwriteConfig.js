import { Client, Databases, Account } from 'appwrite';
const PROJECT_ID=import.meta.env.VITE_APPWRITE_PROJECT_ID;
const API_KEY=import.meta.env.VITE_APPWRITE_API_KEY;

const client = new Client();
const account = new Account();

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject(PROJECT_ID)
    .setKey(API_KEY);

export { client, account};