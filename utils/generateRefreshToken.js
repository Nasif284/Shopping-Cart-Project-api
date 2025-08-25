import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
const generateRefreshToken = async (userId) => {
  const token = await jwt.sign({ id: userId }, process.env.JWT_REFRESH_KEY, { expiresIn: "30d" });
  await userModel.updateOne(
    { _id: userId },
    {
      refreshToken: token,
    }
  );
  return token;
};

export default generateRefreshToken;
