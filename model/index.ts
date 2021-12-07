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
    let qString = `SELECT * FROM users WHERE email = '${query.email}'`;
    db.query(qString, (error: Error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  },
  currentLoans: (callback: Function, query: any) => {
    let qString = `SELECT * FROM loans WHERE borrower = ${query.userId}`;
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
  newInvestment: (callback: Function, body: any) => {
    let qString = `UPDATE loans SET investor = ${body.userId} WHERE id = ${body.loanId}`;
    db.query(qString, (error: Error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  },
  currentInvestments: (callback: Function, query: any) => {
    let qString = `SELECT * FROM loans WHERE investor = ${query.userId}`;
    db.query(qString, (error: Error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  },
  availableInvestments: (callback: Function, query: any) => {
    let qString = `SELECT * FROM loans WHERE borrower != ${query.userId} AND investor IS NULL`;
    db.query(qString, (error: Error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  },
}