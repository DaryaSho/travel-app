import { Router } from 'express';
import { check } from 'express-validator';
import AuthController from '../controllers/authController';

const authRouter: Router = Router();

authRouter.post(
  '/register',
  [
    check('email', 'Incorrect email!').isEmail(),
    check('password', 'Min password length is 6 symbols!').isLength({ min: 6 })
  ],
  AuthController.register
);

authRouter.post(
  '/login',
  [
    check('email', 'Incorrect email!').normalizeEmail().isEmail(),
    check('password', 'Enter password!').exists()
  ],
  AuthController.login
);

export default authRouter;
