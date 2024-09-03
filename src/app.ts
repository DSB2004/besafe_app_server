import express from 'express';
import cors from 'cors';
import auth_router from './routes/auth.routes';



const app = express()
app.use(express.urlencoded())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/auth", auth_router);

export default app;