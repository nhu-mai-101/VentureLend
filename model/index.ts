import {db} from '../db/index.js';
import {User} from '../types/users';
import {Loans} from '../types/loans'

export const model = {
  newUser: (callback: Function, body: User) => {
    let qString = '';
    db.query(qString, (error: Error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  },
  currentLoans: (callback: Function) => {
    let qString = '';
    db.query(qString, (error: Error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  },
  newLoan: (callback: Function, body: Loans) => {
    let qString = '';
    db.query(qString, (error: Error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  },
  newInvestment: (callback: Function, body: Loans) => {
    let qString = '';
    db.query(qString, (error: Error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  },
  currentInvestments: (callback: Function) => {
    let qString = '';
    db.query(qString, (error: Error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  },
  availableInvestments: (callback: Function) => {
    let qString = '';
    db.query(qString, (error: Error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  },
}