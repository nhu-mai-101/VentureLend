import * as React from 'react';
import LoanAppForm from './LoanAppForm'

const LoanApplication = () => {
  return (
    <div>
      Loan Application:
      <LoanAppForm getLoans={function (): void {
        throw new Error('Function not implemented.');
      } } />
    </div>
  )
}

export default LoanApplication;
