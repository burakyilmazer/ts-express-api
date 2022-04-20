import express, { Request, Response } from "express";
import "reflect-metadata"
import {AppDataSource} from './data-source';
import account from './Account/index';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use('/account', account);

AppDataSource.initialize()
.then(() => {
    app.listen(3000, () => console.log("Server listening on http://localhost:3000"));
  }).catch((error) => console.log(error))
