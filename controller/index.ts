import { model } from '../model/index.js';
import {Request, Response} from "express";


export const controller = {
  newUser: (req: Request, res: Response) => {
    model.newUser((error: Error, data: any) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send();
      }
    }, req.body);
  },
  currentLoans: (req: Request, res: Response) => {
    model.currentLoans((error: Error, data: any) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send(data);
      }
    });
  },
  newLoan: (req: Request, res: Response) => {
    model.newUser((error: Error, data: any) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send();
      }
    }, req.body);
  },
  newInvestment: (req: Request, res: Response) => {
    model.newUser((error: Error, data: any) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send();
      }
    }, req.body);
  },
  currentInvestments: (req: Request, res: Response) => {
    model.currentInvestments((error: Error, data: any) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send(data);
      }
    });
  },
  availableInvestments: (req: Request, res: Response) => {
    model.availableInvestments((error: Error, data: any) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send(data);
      }
    });
  },
}