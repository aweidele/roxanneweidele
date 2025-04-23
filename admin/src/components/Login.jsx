import { useState } from "react";

export const Login = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const response = await fetch("https://rw-api.lndo.site/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pin }),
    });

    const data = await response.json();
    console.log(data);
    if (data.success) {
      localStorage.setItem("token", data.token);
      setToken(data.token);
      setError("");
    } else {
      setError("Invalid PIN");
    }
  };

  return (
    <div className="p-32 h-page flex justify-center items-center">
      <div>
        {token && <p>you are logged in</p>}
        <h2>Login</h2>
        <div className=" flex gap-2 items-center">
          <input className="border p-1 border-amber-500" type="password" value={pin} onChange={(e) => setPin(e.target.value)} />
          <button className="border p-1 border-amber-500" onClick={handleLogin}>
            Log In
          </button>
        </div>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};
