const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const { User, validate } = require("../../models/users");

mongoose.connect(
  "mongodb+srv://vahanmkrtumyan:Vahan1990@cluster0-93irs.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.set("useFindAndModify", false);

router.get("/", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    country: req.body.country,
    city: req.body.city,
    address: req.body.address,
    address2: req.body.address2,
    legal: req.body.legal,
    packagee: req.body.packagee
  });
  await user.save();

  res.send(user);
});

router.put("/:id", async (req, res) => {
  console.log(req.body);

  const { error } = validate({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    country: req.body.country,
    city: req.body.city,
    address: req.body.address,
    legal: req.body.legal,
    packagee: req.body.packagee.target
      ? req.body.packagee.target.value
      : req.body.packagee
  });
  if (error) return res.status(400).send(error.details[0].message);

  let add2 = req.body.address2 ? req.body.address2 : undefined;

  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      country: req.body.country,
      city: req.body.city,
      address: req.body.address,
      address2: add2,
      legal: req.body.legal,
      packagee: req.body.packagee.target
        ? req.body.packagee.target.value
        : req.body.packagee
    },
    { new: true }
  );

  if (!user)
    return res.status(404).send("The user with the given ID was not found.");

  res.send(user);
});

router.delete("/", async (req, res) => {
  const user = await User.findByIdAndRemove(req.body.id);
  if (!user)
    return res.status(404).send("The user with the given ID was not found.");
  res.send(user);
});

module.exports = router;
