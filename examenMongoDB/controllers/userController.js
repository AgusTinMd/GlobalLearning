const { response } = require("express");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



const usersController = (User) => {

  const getUsers = async(req, res) => {
    const { query } = req;
    const response = await User.find(query);

    res.json(response);
  }

  const postUsers = async(req, res) => {
    const user = new User(req.body);
    user.password = await bcrypt.hash(user.password, 10);
    await user.save();
    res.json(user);
  }

  const putUsers = async(req, res) => {
    const {body} = req;
    const response = await User.updateOne({
      _id: req.params.userId
    }, {
      $set:{
        firstName: body.firstName,
        lastName: body.lastName,
        userName: body.userName,
        password: await bcrypt.hash(body.password,10),
        email: body.email,
        address: body.address,
        phone: body.phone
      }
    });
    res.json(response)
  }

  const deleteUsersById = async(req, res) => {
    const id = req.params.userId;
    await User.findByIdAndDelete(id);
    res.status(202).json("User/s Deleted");
  }

  const getUsersbyID = async(req,res) => {
    const {params} = req;
    const response = await User.findById(params.userId);
    res.json(response);
  }

  const getUserByUsername = async (req, res) => {
    const {params} = req;
    const user = await User.findOne({"userName": params.userName});

    if(user===null)
    {
      res.json("Invalid Credentials");
    }else{
      res.json(user);
    }
    
  }

  const Login = async(req,res) => {
    const {body} = req;
    var response = await User.findOne({
      'userName':body.userName
    });

    if(response===null){

      res.status(401).json('Invalid Credentials')

    }else if( await bcrypt.compare(body.password, response.password)){

      const savedUser = response;
      const token = generateToken(savedUser);
      response = {message: 'Ok',token};
      

    }else{
      response = {message: 'Invalid Credential'}
    }
    res.json(response);
     
  }

  const generateToken = savedUser => {
    const tokenPayload = {
      name: savedUser.name,
      userName: savedUser.userName,
      lastName: savedUser.lastName
    }
    return jwt.sign(tokenPayload,'secret', {expiresIn: '12h'});
  }


  return {getUsers, postUsers, putUsers, deleteUsersById, getUsersbyID, getUserByUsername, Login,};
}

module.exports = usersController;