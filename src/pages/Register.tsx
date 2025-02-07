import React, { useState } from "react";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData = { name, email, password, avatar: "https://i.pravatar.cc/150" };

    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/users/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert("Registration successful! You can now log in.");
        setName("");
        setEmail("");
        setPassword("");
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="register-input"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="register-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="register-input"
          required
        />
        <button type="submit" className="register-btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
