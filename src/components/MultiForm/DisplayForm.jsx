import React from "react";
import { Box, Button, Typography} from "@mui/material";
import "../../styles/Details.css";

const DisplayForm = ({ values, handleClick }) => {
  return (
    <Box className="details">
      <Typography variant="h5">Details Submitted Successfully</Typography>
      <Box>
        <Typography variant="h6">Personal Details</Typography>
        <Typography>First Name: {values.firstName}</Typography>
        <Typography>Last Name: {values.lastName}</Typography>
        <Typography>Gender: {values.gender}</Typography>
        <Typography>Age: {values.age}</Typography>
        <Typography>Email: {values.email}</Typography>
      </Box>
      <Box>
        <Typography variant="h6">Address</Typography>
        <Typography>Pincode: {values.pincode}</Typography>
        <Typography>Address: {values.address}</Typography>
        <Typography>City: {values.city}</Typography>
      </Box>
      <Box>
        <Typography variant="h6">Payment Details</Typography>
        <Typography>Card Number: {values.cardNumber}</Typography>
        <Typography>Expiry Date: {values.expiryDate}</Typography>
      </Box>
      <Box>
        <Typography variant="h6">Consent</Typography>
        <Typography>Consent Given: {values.consent ? "Yes" : "No"}</Typography>
      </Box>
      <Button
      className="btn"
        onClick={handleClick} // Hide details and restart form
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}>
        Exit
      </Button>
    </Box>
  );
};

export default DisplayForm;
