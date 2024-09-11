import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Box, Button, FormControl, InputLabel, TextField, Typography, Select, MenuItem } from "@mui/material";
import { consentValidationSchema } from "./validationSchema";

const Consent = ({ values, handleBack, handleSubmit }) => {
  return (
    <Formik
      initialValues={{
        consent: values.consent || false,
      }}
      validationSchema={consentValidationSchema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}>
      {({ values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue, resetForm }) => (
        <Form>
          <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))">
            <Typography>I consent to receive advertisements and promotional materials.</Typography>
            <Field name="consent" type="checkbox" onChange={(e) => setFieldValue("consent", e.target.checked)} checked={values.consent} />
            {touched.consent && errors.consent && <Typography color="error">{errors.consent}</Typography>}
          </Box>

          {/* BUTTONS */}
          <Box display="flex" justifyContent="space-evenly">
            <Button variant="outlined" onClick={handleBack}>
              Back
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default Consent;
