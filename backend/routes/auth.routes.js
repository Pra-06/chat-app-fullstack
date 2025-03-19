/* import express from 'express';


import { signup } from '../controllers/auth.controller.js';
import { login } from '../controllers/auth.controller.js';
import { logout } from '../controllers/auth.controller.js';
const router = express.Router();



router.post("/signup",signup);


router.get("/login",login);

router.post("/logout",logout);




export default router; */
import express from 'express';
import { signup, login, logout } from '../controllers/auth.controller.js'; // ✅ Clean import

const router = express.Router();

router.post("/signup", signup);  // ✅ Signup (POST)
router.post("/login", login);    // ✅ Login (POST instead of GET)
router.post("/logout", logout);  // ✅ Logout (POST)

export default router;
