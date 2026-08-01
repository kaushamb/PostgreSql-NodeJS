import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(3, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
});
//   age: z.number().min(18).optional(), // optional field
//   role: z.enum(["admin", "user"]).default("user"), // enum with default

const validateUserThroughZod= async ( req, res, next)=>{
    const {error}= userSchema.parse(req.body);
    if(error){
        return res.status(400).json({
            status: 400,
            message: error.flatten().fieldErrors
        })
    }
    next();
}

export default validateUserThroughZod;