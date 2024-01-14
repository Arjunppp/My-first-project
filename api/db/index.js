import pg from 'pg'
import dotenv from 'dotenv';
 
dotenv.config();

export const pool = new pg.Pool (
    {
        user : process.env.DB_USER,
        host:process.env.DB_HOST,
        database:process.env.DB_DATABASE,
        password:process.env.DB_PASS,
        port:process.env.DB_PORT,

    }
)


 
 
