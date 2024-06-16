import { z } from "zod";

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is Required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(255, { message: "Name must not be more than 255 characters long" }),
  email: z
    .string({ required_error: "Email is Required" })
    .trim()
    .email({ message: "Invalid Email Address" })
    .min(3, { message: "Email must be at least 3 characters long" })
    .max(255, { message: "Email must not be more than 255 characters long" }),
  phone: z
    .string({ required_error: "Phone is Required" })
    .trim()
    .min(11, { message: "Phone must be at least 11 characters long" })
    .max(11, { message: "Phone must not be more than 11 characters long" }),
  password: z
    .string({ required_error: "Password is Required" })
    .min(7, { message: "Password must be at least 7 characters long" })
    .max(1024, { message: "Password must not be more than 1024 characters long" }),
});
const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is Required" })
    .trim()
    .email({ message: "Invalid Email Address" })
    .min(3, { message: "Email must be at least 3 characters long" })
    .max(255, { message: "Email must not be more than 255 characters long" }),
  password: z
    .string({ required_error: "Password is Required" })
});
const contactSchema = z.object({
  username: z
    .string({ required_error: "Name is Required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(255, { message: "Name must not be more than 255 characters long" }),
  email: z
    .string({ required_error: "Email is Required" })
    .trim()
    .email({ message: "Invalid Email Address" })
    .min(3, { message: "Email must be at least 3 characters long" })
    .max(255, { message: "Email must not be more than 255 characters long" }),
  message: z
    .string({ required_error: "Message is Required" })
    .trim()
    .min(11, { message: "Message must be at least 3 characters long" })
    .max(1024, { message: "Message must not be more than 1024 characters long" }),
});
export { signupSchema, loginSchema, contactSchema }