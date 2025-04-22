// src/pages/Login.jsx
import React, { useState } from "react";
import api from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import 'animate.css'; // Make sure animate.css is installed

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await api.post("/auth/login", form);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
      window.location.reload();
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  }

  return (
    <div className="mt-15 p-6 max-w-md mx-auto bg-white rounded-xl shadow-2xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn">
      <h2 className="text-3xl font-semibold text-center mb-8 text-blue-600">Login</h2>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 animate__animated animate__fadeIn animate__delay-1s">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            required
          />
        </div>
        <div className="relative">
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            required
          />
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md w-full text-xl font-semibold hover:bg-blue-700 transition-all duration-300 cursor-pointer">
          Login
        </button>
      </form>
      <p className="mt-6 text-center text-gray-600">
        Don’t have an account?{" "}
        <Link to="/auth/register" className="text-blue-700 font-medium hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;



// // src/pages/Login.jsx
// import React, { useState } from "react";
// import api from "../services/api";
// import { useNavigate, Link } from "react-router-dom";

// function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   function handleChange(e) {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     try {
//       const { data } = await api.post("/auth/login", form);
//       localStorage.setItem("token", data.token);
//       localStorage.setItem("user", JSON.stringify(data.user));
//       navigate("/");
//       window.location.reload();
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     }
//   }

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Login</h2>
//       {error && <p className="text-red-600 mb-2">{error}</p>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           name="email"
//           type="email"
//           placeholder="Email"
//           onChange={handleChange}
//           className="w-full border p-2"
//         />
//         <input
//           name="password"
//           type="password"
//           placeholder="Password"
//           onChange={handleChange}
//           className="w-full border p-2"
//         />
//         <button className="bg-blue-600 text-white px-4 py-2 rounded block w-full">
//           Login
//         </button>
//       </form>
//       <p className="mt-4 text-center">
//         Don’t have an account?{" "}
//         <Link to="/auth/register" className="text-blue-700 hover:underline">
//           Register
//         </Link>
//       </p>
//     </div>
//   );
// }

// export default Login;


