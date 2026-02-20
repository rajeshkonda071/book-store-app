import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Import your routes
import userRoute from "./Routes/userRoute.js";
import bookRoute from "./Routes/bookRoute.js";

dotenv.config();
const app = express();

// Middleware - Order matters here!
app.use(cors()); // Allows your React frontend to communicate with this server
app.use(express.json()); // Allows the server to parse JSON data from your Signup form

// Basic Route for testing
app.get('/', (req, res) => res.send("Bookstore Server is Live!"));

// Defining Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Connect to MongoDB
const port = process.env.PORT || 4000;
const URI = process.env.MONGO_URI;

mongoose.connect(URI)
    .then(() => {
        console.log("Connected to MongoDB");
        // Start server only after DB connection is successful
        app.listen(port, () => console.log(`Server running on port : ${port}`));
    })
    .catch((err) => console.log("MongoDB Connection Error: ", err));