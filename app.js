import express from "express";
import { configDotenv } from "dotenv";
import userRouter from "./routes/userRouter.js";
import connectDB from "./config/db.js";
import cors from "cors"

configDotenv();

const PORT = process.env.PORT || 3000;

const app = express();
connectDB()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
