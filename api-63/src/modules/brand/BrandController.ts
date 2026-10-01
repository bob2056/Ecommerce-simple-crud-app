import { type NextFunction, type Response } from "express";
import { IAuthRequest } from "../auth/AuthContract";
import slugify from "slugify"
import { mapImage } from "../../utilities/helpers";
import BrandModel from "./BrandModel";

class BrandController {
  async createBrand(req: IAuthRequest, res: Response, next: NextFunction) {
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
        data.image = mapImage(req.file, "brand/");
      }

      data.createdBy = req.loggedInUser?._id;
      data.updatedBy = req.loggedInUser?._id;
      // data create 
      const brand = new BrandModel(data)
      await brand.save()

      res.json({
        data: brand, 
        message: "Brand Created successfully",
        meta: null
      })
    } catch(exception) {
      next(exception)
    }
  }
  
  async listAllBrand(req: IAuthRequest, res: Response, next: NextFunction) {
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
      

      const data = await BrandModel.find(filter)
        
        .populate("createdBy", ["_id", "name", "email", "role", "image"])
        .populate("updatedBy", ["_id", "name", "email", "role", "image"])
        .sort({ createdAt: "desc" })
        .skip(skip)
        .limit(limit);
      
      const count = await BrandModel.countDocuments(filter);

      res.json({
        data: data,
        message: "All Brand listing",
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

  async getBrandDetail(req: IAuthRequest, res: Response, next: NextFunction) {
    try {
      const data = await BrandModel.findOne({
        slug: req.params.slug as string
      })
        .populate("createdBy", ["_id", "name", "email", "role", "image"])
        .populate("updatedBy", ["_id", "name", "email", "role", "image"])
      
      if(!data) {
        throw {code: 422, message: "Brand does not exitss"}
      }
      res.json({
        data: data, 
        message: "Brand Detail by slug",
        meta: null
      })
    } catch(exception) {
      next(exception)
    }
  }
  async updateBrand(req: IAuthRequest, res: Response, next: NextFunction) {
    try {
      const data = await BrandModel.findOne({
        slug: req.params.slug as string,
      });
      if (!data) {
        throw { code: 422, message: "Brand does not exitss" };
      }
      const payload = req.body;
      if (req.file) {
        payload.image = mapImage(req.file, "/brand");
      } else {
        payload.image = data.image;
      }

      payload.updatedBy = req.loggedInUser?._id;


      const updatedData = await BrandModel.findOneAndUpdate({
        _id: data._id,
      }, payload,  {new: true})
      res.json({
        data: updatedData,
        message: "Brand Updated Successfully.",
        meta: null
      })
    } catch(exception) {
      next(exception)
    }
  }
 
  async deleteBrand(req: IAuthRequest, res: Response, next: NextFunction) {
    try {      
      const del = await BrandModel.findOneAndDelete({
        slug: req.params.slug as string
      })

      if(!del) {
        throw { code: 422, message: "Brand does not exits or is already deleted" };
      }
      
      res.json({
        data: del, 
        message: "Brand Deleted successfully.",
        meta: null
      })
    } catch(exception) {
      next(exception)
    }
  }
}

export default BrandController