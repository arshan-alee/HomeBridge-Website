import * as Yup from "yup";

// interface LoginSchema {
//   email: string;
//   password: string;
// }

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Invalid email address"),
  password: Yup.string().required("Invalid Password"),
});
export const signUpSchema = Yup.object({
  userName: Yup.string().required("User's Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("User's Email is required"),
  password: Yup.string().required("Please enter your password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

export const jobApplicationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  gender: Yup.string().required("Gender is required"),
  nationality: Yup.string().required("Nationality is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

export const eventApplicationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});
