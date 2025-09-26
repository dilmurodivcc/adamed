"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("token", "STATIC_TOKEN");
    router.replace("/home");
  };

  return (
    <main className="page login-page">
      <h1>Log in</h1>
      <form onSubmit={handleLogin} className="login-form">
        <div className="input">
          <input
            type="tel"
            placeholder="Phone  Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Verification  Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <button type="submit" className="btn primary">
          Login
        </button>
      </form>
    </main>
  );
}
