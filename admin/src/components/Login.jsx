import { useRef, useState, useEffect } from "react";
import { Template } from "./layout/Template";
import { useAppContext } from "./AppContext";

// import { border, apiURL } from "../functions/vars";
import { border, apiURL, isNumeric } from "@shared";

// --color-sage: #a8b587ff;
// --color-rose-quartz: #af90a9ff;
// --color-china-rose: #a05c7bff;
// --color-cordovan: #944654ff;
// --color-uranian-blue: #b9e6ffff;

export const Login = () => {
  const [pin, setPin] = useState(Array(6).fill(""));
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { setToken } = useAppContext();

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
    const response = await fetch(`${apiURL}login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newPin }),
    });

    // setIsLoading(true);

    const data = await response.json();
    // setIsLoading(false);

    if (data.success) {
      localStorage.setItem("token", data.token);
      setToken(data.token);
      setError("");
    } else {
      setError(data.message);
      setPin(Array(6).fill(""));
      inputRefs.current[0]?.focus();
    }
  };

  return (
    <Template>
      {apiURL}
      <div className="p-32 min-h-page flex justify-center items-center">
        <div className="relative">
          {/* {token && <p>you are logged in</p>} */}
          <h2 className="text-center mb-6">Please enter your passcode</h2>

          <div className="flex gap-2 items-center">
            {pin.map((d, i) => (
              <input key={i} maxLength="1" type="password" className={`border-b-4 w-12 h-12 text-center text-lg ${border[i % 5]} ${d ? "opacity-50" : ""} focus:shadow-form outline-0 transition-all duration-500`} value={d} ref={(ref) => (inputRefs.current[i] = ref)} onChange={(e) => handleChange(i, e.target.value)} onKeyDown={(e) => handleKeyDown(i, e)} />
            ))}
          </div>
          {isLoading && <p className="text-center absolute top-full pt-2.5">Submitting</p>}
          {error && <p className="text-china-rose absolute top-full pt-2.5">{error}</p>}
        </div>
      </div>
    </Template>
  );
};
