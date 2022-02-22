import { ApolloServer } from "apollo-server-express";
import express from "express";
import { resolvers, typeDefs } from "./graphql";

async function startServer(typeDefs: any, resolvers: any) {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({
    app,
    path: "/graphql",
  });

  const port = process.env.PORT || 8000;

  app.get("/", (req, res) => {
    return res.send("OK");
  });

  app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
  });
}

startServer(typeDefs, resolvers);
