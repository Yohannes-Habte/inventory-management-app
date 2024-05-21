import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, default: "https://i.ibb.co/4pDNDk1/avatar.png" },
    gender: { type: String },
    birthDate: { type: String },
    profession: { type: String },
    language: { type: String },
    phoneNumber: { type: String },

    addresses: [
      {
        addressType: { type: String, required: true },
        street: { type: String, required: true },
        country: { type: String, required: true },
        state: { type: String, required: true },
        city: { type: String, required: true },
        zipCode: { type: String, required: true },
      },
    ],
    comments: [],
    role: {
      type: String,
      default: "employee",
      enum: ["employee", "admin"],
    },

    agree: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

// Before saving the new user, encrypt the password.
userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();
    const hashedPassword = await bcrypt.hash(this.password, 12);
    this.password = hashedPassword;
    return next();
  } catch (err) {
    return next(err);
  }
});

const User = mongoose.model("User", userSchema);
export default User;
