import { pool } from "../db/index.js"
import bcrypt from "bcrypt"
import { errorHandler } from "../utils/error.js";
import Jwt  from "jsonwebtoken";
import dotenv from 'dotenv';
 
dotenv.config();



//next is an middleware created to handle the error 
//we are also using an function ,errorHandler to deal the error

export const signup = async (req ,res,next) =>
{
    const {username , password ,email} = req.body //we use the js object destructuring to get the credentials 
    if (!username || !email) {
      next(errorHandler(400 ,"All coloumns must filled")); //checks whether the entries are empty or not
      }

      else{
  
    const hashedpassword = bcrypt.hashSync(password ,10);
    try {
        await pool.query('INSERT INTO Users (username, email, password) VALUES ($1, $2, $3)', [username, email, hashedpassword]);
        res.status(200).send({ message: 'User registered successfully' });
    }catch (err)
    {
      next (err) //calling the middleware
    }
  }

 
};

export const signin = async (req ,res,next) =>
{

  const { password ,email} = req.body
  if (!password || !email) {
    next(errorHandler(400 ,"All coloumns must filled"));
    }
  else{
    try{
     const validuser =   (await pool.query("select * from users where email=$1",[email])).rows
       if (validuser.length !==0) //if email exsist 
       {
         const pass = validuser[0].password; //we retrieving the hashed password and comapring
         const validpassword = bcrypt.compareSync(password , pass)
        if(!validpassword)  //if password doesnot match -- we calling errorhandler function to throw custom made error
        {
          next(errorHandler(400 ,'Wrong Credentials'))
        }
        else{  //if password exist we need to create an session and token --- by sending back cookie
          const token = Jwt.sign({id :validuser[0].email}, process.env.JWT_secret) // Here id can be any unique value , in mongo db iself create an id , we here considering email as unique
          const [{ password, ...rest }] = validuser; // Destructure password and the rest of the properties // along with cookie otherinfomation also send back , but need to renmove password from that 
          res.cookie('accesstoken', token, { httpOnly: true }).status(200).json(rest); //this rest is send as a response

        }
       }
       else{ //if the user doesnot exist
        
         return next(errorHandler(400 ,'User Not found'))
       }
       
      }catch(error)
          {
           next(error)
          }  
  }
 };