import "express-async-errors";
import express, { Express } from "express";
import session from "express-session";
import dotenv from "dotenv";
import morgan from "morgan";
import middlewares from "./middlewares";
import router from "./routes";
import cors from "cors";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

const app: Express = express();

dotenv.config();

app.set("view engine", "ejs");

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "SECRET",
  })
);

app.get("/", function (req, res) {
  res.render("pages/auth");
});

const port = process.env.PORT || 3000;

const start = async () => {
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
};

let userProfile: any;

app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs");

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "Not Found";
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "Not Found";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/v1/auth/google/callback",
    },
    function (
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: any
    ) {
      userProfile = profile;
      return done(null, userProfile);
    }
  )
);
passport.serializeUser((user: any, done: any) => {
  done(null, user);
});

passport.deserializeUser((obj: any, done: any) => {
  done(null, obj);
});

app.use("/api/v1", router);

app.use(middlewares.errorHandler);
app.use(middlewares.unknownEndpoint);

start();
