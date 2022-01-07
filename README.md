
# VentureLend

A lending marketplace that connects consumers who seek to borrow money, with investors who are willing to buy or invest in loans. Users can be both a borrower and an investor.

## Features
**Landing Page:** Allows users to learn about VentureLend, how to borrow a loan, how to invest in a loan, as well as sign up/log in for the service.

**Sign Up/Log In:** Sign Up allows users to create a new account if they do not already have one. Log In lets previously signed-up users log in to their User Profile.

**User Profile:** Displays user information, such as name, email, current loans, and current investments. Users can also apply for a new loan or make a new investment.

**Loan Application:** Allows users to apply for a new loan through a multi-step form. Collects personal information, financial information, and loan details.

**Make a New Investment:** Allows users to make a new investment. Users get to choose from a sortable list of loans which loan they would like to invest in.
## Demo
Landing Page
![](landing.gif)

Sign Up Page
![](signup.gif)

Log In Page
![](login.gif)

User Profile
![](userprofile.gif)

Loan Application
![](loanapplication.gif)

Make a New Investment
![](investment.gif)

## API Reference
#### Get current loans for a given user

```http
  GET /currentloans
```

| Parameter | Type     | Description                       | Response                                   |
| :-------- | :------- | :-------------------------------- | :----------------------------------------- |
| `userId`  | `number` | **Required**. Id of user          | Array of objects of loans for a given user |



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
