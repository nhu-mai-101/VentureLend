import {db} from '../db/index';
import {User} from '../types/users';
import {Loans} from '../types/loans'

export const model = {
  newUser: (callback: Function, body: User) => {
    let qString = `INSERT INTO users (first_name, last_name, email) VALUES ('${body.firstName}', '${body.lastName}', '${body.email}')`;
    db.query(qString, (error: Error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  },
  getUser: (callback: Function, query: any) => {
    let qString = `SELECT * FROM users WHERE EMAIL = '${query.email}'`;
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
    let qString = `INSERT INTO loans (total, oustanding, apr, term, borrower) VALUES (${body.total}, ${body.total}, ${body.apr}, ${body.term}, ${body.borrower})`;
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