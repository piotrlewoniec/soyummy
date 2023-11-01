/* Place here only export functionality 

const users = require('./users')

module.exports = {
  create: users.create
}

*/

const User = require("./users.schema");
const usersDAO = require("./users.dao");
const usersController = require("./users.controller");
const usersRouter = require("./users.router");

module.exports = {
  User: User.User,
  usersDAO: usersDAO,
  isRegistred: usersDAO.isRegistred,
  registerUser: usersDAO.registerUser,
  loginUser: usersDAO.loginUser,
  logoutUser: usersDAO.logoutUser,
  currentUser: usersDAO.currentUser,
  subscriptionUpdate: usersDAO.subscriptionUpdate,
  newsletterSubscriptionUpdate: usersDAO.newsletterSubscriptionUpdate,
  avatarUpdate: usersDAO.avatarUpdate,
  verifyEmail: usersDAO.verifyEmail,
  verifyEmailResend: usersDAO.verifyEmailResend,
  usersController: usersController,
  postUserRegister: usersController.postUserRegister,
  postUserLogin: usersController.postUserLogin,
  getUserLogout: usersController.getUserLogout,
  getUserCurrent: usersController.getUserCurrent,
  patchUserSubscription: usersController.patchUserSubscription,
  patchUserNewsletterSubscription:
    usersController.patchUserNewsletterSubscription,
  patchUserAvatar: usersController.patchUserAvatar,
  getVerifyEmail: usersController.getVerifyEmail,
  postVerifyEmailResend: usersController.postVerifyEmailResend,
  usersRouter: usersRouter.router,
};
