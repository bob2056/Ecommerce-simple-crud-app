// pnpm i express
// pnpm i --save-dev @types/express
import express, {type Request, type Response, type NextFunction} from "express";
import router from "./router/router";
import path from "path";
import ErrorHandlingMiddleware from "./middlewares/ErrorHandlingMiddleware";
import cors from "cors"
// db load
import "./config/mongodbConfig"
import helmet from "helmet";
import rateLimit from "express-rate-limit";

const app = express()

// cors, helmet, rate-limiter
app.use(
  cors({
    // origin: "http://localhost:3000",
    origin: "*",
  }),
);
// XSS prevention
app.use(helmet())
// rate limit(throttle)
const limit = rateLimit({
  windowMs: 5*60*1000,
  limit: 150
})
app.use(limit)

// body parsers
// for json
app.use(express.json({
  limit: "3mb"
}));
// urlencoded 
app.use(express.urlencoded({
  limit: "3mb"
}))

// express static middlewares
// app.use("/images", express.static("./public/uploads/"));
app.use("/images", express.static(path.resolve("./public/uploads/")));

// router mount to express application 
app.use("/api/v1", router)


// login system 
// app.use("/api/v2", newRoute)

// 404 route  
app.use((req: Request, res: Response, next: NextFunction) => {
  // Error()
  // next(new CustomError({message: "Route Not found", code: 404, details: null}))
  next({code: 404, message: "Route not found"})
})


// error handling midlleware
app.use(ErrorHandlingMiddleware)



export default app