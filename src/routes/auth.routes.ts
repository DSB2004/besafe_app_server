import { Router } from "express";

import LOGIN from "../controller/auth/login.controller";
import REGISTER from "../controller/auth/register.controller";

const auth_router = Router();


auth_router.post('/login', LOGIN);
auth_router.post('/register', REGISTER);



export default auth_router;