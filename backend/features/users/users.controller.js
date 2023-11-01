const usersCollection = require("./users.dao");

const {
  sendVerificationEmail,
  sendNewsletterInfoEmail,
} = require("../../common/mailing");

const postUserRegister = async (req, res, next) => {
  const { name, email, password, subscription } = req.body;
  if (
    name === "" ||
    name === undefined ||
    email === "" ||
    email === undefined ||
    password === "" ||
    password === undefined
  ) {
    return res.status(400).json({
      message: "missing required field",
      status: "fail",
      code: 400,
    });
  }
  const regexEmailPattern =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const regexEmail = new RegExp(regexEmailPattern);
  const regexPwdPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const regexPwd = new RegExp(regexPwdPattern);
  if (!regexEmail.test(email) || !regexPwd.test(password)) {
    // if (!regexEmail.test(email)) {
    return res.status(400).json({
      message:
        "Correct email or password. Password with minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
      status: "fail",
      code: 400,
    });
  }
  const user = await usersCollection.isRegistred({ email: email });
  if (user === "error") {
    return res.status(500).json({
      message: "Server internal error",
      status: "fail",
      code: 500,
    });
  }
  if (user === "Email found") {
    return res.status(409).json({
      status: "conflict",
      code: 409,
      message: "Email in use",
      data: "Conflict",
    });
  }
  try {
    const newUser = await usersCollection.registerUser({
      name: name,
      email: email,
      password: password,
      subscription: subscription,
    });
    console.log(newUser);
    if (newUser === "error") {
      return res.status(500).json({
        message: "Server internal error",
        status: "fail",
        code: 500,
      });
    } else {
      const hostAddress = req.protocol + "://" + req.get("host");
      sendVerificationEmail({
        email: newUser.email,
        verificationToken: newUser.verificationToken,
        hostAddress: hostAddress,
      });

      res.status(201).json({
        status: "Created",
        code: 201,
        message: "Registration successful",
        data: {
          email: newUser.email,
          subscription: newUser.subscription,
          avatarURL: newUser.avatarURL,
        },
      });
    }
  } catch (error) {
    next(error);
  }
};

const postUserLogin = async (req, res, next) => {
  const { email, password } = req.body;
  if (
    email === "" ||
    email === undefined ||
    password === "" ||
    password === undefined
  ) {
    return res.status(400).json({
      message: "missing required field",
      status: "fail",
      code: 400,
    });
  }
  const regexEmailPattern =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const regexEmail = new RegExp(regexEmailPattern);
  const regexPwdPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const regexPwd = new RegExp(regexPwdPattern);
  if (!regexEmail.test(email) || !regexPwd.test(password)) {
    // if (!regexEmail.test(email)) {
    return res.status(400).json({
      message:
        "Correct email or password. Password with minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
      status: "fail",
      code: 400,
    });
  }
  const loggedIn = await usersCollection.loginUser({
    email: email,
    password: password,
  });
  if (loggedIn === "error") {
    return res.status(401).json({
      status: "Unauthorized",
      code: 401,
      message: "Email or password is wrong",
      data: "Unauthorized",
    });
  }

  if (loggedIn === "verify email") {
    return res.status(403).json({
      status: "Forbidden",
      code: 403,
      message: "Verify email first",
      data: "Verify email first",
    });
  }

  return res.status(200).json({
    status: "OK",
    code: 200,
    message: "Authorized",
    data: {
      user: {
        name: loggedIn.name,
        email: loggedIn.email,
        avatarURL: loggedIn.avatarURL,
        subscription: loggedIn.subscription,
        newslettersubscription: loggedIn.newslettersubscription,
      },
      token: loggedIn.token,
    },
  });
};

const getUserLogout = async (req, res, next) => {
  const { _id } = req.user;

  const loggedOut = await usersCollection.logoutUser({ _id: _id });
  if (loggedOut === "error") {
    return res.status(401).json({
      status: "Unauthorized",
      code: 401,
      message: "Unauthorized",
      data: "Unauthorized",
    });
  } else {
    return res.status(204).json({
      status: "OK",
      code: 204,
      message: "logged out",
      data: "logged out",
    });
  }
};

const getUserCurrent = async (req, res, next) => {
  const { _id } = req.user;
  const currentLoggedIn = await usersCollection.currentUser({ _id: _id });
  if (currentLoggedIn === "error") {
    return res.status(401).json({
      status: "Unauthorized",
      code: 401,
      message: "Unauthorized",
      data: "Unauthorized",
    });
  }
  return res.status(200).json({
    status: "OK",
    code: 200,
    message: "current user info",
    data: {
      name: currentLoggedIn.name,
      email: currentLoggedIn.email,
      avatarURL: currentLoggedIn.avatarURL,
      subscription: currentLoggedIn.subscription,
      newslettersubscription: currentLoggedIn.newslettersubscription,
    },
  });
};

