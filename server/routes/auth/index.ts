import express from "express";
import googleSignIn from "./google/signin";
import googleSignUp from "./google/signup";

const auth = express.Router();

auth.use("/google", googleSignIn, googleSignUp);

export default auth;
