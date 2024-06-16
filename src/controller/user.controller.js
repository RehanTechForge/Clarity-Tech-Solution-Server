

import { User } from "../models/user.model.js";


// register User logic
const registerUser = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;
    if (!username || !email || !password || !phone) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
      // next(error)
    }

    const user = await User.create({ username, email, password, phone });
    res.status(201).json({ message: "Registration Successful", token: await user.generateToken(), userId: user._id.toString() });
  } catch (error) {
    // res.status(500).json({ message: error.message });
    next(error);
  }
}

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "User not found" });
    }
    const isMatch = await userExist.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    res.status(200).json({ message: "Login successful", token: await userExist.generateToken(), userId: userExist._id.toString() });
  } catch (error) {
    next(error)
    // console.log(error);
  }
}

const user = async (req, res) => {
  try {
    // const userData = await User.find({});
    const userData = req.user;
    // console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    // console.log(` error from user route ${error}`);
    next(error)
  }
};

export { registerUser, loginUser, user }