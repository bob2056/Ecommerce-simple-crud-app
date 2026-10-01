import { type Request, type Response, type NextFunction } from "express";
import UserModel from "./UserModel";

type FilterType = Record<
  string,
  Record<string, string> | 
  Array<Record<string, string | RegExp>>
>;

class UserController {
  create(req: Request, res: Response, next: NextFunction) {
    // logic to create a user
    res.json({
      data: {},
      message: "User Created",
      meta: null,
    });
  }
  
  async listAll(req: Request, res: Response, next: NextFunction) {
    try{
      let filter: FilterType = {
        _id: {$ne: req.loggedInUser?._id as string}
      }
      if(req.query.search) {
        filter = {
          ...filter,
          $or: [
            { name: new RegExp(req.query.search as string, 'i')}, 
            { email: new RegExp(req.query.search as string, 'i')}, 
            { phone: new RegExp(req.query.search as string, 'i')}
          ],
        };
      }

      // pagination 
      const page = Number(req.query.page || 1)
      const limit = Number(req.query.limit || 20)

      const skip = (page-1) * limit

      // data fetch
      const userLists = await UserModel.find(filter, {
        password: 0,
        __v: 0,
        activationToken: 0,
        forgetPasswordToken: 0,
      })
      .sort({name: "asc", createdAt: "desc"})
      .skip(skip)
      .limit(limit)
      
      const count = await UserModel.countDocuments(filter)


      res.json({
        data: userLists,
        message: "All Users listed",
        meta: {
          pagination: {
            page: page,
            limit: limit,
            total: count,
            totalPages: Math.ceil(count / limit),
          },
        },
      });
    } catch(exception) {
      next(exception)
    }
  }

  async getUserByUsername(req: Request, res: Response, next: NextFunction) {
    try {
      const userDetail = await UserModel.findById(req.params.userId as string, {
        password: 0,
        __v: 0,
        activationToken: 0,
        forgetPasswordToken: 0,
      });
      if(!userDetail) {
        throw {code: 404, message: "User not found"}
      }
      res.json({
        data: userDetail, 
        message: "User Detail",
        meta: null
      })
    } catch(exception) {
      next(exception)
    }
  }
  updateUserByUserName(req: Request, res: Response, next: NextFunction) {
    // logic to update the user by username
    res.json({
      data: {},
      message: "User updated successfully",
      meta: null,
    });
  }
  deleteUserByUserName(req: Request, res: Response, next: NextFunction) {
    // logic to delete the user by username
    res.json({
      data: {},
      message: "User deleted successfully",
      meta: null,
    });
  }
}
export default UserController