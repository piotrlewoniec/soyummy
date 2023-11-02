/* Place here only export functionality 

const users = require('./users')

module.exports = {
  create: users.create
}

*/

const auth = require("./auth");

module.exports = {
  auth: auth,
  codeJWT: auth.codeJWT,
  decodeJWT: auth.decodeJWT,
  verifyJWT: auth.verifyJWT,
  strategyJWT: auth.strategyJWT,
  setPassword: auth.setPassword,
  validPassword: auth.validPassword,
  authMiddleware: auth.authMiddleware,
};
