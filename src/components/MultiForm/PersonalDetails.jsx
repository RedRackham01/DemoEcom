import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Box, Button, FormControl, InputLabel, TextField, Typography, Select, MenuItem } from "@mui/material";
import { personalDetailsValidationSchema } from "./validationSchema";

const PersonalDetails = ({ values, handleNext }) => {
  return (
    <Formik
      initialValues={{
        firstName: values.firstName || "",
        lastName: values.lastName || "",
        gender: values.gender || "",
        age: values.age || "",
        email: values.email || "",
      }}
      validationSchema={personalDetailsValidationSchema}
      onSubmit={(values) => {
        handleNext(values);
      }}>
      {({ values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue, resetForm }) => (
        <Form>
          <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))">
            <TextField
              label="First Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
              name="firstName"
              error={Boolean(touched.firstName) && Boolean(errors.firstName)}
              helperText={touched.firstName && errors.firstName}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              label="Last Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
              name="lastName"
              error={Boolean(touched.lastName) && Boolean(errors.lastName)}
              helperText={touched.lastName && errors.lastName}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Age"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.age}
              name="age"
              type="number"
              error={Boolean(touched.age) && Boolean(errors.age)}
              helperText={touched.age && errors.age}
              sx={{ gridColumn: "span 2" }}
            />
            <Box display="flex" alignItems="center" sx={{ gridColumn: "span 2" }}>
              <FormControl fullWidth>
                <InputLabel sx={{color:"white"}}id="gender">Gender</InputLabel>
                <Select labelId="gender" id="gender" label="Role" name="gender" value={values.gender} onChange={(event) => setFieldValue("gender", event.target.value)}>
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                  <MenuItem value={"Prefer not to say"}>Prefer not to say</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          {/* BUTTONS */}
          <Box className="btn" >
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default PersonalDetails;
