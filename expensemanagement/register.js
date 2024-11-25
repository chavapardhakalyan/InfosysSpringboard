import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log({ email, password, confirmPassword, agreeTerms });
    // Registration logic can go here
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light p-3">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-3">Register</h2>
        <p className="text-center mb-4 text-muted">Please enter your details to register</p>
        <form onSubmit={handleRegister}>
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
          <div className="mb-3 text-start">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <div className="input-group">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                className="form-control"
                placeholder="********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label="Toggle confirm password visibility"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
              required
            />
            <label className="form-check-label">I agree to the Terms and Conditions</label>
          </div>
          <button
            type="submit"
            className="btn"
            style={{
              backgroundColor: "#f98128",
              color: "#fff",
              width: "100%",
              padding: "0.8rem 1.5rem",
              borderRadius : "40px"
            }}
          >
            Register
          </button>
        </form>
        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-primary">Login Here.</Link>
        </p>
        {/* <button className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center mt-3">
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt="Google logo"
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
          />
          Register with Google
        </button> */}
      </div>
    </div>
  );
};

export default RegisterPage;
