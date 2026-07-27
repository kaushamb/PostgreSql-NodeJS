import express from "express";

const router= express.Router();

router.get("/user",getAllUsers)
router.get("/user/1:id",getUserByIdUsers)
router.post("/user/:id",createUser)
router.put("/user/:id",updateUser)
router.delete("/user/:id",deleteUser)

export default router;