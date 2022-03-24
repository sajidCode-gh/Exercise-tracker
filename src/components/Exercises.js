import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Exercises() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises")
      .then((res) => setExercises(res.data))
      .catch((err) => console.log(err + " happend while gettin exercises"));
  }, []);

  const deleteExercise = (id) => {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then(() => console.log("exercise is deleted"))
      .catch((err) => console.log(err + " deleting exercise failed"));

    setExercises(exercises.filter((exercise) => exercise._id !== id));
    console.log(exercises);
  };

  console.log(exercises);

  return (
    <div className="container">
      <h3>All Exercises</h3>

      <table>
        <thead>
          <tr>
            <th>user</th>
            <th>description</th>
            <th>duration</th>
            <th>date</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise) => (
            <tr key={exercise._id}>
              <td>{exercise.username}</td>
              <td>{exercise.description}</td>
              <td>{exercise.duration}</td>
              <td>{exercise.date}</td>
              <td>
                <Link to={"/edit/" + exercise._id}>Edit</Link>
                <button onClick={() => deleteExercise(exercise._id)}>
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Exercises;
