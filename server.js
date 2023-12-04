const express = require("express");
const cors = require("cors");
const db = require("./app/models");

const app = express();

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use(express.json());

// con database
const mongooseConfig = {};

const connectToDatabase = async () => {
  try {
    await db.mongoose.connect(db.url, mongooseConfig);
    console.log("Database connected");
  } catch (err) {
    console.error(`Connection failed: ${err.message}`);
    process.exit(1);
  }
};

connectToDatabase();

app.get("/", (req, res) => {
  res.json({ message: "GOOD MORNING!" });
});

require("./app/routes/customer.routes")(app);

const PORT = process.env.PORT || 8089;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
