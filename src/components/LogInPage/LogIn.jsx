import React, { useState } from "react";
import "./LoginPage.css";
import { auth } from "../../Firebase/firebase"; // Adjust path if needed
import { signInWithEmailAndPassword } from "firebase/auth";
import { GrView } from "react-icons/gr";
import { BiHide } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import { getDatabase, ref, get, set } from "firebase/database";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const token = await user.getIdToken();
      sessionStorage.setItem("authToken", token);

      const db = getDatabase();
      const roleRef = ref(db, `roles/${user.uid}/role`);
      const snapshot = await get(roleRef);

      console.log("UID:", user.uid);
      console.log("Role from DB:", snapshot.val());

      if (snapshot.exists()) {
        const role = snapshot.val();
        console.log("User role:", role);

        if (role === "admin") {
          navigate("/dashboard");
        } else {
          alert("Access denied: You are not an admin.");
        }
      } else {
        alert("Role not found for this user in database.");
      }
    } catch (err) {
      console.error("Login failed", err.code, err.message);
      setError(err.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
                aria-label="Toggle password visibility"
              >
                {showPassword ? <GrView /> : <BiHide />}
              </button>
            </div>
          </div>

          {error && <p className="error-message">{error}</p>}

             <button type="submit" className="btn-login">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
