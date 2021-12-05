import * as React from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import Confirmation from './Confirmation';
import { Box, Button, Typography, Modal } from '@mui/material';
import { Close } from '@mui/icons-material';



const LoanAppForm = () => {
  const [open, setOpen] = React.useState(false);
  const [formStep, setFormStep] = React.useState(0);

  const back = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setFormStep(formStep - 1)
  };

  const next = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setFormStep(formStep + 1)
  };

  if (formStep === 0) {
    return (<Button onClick={next}>Apply for a new loan</Button>)
  }
  if (formStep === 1) {
    return (<StepOne back={back} next={next}/>);
  }
  if (formStep === 2) {
    return (<StepTwo back={back} next={next}/>);
  }
  if (formStep === 3) {
    return (<StepThree back={back} next={next}/>);
  }
  if (formStep === 4) {
    return (<Confirmation back={back} next={next}/>);
  }
  return (<div><Button onClick={next}>Apply for a new loan</Button></div>)
}

export default LoanAppForm;