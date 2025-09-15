import sendEmail from "../config/emailService.js";
import { getIO, onlineUsers } from "../config/socketIo.js";
import userModel from "../models/user.model.js";
import accountBlockedMailTemplate from "../utils/blockUserTemplete.js";
import { getSignedImageUrl } from "../utils/getImageFromCloudinary.js";
import accountUnblockedMailTemplate from "../utils/unblockEmailTemplete.js";

export const getUsersService = async () => {
  const users = await userModel.find();
  const allUsers = users.map((user) => {
    let obj = user.toObject();
    if (!user.googleId) {
      obj.image = user.image ? getSignedImageUrl(user.image) : null;
    }else{
       obj.image = obj.image?.includes("lh3.googleusercontent.com")
         ? `${obj.image}?sz=200`
         : obj.image;
    }
    return obj;
  });
  return allUsers;
};

export const blockUserService = async (userId) => {
  const user = await userModel.findByIdAndUpdate(
    userId,
    [{ $set: { isBlocked: { $not: "$isBlocked" } } }],
    { new: true }
  );
  if (user.isBlocked) {
    await sendEmail({
      to: user.email,
      subject: "Verification mail from shopping cart app",
      text: `User Blocked`,
      html: accountBlockedMailTemplate(user?.name),
    });
  }
  if (!user.isBlocked) {
      await sendEmail({
        to: user.email,
        subject: "Verification mail from shopping cart app",
        text: `User unblocked`,
        html: accountUnblockedMailTemplate(user?.name),
      });
  }
  const socketId = onlineUsers.get(userId);
  if (socketId) {
    getIO().to(socketId).emit("forceLogout", "You have been blocked by admin.");
  }
  return user;
};
