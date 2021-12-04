import express, { Request, Response, NextFunction } from 'express';
import { controller } from '../controller/index';
require('dotenv').config();

const app = express();
const port = 3000;

const logRequests = (req: Request, res: Response, next: NextFunction) => {
  console.log(`Recieved a ${req.method} request to ${req.path}`);
  next();
}

app.use(logRequests);
app.use(express.static('client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/newUser', controller.newUser);
app.get('/currentLoans', controller.currentLoans);
app.post('/newLoan', controller.newLoan);
app.post('/newInvestment', controller.newInvestment);
app.get('/currentInvestments', controller.currentInvestments);
app.get('/availableInvestments', controller.availableInvestments);

app.listen(port, () => {console.log(`Listening on port: ${port}`)});