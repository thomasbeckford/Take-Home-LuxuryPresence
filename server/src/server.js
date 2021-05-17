
require("dotenv").config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { db } from "./models";

import {typeDefs} from './graphql/typedefs'
import {resolvers} from './graphql/resolvers'
import { ApolloServer } from 'apollo-server-express'

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(cors());

// Set route api prefix
app.use("/api", router);

router.get("/healthcheck", async (req, res) => {
  res.status(200).json({ status: "online" });
});

// Apply middleware

// Here we can set a context with the models for the apollo server, 
// so when we receibe a request on any resolver, we can have the model there.

// This would be the example:
// const server = new ApolloServer({
//   { typeDefs, resolvers },
//   context: async ({ req }: any) => {
//     const context = { db.models }
//     return context
//   }
// })

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app })

app.listen(process.env.PORT, () => {
  console.log(`Server running port ${process.env.PORT}`);
  db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
});





