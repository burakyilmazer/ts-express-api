import {LoginController} from '../Controller/LoginController';
import express, {Request, Response} from 'express'

const app = express();

app.post('/register', LoginController.register);
app.get('/', LoginController.getAll);
app.get('/:id', LoginController.getById);

module.exports = app;