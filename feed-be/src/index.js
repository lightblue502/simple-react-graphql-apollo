import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import schema from "./schema";

const app = express();
app.use(cors());

app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

app.use("/", (req, res) => {
  res.sendStatus(200);
});

const port = 8001;

app.listen(port, () => {
  console.log(`Application is running is at http://localhost:${port}`);
});
