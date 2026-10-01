import { type NextFunction, type Response } from "express";
import { IAuthRequest } from "../auth/AuthContract";
import slugify from "slugify"
import { mapImage } from "../../utilities/helpers";
import CategoryModel from "./CategoryModel";

class CategoryController {
  async createCategory(req: IAuthRequest, res: Response, next: NextFunction) {
    try {
      const data = req.body; 
      // slug Electronics => electronics
      data.slug = slugify(data.name, {
        // replacement: "-",
        remove: /[*+~.()'"!:@]/g,
        lower: true,
        strict: true,
        // locale: "en",
        // trim: true
      });
      // image optional 
      if(req.file) {
        data.image = mapImage(req.file, "category/");
      }
      // foreign key(parentId) null
      if(!data.parentId || data.parentId === 'null') {
        data.parentId = null
      }

      data.createdBy = req.loggedInUser?._id;
      data.updatedBy = req.loggedInUser?._id;
      // data create 
      const category = new CategoryModel(data)
      await category.save()

      res.json({
        data: category, 
        message: "Category Created successfully",
        meta: null
      })
    } catch(exception) {
      next(exception)
    }
  }
  
  async listAllCategory(req: IAuthRequest, res: Response, next: NextFunction) {
    try {
      // filter and pagination
      const page = Number(req.query.page || 1);
      const limit = Number(req.query.limit || 20);
      const skip = (page - 1) * limit

      let filter: Record<string, unknown> = {}
      if(req.query.search) {
        filter = {
          $or: [
            { name: new RegExp(req.query.search as string, "i") },
            { summary: new RegExp(req.query.search as string, "i") },
          ],
        };
      }

      if(req.query.status) {
        filter = {
          ...filter, 
          status: (req.query.status as string).toLowerCase()
        }
      }

      // filter for only listing parent categories
      if(req.query.onlyParent) {
        filter = {
          ...filter, 
          parentId: null
        }
      }

      // list for child only
      if(req.query.catId && req.query.onlyChild) {
        filter = {
          ...filter, 
          parentId: req.query.catId
        }
      }
      

      const data = await CategoryModel.find(filter)
        .populate("parentId", ["_id", "name", "slug", "image"])
        .populate("createdBy", ["_id", "name", "email", "role", "image"])
        .populate("updatedBy", ["_id", "name", "email", "role", "image"])
        .sort({ createdAt: "desc" })
        .skip(skip)
        .limit(limit);
      
      const count = await CategoryModel.countDocuments(filter);

      res.json({
        data: data,
        message: "All Category listing",
        meta: {
          pagination: {
            page: page,
            limit: limit,
            total: count,
            totalPages: Math.ceil(count/limit)
          },
        },
      });
    } catch(exception) {
      next(exception)
    }
  }

  async getCategoryDetail(req: IAuthRequest, res: Response, next: NextFunction) {
    try {
      const data = await CategoryModel.findOne({
        slug: req.params.slug as string
      }).populate("parentId", ["_id", "name", "slug", "image"])
        .populate("createdBy", ["_id", "name", "email", "role", "image"])
        .populate("updatedBy", ["_id", "name", "email", "role", "image"])
      
      if(!data) {
        throw {code: 422, message: "Category does not exitss"}
      }
      res.json({
        data: data, 
        message: "Category Detail by slug",
        meta: null
      })
    } catch(exception) {
      next(exception)
    }
  }
  async updateCategory(req: IAuthRequest, res: Response, next: NextFunction) {
    try {
      const data = await CategoryModel.findOne({
        slug: req.params.slug as string,
      });
      if (!data) {
        throw { code: 422, message: "Category does not exitss" };
      }
      const payload = req.body;
      if (req.file) {
        payload.image = mapImage(req.file, "category/");
      } else {
        payload.image = data.image;
      }
      // foreign key(parentId) null
      if (!payload.parentId || payload.parentId === "null") {
        payload.parentId = null;
      }
      payload.updatedBy = req.loggedInUser?._id;


      const updatedData = await CategoryModel.findOneAndUpdate({
        _id: data._id,
      }, payload,  {new: true})
      res.json({
        data: updatedData,
        message: "Category Updated Successfully.",
        meta: null
      })
    } catch(exception) {
      next(exception)
    }
  }
 
  async deleteCategory(req: IAuthRequest, res: Response, next: NextFunction) {
    try {      
      const del = await CategoryModel.findOneAndDelete({
        slug: req.params.slug as string
      })

      if(!del) {
        throw { code: 422, message: "Category does not exits or is already deleted" };
      }
      
      res.json({
        data: del, 
        message: "Category Deleted successfully.",
        meta: null
      })
    } catch(exception) {
      next(exception)
    }
  }
}

export default CategoryController