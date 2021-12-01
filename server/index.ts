import express, {Request, Response, NextFunction} from 'express';

const app = express();
const port = 3000;

const logRequests = (req: Request, res: Response, next: NextFunction) => {
  console.log(`Recieved a ${req.method} request to ${req.path}`);
  next();
}

app.use(logRequests);
app.use(express.static('client/dist'));

app.listen(port, () => {console.log(`Listening on port: ${port}`)});