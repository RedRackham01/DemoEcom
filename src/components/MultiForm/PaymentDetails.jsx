import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Box, Button, FormControl, InputLabel, TextField, Typography, Select, MenuItem } from "@mui/material";
import { paymentDetailsValidationSchema } from "./validationSchema";

const PaymentDetails = ({ values, handleNext, handleBack }) => {
  return (
    <Formik
      initialValues={{
        cardNumber: values.cardNumber || "",
        cvv: values.cvv || "",
      }}
      validationSchema={paymentDetailsValidationSchema}
      onSubmit={(values) => {
        handleNext(values);
      }}>
      {({ values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue, resetForm }) => (
        <Form>
          <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))">
            <TextField
              label="Card Number"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.cardNumber}
              name="cardNumber"
              error={Boolean(touched.cardNumber) && Boolean(errors.cardNumber)}
              helperText={touched.cardNumber && errors.cardNumber}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="CVV"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.cvv}
              name="cvv"
              error={Boolean(touched.cvv) && Boolean(errors.cvv)}
              helperText={touched.cvv && errors.cvv}
              sx={{ gridColumn: "span 2" }}
            />
          </Box>
          {/* BUTTONS */}
          <Box className="btn" display="flex" justifyContent="space-evenly">
            <Button variant="outlined" onClick={handleBack}>
              Back
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default PaymentDetails;
