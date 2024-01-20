import express from "express";
import userRouter from "./routes/user.route.js";
import authrouter from "./routes/auth.route.js";



const app =express();



app.use(express.json());//To parse the incoming JSON data -without this built in middleware req.body will be empty




app.use("/api/user",userRouter);//Mounting a Router - whenevder localhost:3000/api/user/... ,call comes it will navigate to userRouter.

app.use("/api/auth" , authrouter);//when API request with this adress comes ,routes to Authrouter

app.use ((err,req,res,next) => {
    const statusCode =err.statusCode || 500;
    const message = err.message  || 'internal server error';

    
    return res.status(statusCode).send(
        {
            sucess :false,
            message,
            statusCode

        }
    );
});//it is an middlware to handle the system error , it will return the status code , with an js object --with threee values.


app.listen (3000 , ()=>
{
console.log("server running on port 3000")
})