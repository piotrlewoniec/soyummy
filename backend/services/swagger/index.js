/* Place here only export functionality 

const users = require('./users')

module.exports = {
  create: users.create
}

*/

const swagger = require("./swagger");

module.exports = {
  swaggerRouter: swagger.router,
};
