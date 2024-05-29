import { config } from "dotenv";
config();
//Puerto de app
export const PORT = process.env.PORT
//BD Mong
export const DB_HOST = process.env.DB_HOST;
export const DB_DATABASE = process.env.DB_ATABASE;
export const DB_PORT = process.env.DB_PORT;
export const URL = process.env.URL;
//JWT   
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRES = process.env.JWT_EXPIRES;