const User = require("../models/auth");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.Register = async (req, res, next) => {
  try {
    let user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      deleted: false,
    });
    user
      .save()
      .then((user) => {
        res
          .status(201)
          .json({
            responseStatusCode: 201,
            responseDescription: "User was created successfully",
            data: user,
          });
      })
      .catch((err) => {
        console.log(err);
        res
          .status(401)
          .json({
            responseStatusCode: 401,
            responseDescription:
              "Client side error, check on your request body",
            data: err,
          });
      });
  } catch (error) {
    if (error) {
      return res.status(500).json({
        success: false,
        errors: "Failed to add a new entry",
      });
    }
    next(error);
  }
};

exports.Login = async (req, res, next) => {
  try {
    const useremail = req.body.email;
    const userpassword = req.body.password;
    const user = await User.findOne({ email: useremail });
    const { id, email } = user;
    const valid = bcrypt.compare(
      userpassword,
      user.password
    );
    if (valid) {
      const token = jwt.sign({ id, email }, process.env.SECRET);

      res.status(200).json({ id, email, token });
    } else {
      throw new Error();
    }
  } catch (error) {
    if (error) {
      return res.json({
        success: false,
        errors: "Incorrect Email or Password",
      });
    }
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const user = await User.find({})
    if(user){
      res.status(200).json({user})
    }else {
      throw new Error();
    }
  } catch (error) {
    if (error) {
      return res.json({
        success: false,
        errors: "No details found",
      });
    }
  }
}