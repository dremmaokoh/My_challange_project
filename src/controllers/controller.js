// Importing our packages
const bcrypt = require("bcrypt");
const User_info = require("../models/model");


//POST REQUEST/ REGISTER USER

exports.registerUser = async (req, res) => {
  try {
    const {
      phoneNumber,
      email,
      firstName,
      lastName,
      currentBusiness,
      password,
      userName,
    } = req.body;

    const salt = await bcrypt.genSalt(10);

    const hash_password = await bcrypt.hash(password, salt);
    const newUser = new User_info({
      phoneNumber,
      email,
      firstName,
      lastName,
      currentBusiness,
      password: hash_password,
      userName,
    });

    const save_user = await newUser.save();
    const user_info = {
      message: "Registered successfully",
      save_user,
    };
    return res.status(201).json(user_info);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server error",
    });
  }
};

// GET REQUEST/ RETRIEVE ALL REGISTERED USERS
exports.getUsers = async (req, res) => {
  try {
    const all_users = await User_info.find();
    return res.status(200).json({
      Waitlist_counts: all_users.length,
      Waitlist_data: all_users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server error",
    });
  }
};

//GET REQUEST/ RETRIEVE SINGLE USER BY USERNAME
exports.getUserByuserName = async (req, res) => {
  try {
    const user = await User_info.findOne({ userName: req.params.userName });
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server error",
    });
  }
};

//PUT REQUEST/  UPDATE SINGLE USER BY USERNAME
exports.updateUserByuserName = async (req, res) => {
  try {
    const {
      phoneNumber,
      email,
      firstName,
      lastName,
      currentBusiness,
      password,
      userName,
    } = req.body;
    const user_new = await User_info.findOneAndUpdate(
      { userName: req.params.userName },
      { ...req.body },
      {
        new: true,
      }
    );
    const user_update = {
      message: "Updated successfully",
      user_new,
    };
    return res.status(200).json(user_update);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server error",
    });
  }
};

//DELETE REQUEST/  DELETE SINGLE USER BY USERNAME
exports.deleteUserByuserName = async (req, res) => {
  try {
    
    const user_neww = await User_info.findOneAndDelete(
      { userName: req.params.userName });
      
    const user_delete = {
      message: "Deleted successfully",
      user_neww
    };
    return res.status(200).json( user_delete);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server error",
    });
  }
};
