import { Router } from "express";
import UserController from "./UserController";
import Auth from "../../middlewares/AuthMiddleware";

const userRouter = Router()
const userCtrl = new UserController();

// userRouter.post('/', userCtrl.create)
userRouter.get("/", Auth(), userCtrl.listAll);
userRouter.get('/:userId', Auth(), userCtrl.getUserByUsername)

userRouter.put("/:username", userCtrl.updateUserByUserName);

userRouter.delete("/:username", userCtrl.deleteUserByUserName);

export default userRouter