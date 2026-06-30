import express from "express";
import dotenv from "dotenv";
import connectDB from "./lib/db.js";
// Fix the import to match your actual filename ✅
import movieRoutes from "./routes/movies.jroute.js";

dotenv.config();

const app = express();
const PORT = 6969;

app.use(express.json());

// connect db
connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.use("/movies", movieRoutes);

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});