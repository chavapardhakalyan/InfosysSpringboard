import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
    // Add login logic here
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light p-3">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-3">Login</h2>
        <p className="text-center mb-4 text-muted">Please enter your login details</p>
        <form onSubmit={handleLogin}>
          <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="password" className="form-label">Password</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="form-control"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label className="form-check-label">Remember Me</label>
            </div>
            <Link to="/forgotpassword" className="text-primary text-decoration-none">Forgot Password?</Link>
          </div>
          <button 
            type="submit" 
            className="btn" 
            style={{ 
              backgroundColor: "#f98128", 
              color: "#fff", 
              width: "100%", 
              padding: "0.8rem 1.5rem", 
              borderRadius: "40px" 
            }}
          >
            Login
          </button>

        </form>
        <p className="text-center mb-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary">Register Here.</Link>
        </p>
        {/* Google login button
        <button className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center">
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt="Google logo"
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
          />
          Log In with Google
        </button> */}
      </div>
    </div>
  );
};

export default LoginPage;
