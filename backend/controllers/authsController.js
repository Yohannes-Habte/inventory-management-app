import User from "../models/userModel.js";
import createError from "http-errors";

// ===========================================================================================
// Create new User
// ===========================================================================================

export const createUser = async (req, res, next) => {
  const { firstName, lastName, email, password, agree } = req.body;
  try {
    const user = await User.findOne({ email: email });

    // If user exists in the database
    if (user) {
      return next(
        createError(400, "Email has been taken. Please try another one!")
      );
    }

    // If user does exist in the database
    if (!user) {
      const newUser = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        agree: agree,
      });

      // Save user in the database
      try {
        await newUser.save();
      } catch (error) {
        console.log(error);
        return next(createError(500, "User could not be saved"));
      }

      res.status(201).json({
        success: true,
        user: newUser,
        message: "User account is successfully created!",
      });
    }
  } catch (error) {
    console.log(error);
    return next(
      createError(500, "You are unable to create an account! please try again!")
    );
  }
};

// ===========================================================================================
// Login User
// ===========================================================================================

export const loginUser = async (req, res, next) => {
  try {
  } catch (error) {}
};

// ===========================================================================================
// Update User
// ===========================================================================================

export const updateUser = async (req, res, next) => {
  try {
  } catch (error) {}
};

// ===========================================================================================
// Logout User
// ===========================================================================================

export const logoutUser = async (req, res, next) => {
  try {
  } catch (error) {}
};
