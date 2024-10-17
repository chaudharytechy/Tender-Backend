import express from "express";
import cors from "cors"; // To handle CORS
import connect from "./db/connectDb.js"; // Import DB connection logic
import router from "./route/web.js"; // Import your routes
import fileUpload from "express-fileupload";
const PORT = 3500;
const app = express();

// Connect to the database
connect();

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(fileUpload({
    useTempFiles : true,
}));
// Enable CORS to allow requests from different origins (e.g., frontend)
app.use(cors());

// Route handling
app.use('/', router);

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error", error: err.message });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
