import { Request, Response, Router } from "express";
import { createUser, getUserById, getUsers } from "../handlers/users.";

const router = Router();
//  Route to get all users with the handler function "getUsers "
router.get("/", getUsers);

// Route to get a user by id
router.get("/:id",getUserById)

// Creating a new user

router.post("/",createUser);
export default router;