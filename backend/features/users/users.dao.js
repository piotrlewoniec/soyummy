// const { User: usersCollection } = require("./index");
// const { User } = require("./index");
// (node:21476) Warning: Accessing non-existent property 'User' of module exports inside circular dependency
// (Use `node --trace-warnings ...` to show where the warning was created)
// (node:21476) Warning: Accessing non-existent property 'User' of module exports inside circular dependency
const { User: usersCollection } = require("./users.schema");
const { User } = require("./users.schema");

const db = require("../../common/db");
const { auth } = require("../../common/auth");

const gravatar = require("gravatar");
const { nanoid } = require("nanoid");

const { secret } = require("../../config");

const isRegistred = async ({ email }) => {
  try {
    if (db.dbstatusValue() !== 1) {
      return "error";
    }
    const data = await usersCollection.findOne({ email: email }).lean();
    if (data === null) {
      return "Email not found";
    }
    if (data) {
      return "Email found";
    }
  } catch (err) {
    console.log(`Connection to database faild: ${err.message}`);
    return "error";
  }
};

const registerUser = async ({ name, email, password, subscription }) => {
  try {
    if (db.dbstatusValue() !== 1) {
      return "error";
    }
    const avatarURL = gravatar.url(
      email,
      { s: "100", r: "x", d: "retro" },
      true
    );
    const verificationToken = nanoid();
    const newUser = new User({
      name,
      email,
      subscription,
      avatarURL,
      verificationToken,
    });
    // newUser.setPassword(password);
    newUser.password = auth.setPassword(password);
    await newUser.save();
    return newUser;
  } catch (err) {
    console.log(`Connection to database faild: ${err.message}`);
    return "error";
  }
};

const loginUser = async ({ email, password }) => {
  try {
    if (db.dbstatusValue() !== 1) {
      return "error";
    }
    const data = await usersCollection.findOne({ email: email });
    // const data = await usersCollection.findOne({ email: email }).lean();
    // if (!data || !data.validPassword(password)) {
    //   return "error";
    // }
    if (
      !data ||
      !auth.validPassword({
        passwordLogin: password,
        passwordDB: data.password,
      })
    ) {
      return "error";
    }
    if (data.verify === false) {
      return "verify email";
    }

    // if (
    //   !data ||
    //   !auth.validPassword({
    //     passwordLogin: password,
    //     passwordDB: data.password,
    //   })
    // ) {
    //   return "error";
    // }
    const payload = {
      id: data._id,
      email: data.email,
    };
    const token = auth.codeJWT({
      payload: payload,
      secret: secret,
      expires: "1h",
    });
    data.token = token;
    const dataUpdated = await usersCollection.findOneAndUpdate(
      { _id: data._id },
      { token: token },
      {
        new: true,
      }
    );
    if (dataUpdated === null) {
      return "error";
    }
    return data;
  } catch (err) {
    console.log(`Connection to database faild: ${err.message}`);
    return "error";
  }
};

const logoutUser = async ({ _id }) => {
  try {
    if (db.dbstatusValue() !== 1) {
      return "error";
    }
    const data = await usersCollection.findOneAndUpdate(
      { _id: _id },
      { token: "" },
      { new: true }
    );
    if (data === null) {
      return "error";
    }
    return data;
  } catch (err) {
    console.log(`Connection to database faild: ${err.message}`);
    return "error";
  }
};

const currentUser = async ({ _id }) => {
  try {
    if (db.dbstatusValue() !== 1) {
      return "error";
    }
    const data = await usersCollection.findOne({ _id: _id });
    if (data === null) {
      return "error";
    }
    return data;
  } catch (err) {
    console.log(`Connection to database faild: ${err.message}`);
    return "error";
  }
};

const subscriptionUpdate = async ({ _id, subscription }) => {
  try {
    if (db.dbstatusValue() !== 1) {
      return "error";
    }
    if (!db.isValidId(_id)) {
      return "error";
    }
    const data = await usersCollection.findOneAndUpdate(
      { _id: _id },
      { subscription: subscription },
      { new: true }
    );
    if (data === null) {
      return "error";
    }
    return data;
  } catch (err) {
    console.log(`Connection to database faild: ${err.message}`);
    return "error";
  }
};

const newsletterSubscriptionUpdate = async ({ _id, newsletter }) => {
  try {
    if (db.dbstatusValue() !== 1) {
      return "error";
    }
    if (!db.isValidId(_id)) {
      return "error";
    }
    const data = await usersCollection.findOneAndUpdate(
      { _id: _id },
      { newslettersubscription: newsletter },
      { new: true }
    );
    if (data === null) {
      return "error";
    }
    return data;
  } catch (err) {
    console.log(`Connection to database faild: ${err.message}`);
    return "error";
  }
};

const avatarUpdate = async ({ _id, avatarPath }) => {
  try {
    if (db.dbstatusValue() !== 1) {
      return "error";
    }
    const data = await usersCollection.findOneAndUpdate(
      { _id: _id },
      { avatarURL: avatarPath },
      { new: true }
    );
    if (data === null) {
      return "error";
    }
    return data;
  } catch (err) {
    console.log(`Connection to database faild: ${err.message}`);
    return "error";
  }
};

const verifyEmail = async ({ verificationToken }) => {
  try {
    if (db.dbstatusValue() !== 1) {
      return "error";
    }

    const data = await usersCollection.findOneAndUpdate(
      { verificationToken: verificationToken },
      { verificationToken: null, verify: true },
      { new: true }
    );

    if (data === null) {
      return "not found";
    }
    return "ok";
  } catch (err) {
    console.log(`Connection to database faild: ${err.message}`);
    return "error";
  }
};

const verifyEmailResend = async ({ email }) => {
  try {
    if (db.dbstatusValue() !== 1) {
      return "error";
    }

    const data = await usersCollection.findOne({ email: email });
    if (data === null) {
      return "error";
    }
    if (data.verify === true) {
      return "verified";
    } else {
      return data;
    }
  } catch (err) {
    console.log(`Connection to database faild: ${err.message}`);
    return "error";
  }
};

module.exports = {
  isRegistred,
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
  subscriptionUpdate,
  newsletterSubscriptionUpdate,
  avatarUpdate,
  verifyEmail,
  verifyEmailResend,
};
