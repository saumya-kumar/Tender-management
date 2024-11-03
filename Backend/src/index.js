
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import passport from 'passport';
import { connect } from './config/database.js';
import apiroutes from './routes/index.js';
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiroutes);
app.use(passport.initialize());

app.listen(3000, async () => {
    console.log(`server started on port 3000`);
    await connect();
    console.log(`Mongo db connected`);
})


