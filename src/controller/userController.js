import { createUserService, getAllUsersService, getUserByIdService, updateUserService, deleteUserService } from "../models/userModel.js";

const handleResponse=(res, status, message, data=null)=>{
    res.status(status).json({
        status,
        message,
        data
    })
};

export const createUser= async(req,res,next)=>{
    const { name, email} = req.body;
    console.log(req);
  try{
   const newUser= await createUserService(name,email);
   handleResponse(res,200,"User created successfully",newUser);
 }catch(err){
   next(err)
 }
}

export const getAllUsers= async (req,res,next)=>{
  try{
   const newUser= await getAllUsersService();
   handleResponse(res,200,"User fetched successfully",newUser);
 }catch(err){
   next(err)
 }
}

export const getUserById= async (req,res,next)=>{
  try{
   const newUser= await getUserByIdService(req.params.id);
   if(!newUser){
    handleResponse(res,404,"User not found");
   }
   handleResponse(res,200,"User fetched successfully",newUser);
 }catch(err){
   next(err)
 }
}

export const updateUser= async (req,res,next)=>{
    const { name, email} = req.body;
  try{
   const updatedUser= await updateUserService(req.params.id,name, email);
   if(!updatedUser){
    handleResponse(res,404,"User not found");
   }
   handleResponse(res,200,"User updated successfully",updatedUser);
 }catch(err){
   next(err)
 }
}

export const deleteUser= async (req,res,next)=>{
  try{
   const deletedUser= await deleteUserService(req.params.id);
   if(!deletedUser){
    handleResponse(res,404,"User not found");
   }
   handleResponse(res,200,"User deleted successfully",deletedUser);
 }catch(err){
   next(err)
 }
}
