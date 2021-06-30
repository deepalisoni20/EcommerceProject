import express from 'express';
const app = express();
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';


// components
import Connection from './database-connection/db.js'
import DefaultData from './default.js'
import Routes from './routes/routes.js';
dotenv.config()


const port = 8000;
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/',Routes);

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Role');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
  })



const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWARD;

Connection(username, password);
app.listen(port,() =>console.log(`Server is running on Port ${port}`));

// Default data to database
DefaultData();