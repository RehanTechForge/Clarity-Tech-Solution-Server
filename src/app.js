import express from "express";
import userRouter from "./router/user.route.js";
import contactRouter from "./router/contact.router.js";
import serviceRouter from "./router/service.route.js";
import adminRouter from "./router/admin.route.js"
import cors from "cors";
// import { errorMiddleware } from "./middleware/error.middleware.js";

const app = express();
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
// app.use(errorMiddleware)

app.use("/api/auth", userRouter);
app.use("/api/form", contactRouter);
app.use("/api/data", serviceRouter)
app.use("/api/admin", adminRouter)
import { errorMiddleware } from "./middleware/error.middleware.js";
import { service } from "./controller/service.controller.js";
app.use(errorMiddleware)

export { app }