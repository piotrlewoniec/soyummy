/* Place here only export functionality 

const users = require('./users')

module.exports = {
  create: users.create
}

*/

const uploadFile = require("./multer");

module.exports = {
  uploadFileSave: uploadFile.uploadFileSave,
  uploadFileAvatarMiddleware: uploadFile.uploadFileAvatarMiddleware,
};
