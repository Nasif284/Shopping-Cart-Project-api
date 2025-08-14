import userModel from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function registerUser(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "provide email, name, password",
        error: true,
        success: false,
      });
      }
      const user = await userModel.findOne({ email: email })
      if (user) {
          return res.json({
              message: "User already exist in this email Id",
              error: true,
              success: false;
          })
      }
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)
      const nweUser = new userModel({
          email: email,
          password: hashedPassword,
          name: name
      })
        const save= await nweUser.save()
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}
