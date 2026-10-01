import { Router } from "express";
import Auth from "../../middlewares/AuthMiddleware";
import CategoryController from "./CategoryController";
import uploader from "../../middlewares/UploaderMiddleware";
import bodyValidator from "../../middlewares/BodyValidationMiddleware";
import { CategoryCreateDTO } from "./CategoryDto";

const categoryRouter = Router()
const catCtrl = new CategoryController()

// category 


// only allowed to loggedin user with permission
categoryRouter.post('/', Auth(['admin']), uploader('/category').single('image'), bodyValidator(CategoryCreateDTO), catCtrl.createCategory);

categoryRouter.get("/", Auth(['admin','seller']), catCtrl.listAllCategory);
categoryRouter.get("/:slug", Auth(), catCtrl.getCategoryDetail);

categoryRouter.put("/:slug", Auth(['admin']), uploader('/category').single('image'), bodyValidator(CategoryCreateDTO), catCtrl.updateCategory);

categoryRouter.delete("/:slug", Auth(['admin']), catCtrl.deleteCategory);


export default categoryRouter