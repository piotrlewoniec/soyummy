require("dotenv").config();

module.exports = {
  serverPort: process.env.SERVER_PORT || 3000,
  dbname: process.env.DATABASE_NAME,
  uriDbENV: process.env.URIDB,
  secret: process.env.SECRET,
  usergmail: process.env.USER_GMAIL,
  appgooglepass: process.env.APP_GOOGLE_PASS,
  registerVerifyMailApiPath: process.env.REGISTER_VERIFY_MAIL_API_PATH,
};
