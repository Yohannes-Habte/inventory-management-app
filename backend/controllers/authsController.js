import userToken from "../middlewares/generateUserToken.js";
import User from "../models/userModel.js";
import createError from "http-errors";
import bcrypt from "bcryptjs";

// ===========================================================================================
// Create new User account
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

      // generate user token
      const userRegisterToken = userToken(newUser._id);

      return res
        .cookie("user_token", userRegisterToken, {
          path: "/",
          httpOnly: true,
          expires: new Date(Date.now() + 60 * 60 * 1000),
          sameSite: "none",
          secure: true,
        })
        .status(201)
        .json({
          success: true,
          user: newUser,
          message: "Your account is successfully created!",
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
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });

    // If user does not exist in the database, then ....
    if (!user) {
      return next(
        createError(400, "This email does not exist! Please sign up!")
      );
    }

    // If user exist in the database, then check password validity
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return next(createError(400, "Invalid password! Please sign up!"));
    }

    if (user && isPasswordValid) {
      const { token, password, ...rest } = user._doc;

      // generate user token
      const loginToken = userToken(user._id);

      return res
        .cookie("user_token", loginToken, {
          path: "/",
          httpOnly: true,
          expires: new Date(Date.now() + 60 * 60 * 1000),
          sameSite: "none",
          secure: true,
        })
        .status(200)
        .json({
          success: true,
          user: rest,
          message: "You have successfully Logged In in to your account!",
        });
    }
  } catch (error) {
    console.log(error);
    next(createError(500, "User could not login. Please try again!"));
  }
};

// ===========================================================================================
// Update User
// ===========================================================================================

export const updateUser = async (req, res, next) => {
  const {
    firstName,
    lastName,
    image,
    gender,
    birthDate,
    profession,
    language,
    phoneNumber,
    agree,
  } = req.body;
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      createError(400, "User does not exist! please try again!");
    }

    user.firstName = firstName;
    user.lastName = lastName;
    user.image = image;
    user.gender = gender;
    user.birthDate = birthDate;
    user.profession = profession;
    user.language = language;
    user.phoneNumber = phoneNumber;
    user.agree = agree;

    try {
      await user.save();
    } catch (error) {
      console.log(error);
      return next(
        createError(500, "User update could not be saved! Please try again!")
      );
    }

    return res.status(201).json({
      success: true,
      user: user,
      message: "User account successfully updated!",
    });
  } catch (error) {
    console.log(error);
    next(createError(500, "User account is not updated! Please try again!"));
  }
};

// ===========================================================================================
// Logout User
// ===========================================================================================

export const userLogout = async (req, res, next) => {
  try {
    res.clearCookie("user_token");
    res.status(200).json(`You have successfully logged out`);
  } catch (error) {
    console.log(error)
    next(createError(500, "User could not logout. Please try again!"));
  }
};

// ===========================================================================================
// Delete User Account
// ===========================================================================================

export const deleteUserAccount = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return next(createError(404, "User not found!"));
    } else {
      await User.findByIdAndDelete(userId);
      res.clearCookie("user_token");
      res.status(200).json(`User account has been successfully deleted!`);
    }
  } catch (error) {
    return next(
      createError(500, "User account could not be deleted. Please try again!")
    );
  }
};
