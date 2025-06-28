// frontend/pages/register.jsx
import { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registreringen misslyckades");
      } else {
        alert("Registrering lyckades");
        router.push("/login");
      }
    } catch (err) {
      setError("Kunde inte kontakta servern.");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Registrera dig</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="email"
        name="email"
        placeholder="E-post"
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Lösenord"
        value={form.password}
        onChange={handleChange}
      />
      <button type="submit">Registrera</button>
    </form>
  );
}
