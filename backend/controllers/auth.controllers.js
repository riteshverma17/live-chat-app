import User from "../models/user.model.js";
import bycrypt from "bcryptjs";
import generateTokenAndSetCookies from "../utils/generate.token.js";

export const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    if (!fullName || !userName || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password do not match" });
    }

    
    const user = await User.findOne({ userName });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bycrypt.genSalt(10);
    const hasPassword = await bycrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new User({
      fullName,
      userName,
      password: hasPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      generateTokenAndSetCookies(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ message: "Invalide user data" });
    }
  } catch (error) {
    console.log("Error in Signup controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try{
    const {username, password} = req.body;
    const user = await User.findOne({username});
    const isPasswordMatch = await bycrypt.compare(password, user?.password || "");

    if(!user || !isPasswordMatch){
      return res.status(400).json({message: "Invalid username or password"});
    }

    generateTokenAndSetCookies(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      profilePic: user.profilePic,
    })

  }catch(error){
    console.log("Error in Login controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const logout = (req, res) => {
  try{
    res.cookie("jwt","", {maxAge: 0});
    res.status(200).json({message: "Logout successfully"});
  }catch(error){
    console.log("Error in Logout controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
