import * as React from 'react';
import axios from 'axios';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import Confirmation from './Confirmation';
import Approval from './Approval';
import  { useUser } from '../UserProfile/UserProfile';
import { Button } from '@mui/material';
import {SelectChangeEvent} from '@mui/material';

interface IFormInfo {
  firstName: String;
  lastName: String;
  address: String;
  city: String;
  state: String;
  zipCode: Number
  occupation: String;
  income: Number;
  creditScore: Number;
  rent: Number;
  userId: Number;
  total: Number;
  apr: Number;
  term: Number
}

const LoanAppForm = () => {
  const [formStep, setFormStep] = React.useState(0);
  const { userId } = useUser();
  const [formInfo, setFormInfo] = React.useState<Partial<IFormInfo>>({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: undefined,
    occupation: '',
    income: undefined,
    creditScore: undefined,
    rent: undefined,
    userId: userId,
    total: undefined,
    apr: undefined,
    term: undefined
  })

  const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
    setFormInfo({
      ...formInfo,
      userId: userId,
      [event.target.name]: event.target.value,
    });
  }

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({
      ...formInfo,
      userId: userId,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/newLoan', {
        total: formInfo.total,
        apr: formInfo.apr,
        term: formInfo.term,
        borrower: formInfo.userId,
      });
      console.log('post successful')
      setFormStep(5);
    } catch (error) {
      console.log(error);
    };
  }

  const resetStep = () => {
    setFormStep(0);
  }

  const back = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setFormStep(formStep - 1);
  }

  const next = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setFormStep(formStep + 1);
  }

  if (formStep === 1) {
    return (<StepOne next={next} resetStep={resetStep} handleFormChange={handleFormChange} handleSelectChange={handleSelectChange}values={formInfo} />);
  }
  if (formStep === 2) {
    return (<StepTwo back={back} next={next} resetStep={resetStep} handleFormChange={handleFormChange} values={formInfo} />);
  }
  if (formStep === 3) {
    return (<StepThree back={back} next={next} resetStep={resetStep} handleSelectChange={handleSelectChange} values={formInfo} />);
  }
  if (formStep === 4) {
    return (<Confirmation back={back} next={next} resetStep={resetStep} handleSubmit={handleSubmit} values={formInfo}/>);
  }
  if (formStep === 5) {
    return (<Approval next={next} resetStep={resetStep} values={formInfo}/>);
  }
  return (<div><Button onClick={next}>Apply for a new loan</Button></div>)
}

export default LoanAppForm;
