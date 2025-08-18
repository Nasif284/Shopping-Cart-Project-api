import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createStream } from "rotating-file-stream";
dotenv.config();
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import connectDb from "./config/connectDb.js";
import userRouter from "./routes/user/user.route.js";
import path from "path";
import { fileURLToPath } from "url";
import adminRouter from "./routes/admin/admin.route.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet({ crossOriginResourcePolicy: false }));

app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const accessLogStream = createStream("access.log", {
  interval: "1d",
  path: path.join(__dirname, "log"),
});
app.use(morgan("combined", { stream: accessLogStream }));

const PORT = process.env.PORT;
app.get("/", (req, res) => {
  res.json({
    message: "server is running in" + process.env.PORT,
  });
});

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log("server started at port", PORT);
  });
});
