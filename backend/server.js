require("dotenv").config();
const { app } = require("./app/index");
const db = require("./common/db/index");

const uriDbENV = process.env.uriDb;

(async () => {
  try {
    await db.connectdb({ uriDbENV: uriDbENV, dbname: "db-soyummy" });
    console.log(`Connected to database`);
  } catch (err) {
    console.log(`Connection to database faild: ${err.message}`);
    return "error";
  }
})();

// resolve: move to common/system
const dbConnectionClose = function (msg, callback) {
  db.disconnectdb();
  console.log("Mongoose disconnected through " + msg);
  callback();
};
// For nodemon restarts
process.once("SIGUSR2", function () {
  dbConnectionClose("nodemon restart", function () {
    process.kill(process.pid, "SIGUSR2");
  });
});
// For app termination
process.on("SIGINT", function () {
  dbConnectionClose("app termination", function () {
    process.exit(0);
  });
});
// For Heroku app termination
process.on("SIGTERM", function () {
  dbConnectionClose("Heroku app termination", function () {
    process.exit(0);
  });
});
// For process exit
process.on("exit", function () {
  dbConnectionClose("process exit", function () {
    process.exit(0);
  });
});

app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000");
});
