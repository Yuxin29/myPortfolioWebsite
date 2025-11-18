import React, { useState } from "react";
import "./Contact.css";
import profilePic from "./assets/profile.jpg";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [error, setError] = useState("");

  //const BACKEND = "http://localhost:5000"; // or your deployed backend later
  const BACKEND = "https://www.yuxinwu.eu/#contact";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("pending");

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setError("Please fill every field.");
      return;
    }

    try {
      const res = await fetch(`${BACKEND}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Unknown error");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  };

  return (
    <div id="contact" style={{marginTop: "2rem" }}>
        <hr style={{
            width: "100%",
            border: "none",
            height: "1px",
            backgroundColor: "#ccc",
            margin: "1.5rem 0"
        }} />

        <h2 style={{ textAlign: "left" }}>
            Feel free to leave a message to me
        </h2>
       
       <img
        src={profilePic}
        alt="Yuxin Wu"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "1rem",
        }}
      />

      <form className="contact-form" onSubmit={handleSubmit} style={{ textAlign: "left" }} >
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} />
        </label>

        <label>
          Email
          <input name="email" value={form.email} onChange={handleChange} />
        </label>

        <label>
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
          />
        </label>

        <button type="submit" disabled={status === "pending"}>
          {status === "pending" ? "Sending…" : "Send"}
        </button>
      </form>

      {status === null}
      {status === "success" && (
        <p style={{ color: "green" }}>Message sent — thank you!</p>
      )}
      {status === "error" && (
        <p style={{ color: "red" }}>Error: {error}</p>
      )}
    </div>
  );
}

export default Contact;
