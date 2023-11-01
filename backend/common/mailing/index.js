/* Place here only export functionality 

const users = require('./users')

module.exports = {
  create: users.create
}

*/

const nodemailer = require("./nodemailer");

module.exports = {
  nodemailer: nodemailer,
  sendVerificationEmail: nodemailer.sendVerificationEmail,
  sendNewsletterInfoEmail: nodemailer.sendNewsletterInfoEmail,
};
