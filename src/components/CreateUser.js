import axios from "axios";
import React, { useRef, useState } from "react";

function CreateUser() {
  const [username, setUsername] = useState("");

  let inputRef = useRef();

  const handleChange = () => {
    let inputValue = inputRef.current.value;
    setUsername(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let user = {
      username: username,
    };

    fetch("http://localhost:5000/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => console.log(res.json()))
      .catch((err) => console.log("Error on client side: " + err));

    window.location = "/create";
  };

  return (
    <div className="container">
      <h1>Create New User</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="user">Username: </label>
          <input
            value={username}
            onChange={handleChange}
            ref={inputRef}
            type="text"
            required
            placeholder="Username"
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateUser;
