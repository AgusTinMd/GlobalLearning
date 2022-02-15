const express = require('express');
const userController = require('../controllers/userController');
const {userSchema, loginSchema} = require('../validators/usersvalidationchemas')
const validator = require('express-joi-validation').createValidator();

const routes = (User) => {
  const userRouter = express.Router();

  const { getUsers, postUsers, putUsers, deleteUsersById, getUsersbyID, getUserByUsername, Login, validateToken} = userController(User);

  userRouter.route('/users')
    
      .get(getUsers)

      .post(validator.body(userSchema), postUsers);


  userRouter
      .route('/users/:userId')

      .get(getUsersbyID)   
      
      .put(putUsers)

      .delete(deleteUsersById)

    userRouter
        .route('/users/searchs/:userName')

        .get(getUserByUsername);
    

    userRouter
      .route('/login')

      .post(validator.body(loginSchema),Login)

      return userRouter;
}

module.exports = routes;