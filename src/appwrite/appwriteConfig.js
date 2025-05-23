import { Client, Account } from 'appwrite';
const PROJECT_ID=import.meta.env.VITE_APPWRITE_PROJECT_ID;
const client = new Client();
const account = new Account(client);
client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject(PROJECT_ID)

export { client, account};