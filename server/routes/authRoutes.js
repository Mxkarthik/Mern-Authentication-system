import express from 'express'
import { login, register,logout} from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.post('/register' , register);
authRouter.post('/login' , login);
authRouter.post('/logout' , logout);

export default authRouter;