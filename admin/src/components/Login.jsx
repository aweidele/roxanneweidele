import { useRef, useState, useEffect } from "react";

export const Login = () => {
  const [pin, setPin] = useState(Array(6).fill(""));
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [error, setError] = useState("");

  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index, value) => {
    console.log(index, inputRefs.current);
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value && index < pin.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  console.log(pin);
  // const [token, setToken] = useState(localStorage.getItem("token"));
  // const [pin, setPin] = useState("");
  // const [error, setError] = useState("");

  // const handleLogin = async () => {
  //   const response = await fetch("https://rw-api.lndo.site/login", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ pin }),
  //   });

  //   const data = await response.json();
  //   console.log(data);
  //   if (data.success) {
  //     localStorage.setItem("token", data.token);
  //     setToken(data.token);
  //     setError("");
  //   } else {
  //     setError("Invalid PIN");
  //   }
  // };

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
        <p>{pin.join("")}</p>
        {/* {error && <p>{error}</p>} */}
      </div>
    </div>
  );
};
