const processexec = require("./services/system");
const { app } = require("./app");
const db = require("./common/db");
const { serverPort, dbname, uriDbENV, secret } = require("./config");
const { auth } = require("./common/auth");
const { User } = require("./features/users");

auth.strategyJWT({ secret: secret, User: User });

processexec.processSystemHandle();

(async () => {
  try {
    await db.connectdb({ uriDbENV: uriDbENV, dbname: dbname });
    console.log(`Connected to database`);
  } catch (err) {
    console.log(`Connection to database faild: ${err.message}`);
    return "error";
  }
})();

app.listen(serverPort, () => {
  console.log("Server running. Use our API on port: 3000");
});
