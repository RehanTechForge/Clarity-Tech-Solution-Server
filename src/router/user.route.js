import express, { Router } from "express";
import { registerUser, loginUser, user } from "../controller/user.controller.js";
import { signupSchema, loginSchema } from "../validator/auth.validator.js";
import { validate } from "../middleware/validate.middleware.js";
import { authMiddleware } from "../middleware/auth.middleware.js";


const router = Router();

router
  .route("/register")
  .post(validate(signupSchema), registerUser);
router.route("/login").post(validate(loginSchema), loginUser);
router.route("/user").get(authMiddleware, user);



export default router
