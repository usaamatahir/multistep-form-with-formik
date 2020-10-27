import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@material-ui/core";
import PersonalInformation from "../Forms/PersonalInformation";
import AccountInformation from "../Forms/AccountInformation";
import Review from "../Forms/Review";

interface personalInfo {
  firstName: string;
  lastName: string;
  fatherName: string;
  city: string;
  age: number;
  phoneNumber: number;
}

interface formValueType {
  firstName: string;
  lastName: string;
  fatherName: string;
  city: string;
  age: number;
  phoneNumber: number;
  emailID: string;
  userName: string;
  password: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

function getSteps() {
  return ["Personal Information", "Account Information", "Review"];
}

function getStepContent(
  stepIndex: number,
  setStepIndex: React.Dispatch<React.SetStateAction<number>>,
  setFormValues: React.Dispatch<React.SetStateAction<{}>>,
  formValues: {}
) {
  switch (stepIndex) {
    case 0:
      return (
        <PersonalInformation
          submit={setStepIndex}
          prevValues={formValues}
          setFormValues={setFormValues}
        />
      );
    case 1:
      return (
        <AccountInformation
          submit={setStepIndex}
          prevValues={formValues}
          setFormValues={setFormValues}
        />
      );
    case 2:
      return <Review submit={setStepIndex} formValues={formValues} />;
    default:
      return "Unknown stepIndex";
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({});
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {getStepContent(activeStep, setActiveStep, setFormValues, formValues)}
    </div>
  );
}
