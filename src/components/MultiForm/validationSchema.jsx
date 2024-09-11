import * as Yup from "yup";

export const personalDetailsValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  age: Yup.number().required("Required").positive("Age must be positive").integer("Age must be an integer"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export const addressValidationSchema = Yup.object().shape({
  address: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  pincode: Yup.number().required("Required"),
});

export const paymentDetailsValidationSchema = Yup.object().shape({
  cardNumber: Yup.string().required("Required").length(16, "Card number must be 16 digits"),
  cvv: Yup.string().required("Required").length(3, "CVV must be 3 digits"),
});

export const consentValidationSchema = Yup.object().shape({
  consent: Yup.bool().oneOf([true], "Required"),
});
