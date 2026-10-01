import { Router } from "express";
import Auth from "../../middlewares/AuthMiddleware";
import BrandController from "./BrandController";
import uploader from "../../middlewares/UploaderMiddleware";
import bodyValidator from "../../middlewares/BodyValidationMiddleware";
import { BrandCreateDTO } from "./BrandDto";

const brandRouter = Router()
const brandCtrl = new BrandController()

// brand 


// only allowed to loggedin user with permission
brandRouter.post('/', Auth(['admin']), uploader('/brand').single('image'), bodyValidator(BrandCreateDTO), brandCtrl.createBrand);
brandRouter.get("/", Auth(['admin','seller']), brandCtrl.listAllBrand);
brandRouter.get("/:slug", Auth(), brandCtrl.getBrandDetail);

brandRouter.put("/:slug", Auth(['admin']), uploader('/brand').single('image'), bodyValidator(BrandCreateDTO), brandCtrl.updateBrand);

brandRouter.delete("/:slug", Auth(['admin']), brandCtrl.deleteBrand);


export default brandRouter