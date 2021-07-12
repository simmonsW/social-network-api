const { User } = require('../models');

const userController = {
  // get all users
  // get user by id (populate thought and friend data)
  // POST a new user
  createUser({ body }, res) {
    User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.status(400).json(err));
  }
  // PUT update user by id
  // DELETE user by id
  // BONUS: remove a user's associated thoughts when deleted
};

module.exports = userController;