import express from "express"
import router from "./Routes/user.route.js";
const app =express()

app.use("/api/user",router);

app.listen (3000 , ()=>
{
console.log("server running on port 3000")
})