import express, { Router } from "express";
import { validate } from "../middleware/validate.middleware.js";
import { contactSchema } from "../validator/auth.validator.js";
import { contactForm } from "../controller/contact.controller.js"


const router = Router();

router.route("/contact").post(validate(contactSchema), contactForm)



export default router
