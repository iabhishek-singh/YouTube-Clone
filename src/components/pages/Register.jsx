import React, { useState } from "react";
import api from "../services/api";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import 'animate.css';

function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    avatarUrl: "",
    channels: ""
  });
  const [avatarFile, setAvatarFile] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", form.username.trim());
    formData.append("email", form.email.trim());
    formData.append("password", form.password);
    formData.append("channels", form.channels);

    if (avatarFile) {
      formData.append("avatar", avatarFile); // this name MUST match "avatar" in multer.single("avatar")
    } else if (form.avatarUrl) {
      formData.append("avatarUrl", form.avatarUrl); // optional fallback
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSuccess("Registration successful! Redirecting to login...");
      setError("");
      console.log(res.data);

      // Redirect after delay
      setTimeout(() => {
        navigate("/auth/login");
      }, 1000);
    } catch (err) {
      const message =
        err.response?.data?.message || err.message || "Registration failed";
      setError(message);
      setSuccess("");
      console.error(err.response.data);
    }
  };

  return (
    <div className="mt-15 p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
      <h2 className="text-3xl font-semibold text-center mb-8  text-red-600  animate__animated animate__fadeIn">Register</h2>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 animate__animated animate__fadeIn animate__delay-1s">
          {error}
        </div>
      )}
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4 animate__animated animate__fadeIn animate__delay-1s">
          {success}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setAvatarFile(e.target.files[0])}
          className="w-full border p-3 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        />
        <input
          name="avatarUrl"
          placeholder="Or enter Avatar URL"
          onChange={handleChange}
          className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        />
        <input
          name="channels"
          type="text"
          placeholder="Channel name"
          onChange={handleChange}
          className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        />
        <button className="bg-blue-600 text-white px-4 py-3 rounded-md w-full text-xl font-semibold hover:bg-blue-700 transition-all duration-300 cursor-pointer">
          Register
        </button>
      </form>

      <div className="text-center mt-6">
        <span className="text-gray-600">Already have an account?</span>
        <Link to="/auth/login" className="text-blue-700 p-1.5 hover:underline font-medium">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Register;


// import React, { useState } from "react";
// import api from "../services/api";

// import axios from "axios";
// import { useNavigate,Link } from "react-router-dom";

// function Register() {
//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     password: "",
//     avatarUrl: "",
//     channels: ""
//   });
//   const [avatarFile, setAvatarFile] = useState(null);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const navigate = useNavigate();

//   function handleChange(e) {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("username", form.username.trim());
//     formData.append("email", form.email.trim());
//     formData.append("password", form.password);
//     formData.append("channels", form.channels);

//     if (avatarFile) {
//       formData.append("avatar", avatarFile); // this name MUST match "avatar" in multer.single("avatar")
//     } else if (form.avatarUrl) {
//       formData.append("avatarUrl", form.avatarUrl); // optional fallback
//     }

//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/register", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setSuccess("Registration successful! Redirecting to login...");
//       setError("");
//       console.log(res.data);


//       // Redirect after delay
//       setTimeout(() => {
//         navigate("/auth/login");
//       }, 1000);
//     } catch (err) {
//       const message =
//         err.response?.data?.message || err.message || "Registration failed";
//       setError(message);
//       setSuccess("");
//       console.error(err.response.data);
//     }
//   };
//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Register</h2>
//       {error && (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-2">
//           {error}
//         </div>
//       )}
//       {success && (
//         <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-2">
//           {success}
//         </div>
//       )}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           name="username"
//           placeholder="Username"
//           onChange={handleChange}
//           className="w-full border p-2"
//         />
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
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setAvatarFile(e.target.files[0])}
//           className="w-full border p-2 cursor-pointer"
//         />
//         <input
//           name="avatarUrl"
//           placeholder="Or enter Avatar URL"
//           onChange={handleChange}
//           className="w-full border p-2"
//         />
//         <input
//           name="channels"
//           type="text"
//           placeholder="Channel name"
//           onChange={handleChange}
//           className="w-full border p-2"
//         />
//         <button className="bg-blue-600 text-white px-4 py-2 rounded block w-full cursor-pointer">
//           Register
//         </button>
//       </form>

//       <div className="font-serif"><span>Alredey have an account ? </span>
//         <Link to="/auth/login" className="text-blue-700 p-1.5  hover:underline font-stretch-50%">
//           Login
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Register;
