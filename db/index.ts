import mysql from 'mysql';

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'lending'
});

db.connect((error, data) => {
  if (error) {
    console.log('error connecting to db: ', error)
  } else {
    console.log ('success connecting to db')
  }
});
