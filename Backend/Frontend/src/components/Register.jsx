import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleinputs = (event) => {
    // console.log("kiran");
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const submitted = async (event) => {
    event.preventDefault();

    const { name, email, password } = user;
    console.log("hello check");
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    if (data.error) {
      alert(data.error);
      console.log("Invalid Registration");
    } else {
      alert(data.message);
      console.log("Registration Succesful");
      navigate("/signin");
      // history.push("/login")
    }
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="text-center w-full">
      <h1 className="font-bold text-3xl mb-8">Sign Up</h1>
      <form
        method="POST"
        className="border-2 border-black m-auto w-1/3 rounded-xl p-4"
      >
        <div className="grid-input">
          <div className="text-lg my-3">
            <label className="mx-3">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={user.name}
              onChange={handleinputs}
              autoComplete="off"
              className="bg-indigo-950 text-white outline-none rounded-xl px-2 py-1"
            />
          </div>

          <div className="text-lg my-3">
            <label className="mx-3">Email:</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleinputs}
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
              value={user.password}
              onChange={handleinputs}
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
            Already have an account?{" "}
            <span
              className="cursor-pointer underline"
              onClick={() => navigate("/signin")}
            >
              Login
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
