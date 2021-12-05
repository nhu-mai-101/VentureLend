import * as React from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import Confirmation from './Confirmation';
import { Button } from '@mui/material';

const LoanAppForm = () => {
  const [formStep, setFormStep] = React.useState(0);

  const resetStep = () => {
    setFormStep(0);
  }

  const back = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setFormStep(formStep - 1);
  };

  const next = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setFormStep(formStep + 1);
  };

  if (formStep === 1) {
    return (<StepOne next={next} resetStep={resetStep}/>);
  }
  if (formStep === 2) {
    return (<StepTwo back={back} next={next} resetStep={resetStep}/>);
  }
  if (formStep === 3) {
    return (<StepThree back={back} next={next} resetStep={resetStep}/>);
  }
  if (formStep === 4) {
    return (<Confirmation back={back} next={next} resetStep={resetStep}/>);
  }
  return (<div><Button onClick={next}>Apply for a new loan</Button></div>)
}

export default LoanAppForm;