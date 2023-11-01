const db = require("../../common/db");

const dbConnectionClose = (msg, callback) => {
  db.disconnectdb();
  console.log("Mongoose disconnected through " + msg);
  callback();
};

const processSystemHandle = () => {
  // For nodemon restarts
  process.once("SIGUSR2", () => {
    dbConnectionClose("nodemon restart", function () {
      process.kill(process.pid, "SIGUSR2");
    });
  });
  // For app termination
  process.on("SIGINT", () => {
    dbConnectionClose("app termination", function () {
      process.exit(0);
    });
  });
  // For Heroku app termination
  process.on("SIGTERM", () => {
    dbConnectionClose("Heroku app termination", function () {
      process.exit(0);
    });
  });
  // For process exit
  process.on("exit", () => {
    dbConnectionClose("process exit", function () {
      process.exit(0);
    });
  });
};

module.exports = { processSystemHandle };
