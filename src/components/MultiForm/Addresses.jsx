import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Box, Button, FormControl, InputLabel, TextField, Typography, Select, MenuItem } from "@mui/material";
import { addressValidationSchema } from "./validationSchema";

const Addresses = ({ values, handleNext, handleBack }) => {
  return (
    <Formik
      initialValues={{
        address: values.address || "",
        city: values.city || "",
        pincode: values.pincode || "",
      }}
      validationSchema={addressValidationSchema}
      onSubmit={(values) => {
        handleNext(values);
      }}>
      {({ values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue, resetForm }) => (
        <Form>
          <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))">
            <TextField
              label="Address"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.address}
              name="address"
              error={Boolean(touched.address) && Boolean(errors.address)}
              helperText={touched.address && errors.address}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="City"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.city}
              name="city"
              error={Boolean(touched.city) && Boolean(errors.city)}
              helperText={touched.city && errors.city}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              label="Pincode"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.pincode}
              name="pincode"
              type="number"
              error={Boolean(touched.pincode) && Boolean(errors.pincode)}
              helperText={touched.pincode && errors.pincode}
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

export default Addresses;
