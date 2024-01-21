import express from "express"
import { OAuth, signin, signup } from "../controllers/auth.controller.js"; //functiional logic are wrote on different file

const router = express.Router();//creating the router instance of -- whenever an request with localhost:3000/api/auth/signin comes -- the app will redirect to this page.

router.post('/signup', signup) //POST reuqest is coming -- calls signup function 

router.post('/signin', signin)

router.post('/google' , OAuth)


export default router //this router has two methods attached with that