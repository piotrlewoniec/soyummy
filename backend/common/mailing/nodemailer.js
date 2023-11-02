const nodemailer = require("nodemailer");
const {
  usergmail,
  appgooglepass,
  registerVerifyMailApiPath,
} = require("../../config");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: usergmail,
    pass: appgooglepass,
  },
});

const sendVerificationEmail = async ({
  email,
  verificationToken,
  hostAddress,
}) => {
  const mailOptions = {
    from: usergmail,
    sender: "SoYummy api registration confirm",
    to: email,
    subject: "Registration confirmation API contacts sent by nodemailer",
    text: `Confirm registration by visiting followng link ${hostAddress}/${registerVerifyMailApiPath}/${verificationToken}`,
    html: `<p>Confirm registration by clicking followng link</p><a href=" ${hostAddress}/${registerVerifyMailApiPath}/${verificationToken}">Registration confirm</a>`,
  };
  try {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        console.log(
          "Message sent messageId: %s",
          info.messageId,
          "envelope",
          info.envelope,
          "accepted",
          info.accepted,
          "rejected",
          info.rejected,
          "pending",
          info.pending,
          "response",
          info.response
        );
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const sendNewsletterInfoEmail = async ({ email, newsletterMessage }) => {
  const mailOptions = {
    from: usergmail,
    sender: "SoYummy api newsletter subscription info",
    to: email,
    subject:
      "Newsletter subscription confirmation API SoYummy sent by nodemailer",
    text: `You have been ${newsletterMessage} to SoYummy newsletter`,
    html: `<p>You have been ${newsletterMessage} to SoYummy newsletter`,
  };
  try {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        console.log(
          "Message sent messageId: %s",
          info.messageId,
          "envelope",
          info.envelope,
          "accepted",
          info.accepted,
          "rejected",
          info.rejected,
          "pending",
          info.pending,
          "response",
          info.response
        );
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { sendVerificationEmail, sendNewsletterInfoEmail };
