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
          <Box display="flex" mb={5}>
            <Typography sx={{ color: "#b0b0ae" }}>I consent to receive advertisements and promotional materials.</Typography>
            <Field name="consent" type="checkbox" onChange={(e) => setFieldValue("consent", e.target.checked)} checked={values.consent} sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }} />
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
