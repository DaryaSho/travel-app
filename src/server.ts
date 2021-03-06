import express, { Application } from 'express';
import path from 'path';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import countriesRouter from './routes/countries.routes';
import authRouter from './routes/auth.routes';
import dotenv from 'dotenv';
dotenv.config();

const dbUrl = process.env.MONGODB_URL;
const port = process.env.PORT;

export default class AppServer {
  server: Application;

  constructor () {
    this.server = express();
  }

  async start () {
    this.initMiddlewares();
    this.initRoutes();
    await this.initDatabase();
    this.startListening();
  }

  initMiddlewares (): void {
    this.server.use(express.json());
    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({ extended: true }));
    this.server.use(cors());
    if (process.env.NODE_ENV === 'production') {
      this.server.use(
        '/',
        express.static(path.join(__dirname, '../', 'client', 'dist'))
      );
    }
  }

  initRoutes ():void {
    this.server.use('/api/countries', countriesRouter);
    this.server.use('/api/auth', authRouter);
  }

  async initDatabase (): Promise<void> {
    await mongoose
      .connect(String(dbUrl), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      })
      .then(() => {
        console.log('db connected successful');
      })
      .catch((err) => {
        console.log(err);
        process.exit(1);
      });
  }

  startListening (): void {
    this.server.listen(port, () => {
      console.log('Server started on port', port);
    });
  }
}
