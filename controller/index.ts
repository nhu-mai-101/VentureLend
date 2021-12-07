import { model } from '../model/index';
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
  getUser: (req: Request, res: Response) => {
    model.getUser((error: Error, data: any) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send(data);
      }
    }, req.query);
  },
  currentLoans: (req: Request, res: Response) => {
    model.currentLoans((error: Error, data: any) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send(data);
      }
    }, req.query);
  },
  newLoan: (req: Request, res: Response) => {
    model.newLoan((error: Error, data: any) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send();
      }
    }, req.body);
  },
  newInvestment: (req: Request, res: Response) => {
    model.newInvestment((error: Error, data: any) => {
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
    }, req.query);
  },
  availableInvestments: (req: Request, res: Response) => {
    model.availableInvestments((error: Error, data: any) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send(data);
      }
    }, req.query);
  },
}