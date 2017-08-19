const bcrypt = require('bcryptjs')

module.exports = {
  getHash,
  verifyUser
}

function getHash (password) {
return bcrypt.hashSync(password, 8)
}

function verifyUser (user, password) {
  return bcrypt.compareSync(password, user.hash);
}
