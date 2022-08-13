import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => res.json("Hello Htmedia Backend!"));
app.use("/posts", postRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL || null;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true })
  .then(() => console.log("Database Connected"))
  .catch((error) => console.log(`Did not connect, ${error.message}`));

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
