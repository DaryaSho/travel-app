import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import { IUser, User } from '../models/User';

const jwtSecret: string = process.env.jwtSecret!;

class AuthController {
  async register (req:Request, res:Response): Promise<void> {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.status(400).json({
          errors: errors.array(),
          message: 'Incorrect register data!'
        });

        return;
      }

      const { email, password, name } = req.body;

      const checkUser: IUser | null = await User.findOne({ email });

      if (checkUser) {
        res.status(400).json({ message: 'User already presents' });
        return;
      }

      const hashedPassword = await bcryptjs.hash(password, 12);
      const user = new User({
        email, password: hashedPassword, name
      });

      await user.save();

      res.status(201).json(user);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async login (req:Request, res:Response):Promise<void> {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.status(400).json({
          errors: errors.array(),
          message: 'Incorrect login data!'
        });

        return;
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        res.status(400).json({ message: 'User not found!' });
        return;
      }

      const isPasswordMatch = await bcryptjs.compare(password, user.password);

      if (!isPasswordMatch) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }

      const token = jwt.sign(
        { userId: user.id },
        jwtSecret,
        { expiresIn: '1h' }
      );

      res.json({ token, userId: user.id });
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default new AuthController();
