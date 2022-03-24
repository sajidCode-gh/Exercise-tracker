import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";

function ExerciseForm({ title }) {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());

  let descriptionRef = useRef();
  let durationRef = useRef();
  let usernameRef = useRef();

  const handleDescription = () => {
    setDescription(descriptionRef.current.value);
  };

  const handleUsername = () => {
    setUsername(usernameRef.current.value);
  };

  const handleDuration = () => {
    setDuration(durationRef.current.value);
  };

  const handleDate = (date) => {
    setDate(date);
  };

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      if (res.data.length > 0) {
        setUsers(res.data);
        setUsername(res.data[0].username);
      }
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username,
      description,
      duration,
      date,
    };

    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then((res) => console.log(res + " is posted successfully"))
      .catch((err) => console(err + " happped and not posted"));

    window.location = "/";
  };

  return (
    <div className="container">
      <h3>{title}</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="text">Username</label>
          <select
            name="select"
            id="select"
            required
            ref={usernameRef}
            value={username}
            onChange={handleUsername}
          >
            {users.map((user) => (
              <option key={user.id} value={user.username}>
                {user.username}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="text">Description</label>
          <input
            ref={descriptionRef}
            type="text"
            onChange={handleDescription}
            required
            value={description}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Duration (in minutes)</label>
          <input
            ref={durationRef}
            type="text"
            onChange={handleDuration}
            required
            value={duration}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Date: </label>
          <DatePicker selected={date} onChange={handleDate} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ExerciseForm;
