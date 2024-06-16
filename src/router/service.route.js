import express, { Router } from "express";
import { service } from "../controller/service.controller.js";

const router = Router();

router.route("/service").get(service);


export default router;