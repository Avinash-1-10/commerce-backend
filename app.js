import express from "express";
import { configDotenv } from "dotenv";
import userRouter from "./routes/userRouter.js";
configDotenv();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
