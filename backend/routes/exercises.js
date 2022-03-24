const router = require("express").Router();
const exercise = require("../models/exercise.model");

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise
    .save()
    .then(() => res.json("Exercise is added!"))
    .catch((err) => console.log(err + " is happend"));
});

router.route("/").get((req, res) => {
  exercise
    .find()
    .then((exercises) => res.json(exercises))
    .catch((err) => console.log(err + " happend while responding exercises"));
});

router.route("/:id").delete((req, res) => {
  exercise
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("exercise deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/edit/:id").get((req, res) => {
  exercise.findById(req.params.id).then((exercise) => {
    exercise.username = req.body.username;
    exercise.description = req.body.description;
    exercise.duration = Number(req.body.duration);
    exercise.date = Date.parse(req.body.date);
  });

  exercise
    .save()
    .then(() => console.log("exercise updated"))
    .catch((err) => console.log("exercise did not get updated"));
});

module.exports = router;
