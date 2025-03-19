import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

// ✅ SIGNUP CONTROLLER
export const signup = async (req, res) => {
    try {
        console.log("Incoming request body:", req.body); // ✅ Debugging

        let { fullName, username, password, confirmPassword, gender } = req.body;

        if (!req.body || typeof req.body !== "object") {
            return res.status(400).json({ error: "Invalid request format" });
        }

        // ✅ Validate Required Fields
        if (!fullName || !username || !password || !confirmPassword || !gender) {
            return res.status(400).json({ error: "All fields are required" });
        }

        username = username.toLowerCase().trim();

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }

        // ✅ Check if User Already Exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "Username is already taken" });
        }

        // ✅ Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // ✅ Generate Profile Picture
        const profilePic = `https://avatar.iran.liara.run/public/${gender === "male" ? "boy" : "girl"}?username=${username}`;

        // ✅ Create New User
        const newUser = new User({ fullName, username, password: hashedPassword, gender, profilePic });
        await newUser.save();

        // ✅ Generate Token & Set Cookie
        generateTokenAndSetCookie(newUser._id, res);

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic,
        });

    } catch (error) {
        console.error("❌ Error in signup controller:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// ✅ LOGIN CONTROLLER
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // ✅ Check if user exists first
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: "Incorrect username or password" });
        }

        // ✅ Securely Compare Passwords (Prevents Timing Attacks)
        const hashedDummyPassword = await bcrypt.hash("dummy", 10);
        const isPasswordCorrect = user ? await bcrypt.compare(password, user.password) : await bcrypt.compare(password, hashedDummyPassword);

        if (!isPasswordCorrect) {
            return res.status(400).json({ error: "Incorrect username or password" });
        }

        // ✅ Generate Token & Set Cookie
        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });

    } catch (error) {
        console.error("❌ Error in login controller:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// ✅ LOGOUT CONTROLLER
export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            expires: new Date(0),
        });

        res.status(200).json({ message: "Logged out successfully" });

    } catch (error) {
        console.error("❌ Error in logout controller:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
