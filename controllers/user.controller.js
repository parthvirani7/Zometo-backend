const { verifyToken, createToken } = require("../middlewares/auth");
const { userService } = require("../services");
const { findUser } = require("../services/user.service");
const { send_Mail } = require("../services/email.service");
const user = require("../models/user.model");

/* GET USER */

const getUser = async (req, res) => {
  const token = req.cookies["login_token"];

  if (!token) {
    res.status(500).json({
      message: "you are not login",
    });
  }
  const user = await userService.getUser();
  console.log(user, "get user");

  res.render("./alluser", { message: user });

  // res.status(200).json({
  //   message: "profile get success",
  //   data: user,
  // });
};

/* GET USER'S PROFILE */

const getProfile = async (req, res) => {
  const token = req.cookies["login_token"];

  if (!token) {
    res.status(400).json({
      mesasge: "you are not login",
    });
  }

  const user = await verifyToken(token);

  console.log(user);

  res.status(200).json({ message: " profile get success", user });
};

/* ADD or REGISTER USER */

const addUser = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const userExist = await userService.getUserByEmail(body.email);
    if (userExist) {
      throw new Error("User Exist Alreadely");
    }
    const user = await userService.addUser(body);
    if (user) {
      const email = await send_Mail(user.email);
      console.log("mail forwered ", email.envelope); /* to & from */
    }
    if (!user) {
      throw new Error("something went wrong");
    }

    res.render("./login");

    // res.status(201).json({
    //   message: "user Created success",
    //   data: user,
    // });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

/* USER LOGIN */
const loginUser = async (req, res) => {
  const body = req.body;
  const email = req.body.email;
  const password = req.body.password;
  const number = req.body.contactNumber;
  console.log(body);

  const findUser = await userService.findUser(email);

  console.log(findUser);

  if (!findUser) {
    res.status(500).json({
      message: "User not found",
    });
  } else {
    if (password === findUser.password) {
      let data = {
        _id: findUser._id,
        email: findUser.email,
        contactNumber: findUser.contactNumber,
        role: findUser.role,
        // number: req.body.contactNumber,
      };

      const token = createToken(data);

      res.cookie("login_token", token);

      res.status(200).json({
        message: "login success",
      });
    } else {
      res.status(500).json({
        message: "Enter valid password",
      });
    }
  }
};

/* UPDATE USER */

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    console.log(id, body);

    if (!user) {
      throw new Error("something went wrong");
    }
    const user = await userService.updateUser(id, body);

    res.status(200).json({
      message: "User updated success",
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

/* DELETE USER */

const deleteUser = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const user = await userService.deleteUser(id);
    if (!user) {
      throw new Error("something went wrong");
    }

    res.status(200).json({
      message: "User delete success",
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
module.exports = {
  getUser,
  getProfile,
  addUser,
  loginUser,
  updateUser,
  deleteUser,
};
