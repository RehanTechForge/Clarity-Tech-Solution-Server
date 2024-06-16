import "dotenv/config";
import { connectDB } from "./db/db.js";
import { app } from "./app.js";
// import { errorMiddleware } from "./middleware/error.middleware.js";

// app.use(errorMiddleware())
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  }).catch((err) => {
    console.log(err);
  });