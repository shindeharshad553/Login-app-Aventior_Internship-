// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Login({ setIsLogedInOrNot }) {
//   // Using useNavigate hook
//   const navigate = useNavigate();

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // console.log("Button clicked");
//     // console.log("Username: ", username);
//     // console.log("password: ",password);
//     const data = {
//       username: username,
//       password: password,
//     };
//     setUserName("");
//     setPassword("");
//     setIsLogedInOrNot(true); // User is now logged in

//     // calling the backend login API
//     axios
//       .post("http://localhost:8000/login", data)
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log("Error while logging in", error.response.data.detail);
//       });

//     navigate("/home"); //navigate to home page after login
//   };

//   // creating two states for accessing username and password
//   const [username, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm space-y-6"
//       >
//         <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>

//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUserName(e.target.value)}
//           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
//           required
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// // Styles for the login form
// // const styles = {
// //   container: {
// //     display: "flex",
// //     height: "100vh",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     background: "#f4f4f4",
// //   },
// //   button: {
// //     padding: 10,
// //     fontSize: 16,
// //     backgroundColor: "#007bff",
// //     color: "#fff",
// //     borderRadius: 4,
// //     cursor: "pointer",
// //   },
// //   form: {
// //     background: "#fff",
// //     padding: 20,
// //     borderRadius: 8,
// //     boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
// //     display: "flex",
// //     flexDirection: "column",
// //     width: "300px",
// //   },
// //   input: {
// //     padding: 10,
// //     marginBottom: 10,
// //     borderRadius: 4,
// //     border: "1px solid #ccc",
// //     fontSize: 16,
// //     outline: "none",
// //   },
// //   h2: {
// //     textAlign: "center",
// //   },
// // };

import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Login({ setIsLogedInOrNot }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);

    const data = {
      username: username,
      password: password,
    };
    // calling the backend login API
    axios
      .post("http://localhost:8000/login", data)
      .then((response) => {
        console.log(
          `response from the backend ${JSON.stringify(response.data)})`
        );
      })
      .catch((error) => {
        console.log(error.response.data.detail);
      });
    navigate("/home"); // Navigate to home page after login
    setIsLogedInOrNot(true); // Set login state to true
  };

  return (
    <div className="flex h-screen font-sans">
      {/* Left side - Welcome Section */}
      <div
        className="hidden md:flex w-1/2 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 p-10 text-white flex flex-col justify-center h-full">
          <h1 className="text-5xl font-bold mb-6">
            Welcome
            <br />
            Back
          </h1>
          {/* <p className="mb-6 text-lg max-w-md">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p> */}
          <div className="flex space-x-4 text-white text-xl">
            <i className="fab fa-facebook cursor-pointer hover:text-blue-400"></i>
            <i className="fab fa-twitter cursor-pointer hover:text-blue-300"></i>
            <i className="fab fa-instagram cursor-pointer hover:text-pink-400"></i>
            <i className="fab fa-youtube cursor-pointer hover:text-red-500"></i>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex w-full md:w-1/2 justify-center items-center bg-white p-10">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">Sign in</h2>

          <div>
            <label className="block text-sm mb-1 text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-600">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Lost your password?
            </a>
          </div> */}

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-200"
          >
            Sign in now
          </button>

          <p className="text-xs text-gray-500 text-center">
            By clicking on “Sign in now” you agree to our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Service
            </a>{" "}
            |{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
