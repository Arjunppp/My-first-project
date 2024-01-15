import { pool } from "../db/index.js"
import bcrypt from "bcrypt"
import { errorHandler } from "../utils/error.js";




export const signup = async (req ,res,next) =>
{
    const {username , password ,email} = req.body
    const hashedpassword = bcrypt.hashSync(password ,10);
    try {
        await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [username, email, hashedpassword]);
        res.status(200).send('User Registered sucessfully');
    }catch (err)
    {
      next (err)
    }
    

 
};