const express = require('express');
const { connectToMongoDB } = require("./connect");
const cookieParser = require('cookie-parser');
const registerRoute = require("./routes/register.js");
const userRoute = require("./routes/user");
const { checkForAuthenticationCookie } = require("./middlewares/authentication");

var cors = require('cors')
const app = express();

// Middleware for parsing form data and cookies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    credentials: true // Allow credentials (cookies, in this case) to be sent with the request
  }));

// Middleware for authentication check
app.use(checkForAuthenticationCookie("token"));

// Connect to MongoDB
connectToMongoDB("mongodb://127.0.0.1:27017/empower-all")
  .then(() => console.log("MongoDB connected"))
  .catch(error => console.error("MongoDB connection error:", error));

// Route handlers
app.use("/user", userRoute);
app.use("/register", registerRoute);

// Generic route handler for the root path
app.get("/", (req, res) => {
    res.send("this will be the starting page");
});

// Error handling middleware    
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

// Start the server
const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
