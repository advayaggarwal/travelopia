const express = require("express");
const path = require("path");
const ejs = require("ejs");
require("./db/conn");
const Trip = require("./models/trips");

const app = express();

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/index.html"));
});

app.get("/trips", async (req, res) => {
  try {
    const trips = await Trip.find({});
    res.render("trips", {
      trips: trips,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post("/trips", async (req, res) => {
  try {
    console.log(req.body);
    const trip = new Trip(req.body);
    const createdTrip = await trip.save();
    res.status(201);
    res.redirect("/trips");
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
