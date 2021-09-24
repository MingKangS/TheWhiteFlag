import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import session from 'express-session';
import path from 'path';
import * as dotenv from 'dotenv';
import passport from "./auth"
import routes from "./routes"
dotenv.config();

const app = express();

app.use(passport.initialize());
app.use(passport.session());
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.MONGO_SECRET!,
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", routes);

const port: string = process.env.PORT || "8080";

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
		console.log("Database connected succesfully");
		app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
	})
  .catch((err) => console.log(err));
