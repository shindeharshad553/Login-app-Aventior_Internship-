import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login({ setIsLogedInOrNot }) {
  // Using useNavigate hook
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Button clicked");
    // console.log("Username: ", username);
    // console.log("password: ",password);
    const data = {
      username: username,
      password: password,
    };
    setUserName("");
    setPassword("");
    setIsLogedInOrNot(true); // User is now logged in

    // calling the backend login API
    axios
      .post("http://localhost:8000/login", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error while logging in", error.response.data.detail);
      });

    navigate("/home"); //navigate to home page after login
  };

  // creating two states for accessing username and password
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.h2}>Login Form</h2>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          login
        </button>
      </form>
    </div>
  );
}

// Styles for the login form
const styles = {
  container: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f4f4",
  },
  button: {
    padding: 10,
    fontSize: 16,
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: 4,
    cursor: "pointer",
  },
  form: {
    background: "#fff",
    padding: 20,
    borderRadius: 8,
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    width: "300px",
  },
  input: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
    border: "1px solid #ccc",
    fontSize: 16,
    outline: "none",
  },
  h2: {
    textAlign: "center",
  },
};
