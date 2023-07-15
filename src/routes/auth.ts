import express, { Router } from "express";
import { authController } from "../controllers";

const router: Router = express.Router();

router.get("/success", authController.retrieveUserData);
router.get("/error", authController.retrieveUserDataError);
router.get("/google", authController.googleAuthentication);
router.get(
  "/google/callback",
  authController.googleAuthenticationCallback,
  (req, res) => {
    res.redirect("../success");
  }
);

export default router;
