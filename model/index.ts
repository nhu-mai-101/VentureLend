import {db} from '../db/index';
import {User} from '../types/users';
import {Loans} from '../types/loans'

export const model = {
  newUser: (callback: Function, body: User) => {
    let qString = `INSERT INTO users (first_name, last_name, email) VALUES ('${body.firstName}', '${body.lastName}', '${body.email}')`;
    db.query(qString, (error: Error, data) => {
      console.log('asdfsdf', typeof data)
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  },
  getUser: (callback: Function, email: string) => {
    let qString = `SELECT * FROM users WHERE email = '${email}'`;
    db.query(qString, (error: Error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  },
  currentLoans: (callback: Function, userId: string) => {
    let qString = `SELECT * FROM loans WHERE borrower = ${userId}`;
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
  newInvestment: (callback: (Function), { userId, loanId }: { userId: number, loanId: number }) => {
    let qString = `UPDATE loans SET investor = ${userId} WHERE id = ${loanId}`;
    db.query(qString, (error: Error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  },
  currentInvestments: (callback: Function, userId: string) => {
    let qString = `SELECT * FROM loans WHERE investor = ${userId}`;
    db.query(qString, (error: Error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  },
  availableInvestments: (callback: Function, userId: string) => {
    let qString = `SELECT * FROM loans WHERE borrower != ${userId} AND investor IS NULL`;
    db.query(qString, (error: Error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  },
}