import express from "express"
import  pg from 'pg';


const db = new pg.Client (
    {
        user : "postgres",
        host:"localhost",
        database:"RealEstate",
        password:"mydbpost",
        port:5432,

    }
)


db.connect()
  .then(() => {
    console.log("Connected to DB");



    //here we can make DB connection using client and release the connection when our requiement is done.
  })
  .catch((err) => {
    console.error(err);
  });

const app =express()

app.listen (3000 , ()=>
{
console.log("server running on port 3000")
})