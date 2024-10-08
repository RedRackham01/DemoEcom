import React, { useState } from "react";
import { Box, Button, Stepper, Step, StepLabel, Typography } from "@mui/material";
import Layout from "../components/Layout/Layout.jsx";
import PersonalDetails from "./../components/MultiForm/PersonalDetails.jsx";
import Addresses from "./../components/MultiForm/Addresses.jsx";
import PaymentDetails from "./../components/MultiForm/PaymentDetails.jsx";
import Consent from "./../components/MultiForm/Consent.jsx";
import "../styles/Forms.css";
import { useNavigate } from "react-router-dom";
import DisplayForm from "../components/MultiForm/DisplayForm.jsx";

const steps = ["Personal Details", "Address", "Payment Details", "Consent"];

const MultiStepForm = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    email: "",
    pincode: "",
    address: "",
    city: "",
    cardNumber: "",
    expiryDate: "",
    consent: false,
  });
  const [visible, setVisible] = useState(false);

  const handleNext = (values) => {
    setFormValues({ ...formValues, ...values });
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (values) => {
    setFormValues({ ...formValues, ...values });
    // Final submit logic
    setVisible(true);
    console.log("Form submitted:", formValues);
  };

  return (
    <Layout>
      {!visible ? (
        <>
          <Box className="stepper" dm={5}>
            <Stepper activeStep={activeStep}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel
                    sx={{
                      color: "white",
                      "& .MuiStepLabel-label": {
                        color: "white", // Label color
                      },
                    }}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          <Box className="form">
            <Box className="form-list">
              {activeStep === 0 && <PersonalDetails values={formValues} handleNext={handleNext} />}
              {activeStep === 1 && <Addresses values={formValues} handleNext={handleNext} handleBack={handleBack} />}
              {activeStep === 2 && <PaymentDetails values={formValues} handleNext={handleNext} handleBack={handleBack} />}
              {activeStep === 3 && <Consent values={formValues} handleBack={handleBack} handleSubmit={handleSubmit} />}
            </Box>
          </Box>
        </>
      ) : (
        <DisplayForm
          values={formValues}
          handleClick={() => {
            setVisible(false);
            navigate("/");
          }}
        />
      )}
    </Layout>
  );
};

export default MultiStepForm;
