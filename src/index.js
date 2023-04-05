import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import socket from './socket/index.js';
dotenv.config();
const port = process.env.PORT || 4000;
const app = express();
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Welcome to server 👋👋',
    });
});
const server = app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
socket(server);
