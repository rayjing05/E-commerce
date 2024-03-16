import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/')
    }
  })

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.warn(email, password)
    let result = await fetch('http://localhost:5000/login', {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    result = await result.json();
    console.warn(result)
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/")
    } else {
      alert("Enter correct details")
    }
  }


  return (
    <div className="login">

      <h1 className="">Login Here</h1>

      <input type="text" className="inputBox" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} value={email}></input>

      <input type="password" className="inputBox" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} value={password}></input>

      <button onClick={handleLogin} className="btn-signup" type="button">Login</button>

    </div>
  )
}

export default Login