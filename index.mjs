import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/index.js";
import * as db from "./models/index.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 5000;

app.use("/auth/", routes.auth);
app.use("/work/", routes.employee)

app.listen(port, console.log(`App open on port ${port}`));
