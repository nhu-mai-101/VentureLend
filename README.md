
# VentureLend

A lending marketplace that connects consumers who seek to borrow money, with investors who are willing to buy or invest in loans.

Live link: http://3.141.190.231/
## Project Requirements

**Use a modern JS Library/Framework**
- React.JS

**Application that can be interacted with in a minimum of three ways by the user**
- User can sign up/log in, apply for a loan, and invest in a loan

**Use a specified architectural pattern**
- MVC

**Integration of a backend service with CRUD operations**
- The backend is run on an Express server written in Node.js with GET/POST/PUT routes

**Integration with a 3rd party RESTful Application**
- Firebase Authentication API

**Use at least 5 UI components from the Material UI Library**
- Alert
- AppBar
- Button
- Card
- DataGrid
- Icons
- Modal
- Select
- TextField

**An example of a reusable component**
- The LoanList component is a reusable component in the user profile. In the Current Loans section, it displays loans that the user is currently borrowing. In the Current Investments section, it displays loans that the user is currently investing in.

## Features
**Landing Page:**

**Sign Up/Log In:**

**User Profile:**

**Loan Application:**

**Make a New Investment:**
## Demo
Landing Page
![]landing.gif

Sign Up Page
![]signup.gif

Log In Page
![]login.gif

User Profile
![]userprofile.gif

Loan Application
![]loanapplication.gif

Make a New Investment
![]investment.gif

## API Reference
#### Get current loans for a given user

```http
  GET /currentloans
```

| Parameter | Type     | Description                       | Response         |
| :-------- | :------- | :-------------------------------- | :--------------- |
| `userId`  | `number` | **Required**. Id of user          | Array of objects |



## Installation

* Clone the repository ``` git clone https://github.com/nhu-mai-101/VentureLend```

* Install npm packages ```npm install```

* Start webpack with ```npm run react-dev```

* Start server with ```npm start```

Now, the page is ready to load at http://localhost:3000/

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_FIREBASE_API_KEY`

`REACT_APP_AUTH_DOMAIN`

`REACT_APP_FIREBASE_PROJECT_ID`

`REACT_APP_FIREBASE_STORAGE_BUCKET`

`REACT_APP_FIREBASE_MESSAGING_SENDER_ID`

`REACT_APP_FIREBASE_APP_ID`


## Tech Stack

**Client:** Typescript, React, Material UI, Styled Components

**Server:** Typescript, Node, Express

**Database:** MySQL

## Acknowledgements

 - [Firebase Authentication API](https://firebase.google.com/docs/auth)
