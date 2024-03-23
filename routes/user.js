const { Router } = require("express");
const User = require("../models/user");
const {
  createTokenForUser,
  validateToken,
} = require("../services/authentication");
const router = Router();

router.get("/signin", (req, res) => {
  res.send("this is login page");
});

router.get("/signup", (req, res) => {
  res.send("this is sign up page");
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Find the user by email (without password check)
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send("Invalid credentials"); // User not found
    }

    // 2. Assuming a simple password comparison (NOT RECOMMENDED)
    if (user.password !== password) {
      return res.status(401).send("Invalid credentials");
    }

    const token = createTokenForUser(user); // Replace with your token creation function

    if (!validateToken(token)) {
      return res.status(401).send("Invalid token");
    }
    // 4. Send response with token
    res.json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error"); // Handle errors gracefully
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("token").send("user logged out").redirect("/");
});

// const { username , email, password } = req.body;
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      // Check if any of the required fields are missing
      return res.status(400).send("All fields are required");
    }
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("Email already registered");
    }

    // Create the user
    await User.create({ username, email, password });

    return res.send("User created successfully").redirect('/signin');
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).send("Internal Server Error");
  }
});

router.get("/blogs", (req, res) => {
  res.send("this is the blog page");
});

module.exports = router;
