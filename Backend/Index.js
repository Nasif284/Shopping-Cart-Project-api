
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import connectDb from "./config/connectDb.js";
import userRouter from "./routes/user.route.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet({ crossOriginResourcePolicy: false }));

app.use('/api/user',userRouter)

const PORT =process.env.PORT
app.get("/", (req, res) => {
  res.json({
    message: "server is running in" + process.env.PORT,
  });
});

connectDb().then(() => {
    app.listen(PORT, () => {
      console.log("server started at port",PORT)
  } )
});