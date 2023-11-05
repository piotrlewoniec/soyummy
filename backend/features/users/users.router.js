const usersController = require("./users.controller");
// const { usersController } = require("./index");
const { authMiddleware } = require("../../common/auth");

const uploadFile = require("../../common/fileupload");

const express = require("express");
const router = express.Router();

router.post("/signup", usersController.postUserRegister);
router.post("/login", usersController.postUserLogin);
router.get("/logout", authMiddleware, usersController.getUserLogout);
router.get("/current", usersController.getUserCurrent);
router.patch(
  "/:userId/subscription",
  authMiddleware,
  usersController.patchUserSubscription
);
router.patch(
  "/newsletter",
  authMiddleware,
  usersController.patchUserNewsletterSubscription
);
router.patch(
  "/avatars",
  authMiddleware,
  uploadFile.uploadFileSave.single("avatar"),
  uploadFile.uploadFileAvatarMiddleware,
  usersController.patchUserAvatar
);
router.get("/verify/:verificationToken", usersController.getVerifyEmail);
router.post("/verify", usersController.postVerifyEmailResend);

module.exports = { router };
