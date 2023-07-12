/**
 * * Se usa TypeScripts para saber los tipos de datos 
 * ? DTO -> DATA TRANSFER OBJECT 
 * * Es un patron de diseño  
 */

// ----------------------------------------------------------------
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import {user} from './controller/user.js'; //se importa la transpilada
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const appExpress = express();

appExpress.use(express.json());
appExpress.get('/', (req, res) => {
    try {
        let data = plainToClass(user, req.body);
        console.log(data);
        res.status(200).send("ENTRASTE PELOTUDO");
    } catch (error) {
        res.send(error)
    }
});

const config = JSON.parse(process.env.MY_SERVER);
appExpress.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
})

