import express from "express";
import { createUser, getAllUsers, getUserById, updateUser, deleteUser} from "../controller/userController.js"
import validateUser from "../middleware/schemaValidation.js";

const router= express.Router();

router.post("/user", validateUser, createUser)
router.get("/user",getAllUsers)
router.get("/user/:id",getUserById)
router.put("/user/:id",updateUser)
router.delete("/user/:id",deleteUser)

export default router;