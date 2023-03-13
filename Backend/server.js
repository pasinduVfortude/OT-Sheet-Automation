const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Pool } = require("pg");
const authRoutes = require("./routes/authRoutes");


const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// Routes
app.use("/auth", authRoutes);

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to OT-Sheet-Automation application." });
});

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).send("Page not found");
});

// Handle 500 errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong");
});

// Connect to the database and start the server
const PORT = process.env.PORT || 8080;
pool.connect((err, client, done) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  }
});