import { useRef, useState, useEffect } from "react";
import { isNumeric } from "../functions/functions";

export const Login = () => {
  const [pin, setPin] = useState(Array(6).fill(""));
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [error, setError] = useState("");
  console.log(pin);

  const [msg, setMsg] = useState("");

  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index, value) => {
    if (value === "" || isNumeric(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);

      if (value && index < pin.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      if (newPin.every((digit) => digit !== "")) {
        setMsg(`The PIN you entered is: ${newPin.join("")}`);
        handleLogin(newPin.join(""));
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleLogin = async (newPin) => {
    console.log("New Pin: ", newPin);
    const response = await fetch("https://rw-api.lndo.site/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newPin }),
    });

    const data = await response.json();
    console.log(data);
    if (data.success) {
      localStorage.setItem("token", data.token);
      setToken(data.token);
      setError("");
    } else {
      setError("Invalid PIN");
      setPin(Array(6).fill(""));
      inputRefs.current[0]?.focus();
    }
  };

  return (
    <div className="p-32 h-page flex justify-center items-center">
      <div>
        {/* {token && <p>you are logged in</p>} */}
        <h2 className="text-center mb-6">Login</h2>

        <div className="flex gap-2 items-center">
          {pin.map((d, i) => (
            <input key={i} maxLength="1" type="password" className="border w-12 h-12 text-center text-lg" value={d} ref={(ref) => (inputRefs.current[i] = ref)} onChange={(e) => handleChange(i, e.target.value)} onKeyDown={(e) => handleKeyDown(i, e)} />
          ))}
        </div>
        {error && <p className="text-red-700">{error}</p>}
      </div>
    </div>
  );
};
