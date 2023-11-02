const jwt = require("jsonwebtoken");
const bCrypt = require("bcryptjs");
const passport = require("passport");
const passportJWT = require("passport-jwt");

const codeJWT = ({ payload, secret, expires }) =>
  jwt.sign(payload, secret, { expiresIn: expires });
const decodeJWT = ({ token }) => jwt.decode(token);
const verifyJWT = ({ token, secret }) => jwt.verify(token, secret);

const setPassword = (password) => {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(6));
};

const validPassword = ({ passwordLogin, passwordDB }) => {
  return bCrypt.compareSync(passwordLogin, passwordDB);
};

const strategyJWT = ({ secret, User }) => {
  const ExtractJWT = passportJWT.ExtractJwt;
  const Strategy = passportJWT.Strategy;

  const params = {
    secretOrKey: secret,
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    passReqToCallback: true,
  };

  passport.use(
    new Strategy(params, async (request, payload, done) => {
      try {
        const [user] = await User.find({ _id: payload.id });
        if (!user) {
          return done(new Error("User not found"));
        }
        let index;
        for (const key of request.rawHeaders) {
          if (key.includes("Bearer")) {
            index = request.rawHeaders.findIndex((element) => element === key);
          }
        }
        const token = request.rawHeaders[index];
        const userToken = "Bearer " + user.token;
        if (user.token === "" || userToken !== token) {
          return done(new Error("Unauthorized"));
        }
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    })
  );
};

const authMiddleware = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user) => {
    if (!user || err) {
      return res.status(401).json({
        status: "Unauthorized",
        code: 401,
        message: "Not authorized",
        data: "Unauthorized",
      });
    }
    req.user = user;
    next();
  })(req, res, next);
};

module.exports = {
  codeJWT,
  decodeJWT,
  verifyJWT,
  strategyJWT,
  setPassword,
  validPassword,
  authMiddleware,
};
