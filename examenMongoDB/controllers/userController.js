const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const usersController = (User) => {
  const getUsers = async (req, res) => {
    const {query} = req;
    const allUsers = await User.find(query);

    res.json(allUsers);
  };

  const postUsers = async (req, res) => {
    const user = new User(req.body);
    user.password = await bcrypt.hash(user.password, 10);
    await user.save();

    res.json(user);
  };

  const getUsersById = async (req, res) => {
    try {
      const {params} = req;
      const userToFind = await User.findById(params.userId);

      res.json(userToFind);
    } catch {
      res.json({'message': 'Invalid Credential'});
    }
  };

  const putUsers = async (req, res) => {
    try {
      const {body} = req;

      const userUpdate = await User.updateOne({
        _id: req.params.userId,
      }, {
        $set: {
          firstName: body.firstName,
          lastName: body.lastName,
          userName: body.userName,
          password: await bcrypt.hash(body.password, 10),
          email: body.email,
          address: body.address,
          phone: body.phone,
        },
      });

      res.json(userUpdate);
    } catch {
      res.json({'message': 'Invalid Credential'});
    }
  };

  const deleteUsersById = async (req, res) => {
    try {
      const userId = req.params.userId;
      await User.findByIdAndDelete(userId);

      res.json('User/s Deleted');
    } catch {
      res.json({'message': 'Invalid Credential'});
    }
  };

  const getUsersByUserName = async (req, res) => {
    const {body} = req;
    const userToFind = await User.findOne({'userName': body.userName});

    if (userToFind) {
      res.json(userToFind);
    } else {
      res.json({'message': 'Invalid Credential'});
    }
  };

  const postLoginUsers = async (req, res) => {
    const {body} = req;
    const userToFind = await User.findOne({'userName': body.userName});

    if (userToFind && await bcrypt.compare(body.password, userToFind.password)) {
      const token = createToken(userToFind);

      res.json({message: 'Valid credentials',token,});

    } else {
      res.json({message: 'Invalid credentials'});
    }
  };

  const createToken = (userToFind) => {
    const payload = {
      firstName: userToFind.firstName,
      lastName: userToFind.lastName,
      userName: userToFind.userName,
    };

    return jwt.sign(payload, 'secret', {expiresIn: '12h'});
  };

  return {getUsers, postUsers, getUsersById, putUsers, deleteUsersById, getUsersByUserName, postLoginUsers};
};

module.exports = usersController;
