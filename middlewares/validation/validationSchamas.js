// middlewares/validation/signupValidation.js
import { body } from "express-validator";

export const signupValidation = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .withMessage("Please enter minimum 3 characters")
    .matches(/^[A-Za-z ]+$/)
    .withMessage("Name can only contain letters and spaces")
    .custom((value) => {
      if (value.trim().length === 0) {
        throw new Error("Name cannot be only spaces");
      }
      return true;
    }),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format"),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
    .custom((value) => {
      if (value.trim().length === 0) {
        throw new Error("Password cannot be only spaces");
      }
      return true;
    }),
  body("confirmPassword")
    .notEmpty()
    .withMessage("Must enter confirm password")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords must match");
      }
      return true;
    }),
];
