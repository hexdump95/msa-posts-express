import express, { json } from "express";
import createPostRouter from "./rest/routes/createPostRouter";
import corsConfig from "./config/corsConfig";
import { port } from './config/envVars';

const app = express();
app.disable("x-powered-by");

app.use(corsConfig);
app.use(json());

app.use(createPostRouter);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
