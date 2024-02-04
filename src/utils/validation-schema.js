import * as Yup from "yup";

// interface LoginSchema {
//   email: string;
//   password: string;
// }

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
  //   "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
  // ),
});

// interface ForgotPasswordSchema {
//   email: string;
// }

// export const forgotPasswordSchema = Yup.object<ForgotPasswordSchema>({
//   email: Yup.string().email().required("Please enter your email"),
// });

// interface ResetPasswordSchema {
//   password: string;
//   confirmPassword: string;
// }

// export const resetPasswordSchema = Yup.object<ResetPasswordSchema>({
//   newPassword: Yup.string().required("Please enter your password"),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref("newPassword")], "Passwords must match")
//     .required("Confirm Password is required"),
// });

// interface AddBossStep1Schema {
//   bossName: string;
//   email: string;
//   profileUrl: string;
// }

// export const addBossStep1Schema = Yup.object<AddBossStep1Schema>({
//   bossName: Yup.string().required("Boss's Name is required"),
//   email: Yup.string()
//     .email("Invalid email")
//     .required("Boss's Email is required"),
//   profileUrl: Yup.string()
//     .url("Invalid URL")
//     .required("Boss's LinkedIn Profile URL is required"),
// });

// interface AddBossStep2Schema {
//   bossName: string;
//   email: string;
//   profileUrl: string;
// }

// export const addBossStep2Schema = Yup.object<AddBossStep2Schema>({
//   companyName: Yup.string().required("Boss's Name is required"),
//   industry: Yup.string()
//     .notOneOf([""], "Industry is required")
//     .required("Industry is required"),
//   function: Yup.string()
//     .notOneOf([""], "Function is required")
//     .required("Function is required"),
//   recommendation: Yup.string().required("Recommendation is required"),
// });

// interface SignUpStep1FormData {
//   username: string;
//   email: string;
//   password: string;
//   profileUrl: string;
// }

// export const signUpStep1FormData = Yup.object<SignUpStep1FormData>({
//   username: Yup.string().required("User's Name is required"),
//   email: Yup.string()
//     .email("Invalid email")
//     .required("User's Email is required"),
//   password: Yup.string().required("Please enter your password"),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref("password")], "Passwords must match")
//     .required("Confirm Password is required"),
//   profileUrl: Yup.string()
//     .url("Invalid URL")
//     .required("User's LinkedIn Profile URL is required"),
// });

// interface SignUpStep2FormData {
//   bossName: string;
//   bossEmail: string;
//   bossProfileUrl: string;
// }

// export const signUpStep2FormData = Yup.object<SignUpStep2FormData>({
//   bossName: Yup.string().required("Boss's Name is required"),
//   bossEmail: Yup.string()
//     .email("Invalid email")
//     .required("Boss's Email is required"),
//   bossProfileUrl: Yup.string()
//     .url("Invalid URL")
//     .required("Boss's LinkedIn Profile URL is required"),
// });

// interface SignUpStep3FormData {
//   companyName: string;
//   industry: string;
//   function: string;
//   recommendation: string;
// }

// export const signUpStep3FormData = Yup.object<SignUpStep3FormData>({
//   companyName: Yup.string().required("Boss's Name is required"),
//   industry: Yup.string()
//     .notOneOf([""], "Industry is required")
//     .required("Industry is required"),
//   function: Yup.string()
//     .notOneOf([""], "Function is required")
//     .required("Function is required"),
//   // recommendation: Yup.string().required("Recommendation is required"),
//   recommendation: Yup.string()
//     .required("Recommendation is required")
//     .max(100, "Recommendation must be at most 100 characters"),
// });

// interface WriteRecommendation {
//   recommendation: string;
// }

// export const writeRecommendationData = Yup.object<WriteRecommendation>({
//   recommendation: Yup.string()
//     .required("Recommendation is required")
//     .max(100, "Recommendation must be at most 100 characters"),
// });
