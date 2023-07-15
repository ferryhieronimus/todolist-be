import { RequestHandler } from "express";
import passport from "passport";

const retrieveUserData: RequestHandler = async (req, res) => {
  res.send(req.user);
};

const retrieveUserDataError: RequestHandler = async (req, res) => {
  res.send("Error logging in");
};

const googleAuthentication: RequestHandler = async (req, res, next) => {
  passport.authenticate("google", { scope: ["profile", "email"] })(
    req,
    res,
    next
  );
};

const googleAuthenticationCallback: RequestHandler = async (req, res, next) => {
  passport.authenticate("google", { failureRedirect: "/error" })(
    req,
    res,
    next
  );
};

const controllers = {
  retrieveUserData,
  retrieveUserDataError,
  googleAuthentication,
  googleAuthenticationCallback,
};

export default controllers;
