import express, { json } from "express";
import createPostRouter from "./rest/routes/createPostRouter";
import corsConfig from "./config/corsConfig";

const app = express();
app.disable("x-powered-by");

app.use(corsConfig);
app.use(json());

app.use(createPostRouter);

export { app };

export const prueba = () => {
  return true;
};
