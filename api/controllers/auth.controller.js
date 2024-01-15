import { pool } from "../db/index.js"
import bcrypt from "bcrypt"
import { errorHandler } from "../utils/error.js";




export const signup = async (req ,res,next) =>
{
    const {username , password ,email} = req.body
    if (!username || !email) {
      next(errorHandler(400 ,"All coloumns must filled"));
      }

      else{
  
    const hashedpassword = bcrypt.hashSync(password ,10);
    try {
        await pool.query('INSERT INTO Users (username, email, password) VALUES ($1, $2, $3)', [username, email, hashedpassword]);
        res.status(200).send({ message: 'User registered successfully' });
    }catch (err)
    {
      next (err)
    }
  }

 
};