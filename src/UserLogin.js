import React, { useState } from "react";
import PropTypes from "prop-types";

const UserLogin = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.endsWith(".ru")) {
      setEmailError("Yalnız .ru domenlərinə icazə verilir.");
      return;
    } else {
      setEmailError("");
    }

    if (password.length < 8) {
      setPasswordError("Ən azı 8 simvol.");
      return;
    } else {
      setPasswordError("");
    }

    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {emailError && <div style={{ color: "red" }}>{emailError}</div>}
      </div>
      <div>
        <label htmlFor="password">Parol:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {passwordError && <div style={{ color: "red" }}>{passwordError}</div>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

UserLogin.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default UserLogin