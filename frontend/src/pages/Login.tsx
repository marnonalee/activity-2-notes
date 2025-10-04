import React, { useState, useContext } from "react";
import axios from "../api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "../auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", { email, password });
      const token = res.data.access_token;
      if (!token) throw new Error("No token returned from server");
      auth?.login(token);
      navigate("/dashboard");
    } catch (err: any) {
      console.error(err.response?.data || err.message);
      alert("Login failed: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <p>
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
