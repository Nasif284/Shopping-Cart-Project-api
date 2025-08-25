import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.accessToken || req?.header?.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "provide token",
      });
    }
    const decode = await jwt.verify(token, process.env.JWT_KEY);
    if (!decode) {
      return res.status(400).json({
        message: "unauthorized access",
        error: true,
        success: false,
      });
    }
    req.userId = decode.id;
    next();
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message,
      success: false,
    });
  }
};
export default auth;
