const express = require("express");
require("./db/conn");
const Trip = require("./models/trips");

const app = express();

// app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.post("/trips", async (req, res) => {
  try {
    console.log(req.body);
    const trip = new Trip(req.body);
    const createdTrip = await trip.save();
    res.status(201).send("<h1>Trip Created</h1>");
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
