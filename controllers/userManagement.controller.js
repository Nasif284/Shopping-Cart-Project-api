import { blockUserService, getUsersService } from "../services/userManagement.service.js";
import { STATUS_CODES } from "../utils/statusCodes.js";

export const getUsers = async (req, res) => {
  const users = await getUsersService();
  res.status(STATUS_CODES.OK).json({ users });
};

export const blockUserController = async (req, res) => {
  const id = req.params.id;
  const user = await blockUserService(id);
  res.status(STATUS_CODES.OK)
    .json({
      success: true,
      error: false,
      message: user.isBlocked ? "User Blocked" : "User Unblocked",
      user,
    });
};
