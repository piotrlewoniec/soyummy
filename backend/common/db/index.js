/* Place here only export functionality 

const users = require('./users')

module.exports = {
  create: users.create
}

*/

const dbconnections = require("./dbconnections");
const dbstate = require("./dbstate");

module.exports = {
  connectdb: dbconnections.connectdb,
  disconnectdb: dbconnections.disconnectdb,
  dbstatus: dbstate.dbstatus,
  dbstatusValue: dbstate.dbstatusValue,
  isValidId: dbstate.isValidId,
};
