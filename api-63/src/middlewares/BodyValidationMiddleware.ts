import { type Request, type Response, type NextFunction } from "express"
import z from "zod"

const bodyValidator = (schema: z.ZodObject) => {
  
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // logic behind data validation
      const data = req.body; 
      if(!data) {
        throw {code: 422, message: "Data not set"}
      }

      const response = await schema.parseAsync(data)
      req.body = response     // valid data passed to body 

      // pass 
      next()

    } catch(exception) {
      if(exception instanceof z.ZodError) {
        let errBag: Record<string,string> = {}

        exception.issues.map((err) => {
          errBag[err.path.join(".")] = err.message
        })

        next({code: 400, detail: errBag, messsage: "Validation Failed"})

      } else {
        next(exception)
      }
    }
  }
}

export default bodyValidator