const patchUserSubscription = async (req, res, next) => {
  const { subscription } = req.body;
  if (subscription === undefined) {
    res.status(400).json({
      message: "missing field subscription",
      status: "fail",
      code: 400,
    });
    return;
  }
  const subscriptionOptions = ["free", "dietitiansupport", "full"];
  if (!subscriptionOptions.some((element) => element === subscription)) {
    res.status(400).json({
      message:
        "field subscription have to be 'free', 'dietitiansupport', 'full'",
      status: "fail",
      code: 400,
    });
    return;
  }
  const data = await usersCollection.subscriptionUpdate({
    _id: req.params.userId,
    subscription: req.body.subscription,
  });
  if (data === "error") {
    return res.status(401).json({
      status: "Unauthorized",
      code: 401,
      message: "Unauthorized",
      data: "Unauthorized",
    });
  } else {
    res.status(200).json({
      message: `User subscription type updated`,
      status: "success",
      code: 200,
      data: {
        email: data.email,
        subscription: data.subscription,
      },
    });
  }
};

const patchUserNewsletterSubscription = async (req, res, next) => {
  const { newsletter } = req.body;
  if (newsletter === undefined) {
    res.status(400).json({
      message: "missing field newsletter",
      status: "fail",
      code: 400,
    });
    return;
  }
  if (typeof newsletter !== "boolean") {
    res.status(400).json({
      message: "field newsletter have to be boolean type",
      status: "fail",
      code: 400,
    });
    return;
  }
  const data = await usersCollection.newsletterSubscriptionUpdate({
    _id: req.user._id,
    newsletter: req.body.newsletter,
  });
  if (data === "error") {
    return res.status(401).json({
      status: "Unauthorized",
      code: 401,
      message: "Unauthorized",
      data: "Unauthorized",
    });
  } else {
    let newsletterMessage = "";
    if (newsletter) {
      newsletterMessage = "subscribed";
    } else {
      newsletterMessage = "unsubscribed";
    }
    sendNewsletterInfoEmail({
      email: data.email,
      newsletterMessage: newsletterMessage,
    });
    res.status(200).json({
      message: `User newsletter subscription type updated`,
      status: "success",
      code: 200,
      data: {
        email: data.email,
        newslettersubscription: data.newslettersubscription,
      },
    });
  }
};

const patchUserAvatar = async (req, res, next) => {
  const { _id, avatarURL } = req.user;
  const data = await usersCollection.avatarUpdate({
    _id: _id,
    avatarPath: avatarURL,
  });
  if (data === "error") {
    return res.status(401).status(401).json({
      status: "Unauthorized",
      code: 401,
      message: "Unauthorized",
      data: "Unauthorized",
    });
  }
  return res.status(200).json({
    status: "OK",
    code: 200,
    message: "avatarURL",
    data: {
      avatarURL: data.avatarURL,
    },
  });
};

const getVerifyEmail = async (req, res, next) => {
  const { verificationToken } = req.params;
  const data = await usersCollection.verifyEmail({
    verificationToken: verificationToken,
  });
  if (data === "error") {
    return res.status(401).json({
      status: "Unauthorized",
      code: 401,
      message: "Unauthorized",
      data: "Unauthorized",
    });
  } else if (data === "not found") {
    return res.status(404).json({
      status: "Not Found",
      code: 404,
      message: "User not found or allready verified",
      data: "User not found or allready verified",
    });
  } else if (data === "ok") {
    return res.status(200).json({
      status: "OK",
      code: 200,
      message: "Verification successful",
      data: "Verification successful",
    });
  }
};

const postVerifyEmailResend = async (req, res, next) => {
  const { email } = req.body;

  if (email === "" || email === undefined) {
    return res.status(400).json({
      message: "missing required field email",
      status: "Bad Request",
      code: 400,
    });
  }
  const regexEmailPattern =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const regexEmail = new RegExp(regexEmailPattern);

  if (!regexEmail.test(email)) {
    return res.status(400).json({
      message: "Correct email",
      status: "fail",
      code: 400,
    });
  }
  const data = await usersCollection.verifyEmailResend({ email: email });

  if (data === "error") {
    return res.status(401).json({
      status: "Unauthorized",
      code: 401,
      message: "Unauthorized",
      data: "Unauthorized",
    });
  } else if (data === "verified") {
    return res.status(400).json({
      status: "Bad Request",
      code: 400,
      message: "Verification has already been passed",
      data: "Verification has already been passed",
    });
  } else if (data) {
    const hostAddress = req.protocol + "://" + req.get("host");
    sendVerificationEmail({
      email: data.email,
      verificationToken: data.verificationToken,
      hostAddress: hostAddress,
    });
    return res.status(200).json({
      status: "OK",
      code: 200,
      message: "Verification email sent",
      data: "Verification email sent",
    });
  }
};

module.exports = {
  postUserRegister,
  postUserLogin,
  getUserLogout,
  getUserCurrent,
  patchUserSubscription,
  patchUserNewsletterSubscription,
  patchUserAvatar,
  getVerifyEmail,
  postVerifyEmailResend,
};
