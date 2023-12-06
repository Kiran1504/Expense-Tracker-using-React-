import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitted = async (event) => {
    event.preventDefault();

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.error) {
      alert(data.error);
      console.log(data.error);
    } else {
      alert("login Success");
      console.log("login Success");
      navigate("/");
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div className="text-center w-full">
      <h1 className="font-bold text-3xl mb-8">Log In</h1>
      <form
        method="POST"
        className="border-2 border-black m-auto w-1/3 rounded-xl p-4"
      >
        <div className="">
          <div className="text-lg my-3">
            <label className="mx-3">Email:</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="off"
              className="bg-indigo-950 text-white outline-none rounded-xl px-2 py-1"
            />
          </div>
          <div className="text-lg my-3">
            <label className="mx-3">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="off"
              className="bg-indigo-950 text-white outline-none rounded-xl px-2 py-1"
            />
          </div>
        </div>
        <div>
          <input
            type="submit"
            onClick={submitted}
            className="rounded-xl bg-green-300 px-4 py-2 my-2"
          />
          <p>
            Don't have an account?{" "}
            <span
              className="cursor-pointer underline"
              onClick={() => navigate("/signup")}
            >
              Create one
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
