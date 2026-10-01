import { Router,type Request, type Response  } from "express";
import authRouter from "../modules/auth/AuthRoute";
import userRouter from "../modules/user/UserRouter";
import categoryRouter from "../modules/category/CategoryRouter";
import brandRouter from "../modules/brand/BrandRouter";
import chatRouter from "../modules/chat/ChatRouter";

const router = Router();

// Router // /api/v1/
// endpoint -> method(get, post, put, patch, delete), url , payload, headers (cookie, authorization, query, params)
router.get("/", (request: Request, response: Response) => {
  // request
  //
  response.json({
    data: "",
    message: "Health Ok",
    meta: null,
  });
});

router.use('/auth', authRouter)   // global 
router.use("/user", userRouter);
router.use("/category", categoryRouter);
router.use("/brand", brandRouter)
router.use("/chat", chatRouter)

export default router