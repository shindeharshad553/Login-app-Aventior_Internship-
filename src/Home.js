import "./Home.css";
import React, { useEffect, useState } from "react";
import { replace, useNavigate, Navigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    console.log(username);
    const token = localStorage.getItem("token");
    if (!token) {
      // navigate("/", { replace: true });
      return <Navigate to="/" replace />;
    } else {
      console.log("Token found:", token);
      setUsername(storedUsername);
    }
  }, [navigate, username]);

  return (
    // <nav classNameName="bg-blue-600 p-4 shadow-md">
    <>
      <div className="navbar">
        <p>Dashboard</p>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contacts">Contact</a>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <div className="main-content-heading">
          <h1>Welcome to the dashboard {username}</h1>
        </div>
        <div className="main-content-description">
          <p>
            You are loged in successfuly and in the main content of home page
          </p>
        </div>
      </div>
    </>
  );
}
