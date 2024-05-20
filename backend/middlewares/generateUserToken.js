import jwt from "jsonwebtoken";

// Generate user token
const userToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_USER_SECRET, {
    expiresIn: "1h",
  });

  return token;
};

export default userToken;
