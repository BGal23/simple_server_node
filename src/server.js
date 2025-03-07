const express = require("express");
const dotenv = require("dotenv");
require("colors");
const mongoose = require("mongoose");
const usersRouter = require("./routes/users");
const projectRouter = require("./routes/project");

dotenv.config();

const app = express();
app.use(express.json());

const uriDb = process.env.MONGO_URI;
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded());
app.use("/users", usersRouter);
app.use("/project", projectRouter);

async function connectDB() {
  try {
    await mongoose.connect(uriDb);
    console.log("Database connection successful".green);
  } catch (error) {
    console.error("Database connection failed".red, error.message.red);
    process.exit(1);
  }
}

connectDB();

app.listen(PORT, function () {
  console.log(`Server is running on the port ${PORT}`.green);
});
