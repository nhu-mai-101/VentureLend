
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

<table align="center">
  <tbody>
    <tr>
      <th>Frontend Languages</th>
      <td>
        <img alt="Typescript" src="https://img.shields.io/badge/typescript-%23404d59.svg?style=for-the-badge&logo=typescript&logoColor=%2361DAFB" />
        <img alt="HTML" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" />
        <img alt="CSS" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" />
      </td>
    </tr>
    <tr>
      <th>Frontend Frameworks & Libraries</th>
      <td>
        <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB" />
        <img alt="MaterialUI" src="https://img.shields.io/badge/material-ui%20-%231572B6.svg?&style=for-the-badge&logo=material-ui&logoColor=white" />
        <img alt="StyledComponents" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
      </td>
    </tr>
        <tr>
      <th>Backend & Databse</th>
      <td>
        <img alt="Node.js" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/>
        <img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
        <img alt="mySQL" src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"/>
      </td>
    </tr>
    <tr>
      <th>Utilities</th>
      <td>
        <img alt="Webpack" src="https://img.shields.io/badge/webpack%20-%2320232a.svg?&style=for-the-badge&logo=webpack&logoColor=%2361DAFB" />
        <img alt="Babel" src="https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black" />
        <img alt="ESLint" src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" />
        <img alt="npm" src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white" />
      </td>
    </tr>
    <tr>
      <th>Deployment</th>
      <td>
        <img alt="AWS" src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white"/>
      </td>
    </tr>
  </tbody>
</table>


## Acknowledgements

 - [Firebase Authentication API](https://firebase.google.com/docs/auth)
