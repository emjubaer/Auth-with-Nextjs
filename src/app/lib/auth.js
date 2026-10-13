import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MONGO_URL);
const db = client.db(auth_db);

export const auth = betterAuth({
     emailAndPassword: { 
    enabled: true, 
  },
  
  database: mongodbAdapter(db, {
    client,
  }),
});