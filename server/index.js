/* eslint-disable no-undef */
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import clientRouter from './routes/client.js';
import menagementRouter from './routes/menagement.js';
import generalRouter from './routes/general.js';
import salesRouter from './routes/sales.js';

//  CONFIGURATIONS;

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ROUTES
app.use("/client", clientRouter);
app.use("/general", generalRouter);
app.use("/menagement", menagementRouter);
app.use("/sales", salesRouter);

// MONGOOSE SETUP

const PORT = process.env.PORT || 3001;
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(PORT, () => console.log(`Server listening on: ${PORT}`))
}).catch((error) => console.log(`${error} did not connect`));

// mongoose.set('strictQuery', true);