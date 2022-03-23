const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const dbURI =
  "mongodb+srv://user:user123@cluster0.nf61c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(dbURI);
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connction established");
});

// const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

// app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, "localhost", () => {
  console.log(`listening at port ${port}`);
});
