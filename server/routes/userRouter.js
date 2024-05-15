import userController from "../controllers/userController.js";
import {Router} from "express";

const router = new Router();

router.post('/registration', userController.registration)

export default router
