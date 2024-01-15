import express from "express"
import userRouter from "./routes/user.route.js"
import authrouter from "./routes/auth.route.js"
const app =express();

app.use(express.json());




app.use("/api/user",userRouter);

app.use("/api/auth" , authrouter);

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
});


app.listen (3000 , ()=>
{
console.log("server running on port 3000")
})