import React, { useState } from "react";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email });
    // Add your forgot password logic here (e.g., API call to reset password)
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Forgot Password</h2>
        <p style={styles.subtitle}>Enter your email to reset your password</p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.submitButton}>
            Send Reset Link
          </button>
        </form>
        <p style={styles.loginRedirect}>
          Remember your password?{" "}
          <a href="/login" style={styles.link}>
            Login Here.
          </a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f9f9f9",
    padding: "1rem",
  },
  card: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    maxWidth: "400px",
    width: "100%",
    boxSizing: "border-box",
  },
  title: {
    fontSize: "1.5rem",
    marginBottom: "0.5rem",
    color: "#333",
  },
  subtitle: {
    fontSize: "0.9rem",
    color: "#666",
    marginBottom: "1.5rem",
  },
  form: {
    marginBottom: "1rem",
  },
  inputGroup: {
    marginBottom: "1rem",
    textAlign: "left",
  },
  label: {
    display: "block",
    fontSize: "0.9rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "0.8rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "1rem",
    boxSizing: "border-box",
  },
  submitButton: {
    backgroundColor: "#FFA07A",
    color: "#fff",
    padding: "0.8rem 1.5rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
    width: "100%",
  },
  loginRedirect: {
    marginTop: "1rem",
    fontSize: "0.9rem",
    color: "#666",
  },
  link: {
    color: "#007BFF",
    textDecoration: "none",
  },
};

export default ForgotPasswordPage;
