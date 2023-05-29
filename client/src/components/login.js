import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import "./login.css";

import { useHistory } from "react-router-dom";
const Login = ({ onFormSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleKeyDown=(e)=> {
     if (e.key==="Enter")
     {
       handleSubmit(e);
     }
  }
   
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/loginuser", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("then entered");
          console.log(data, "userRegister");
          if (data.status === "ok") {
            console.log("transfer block entered");
            alert("login successful");
            window.localStorage.setItem("token", data.data);
            window.location.href = "./main";
          }
          else {
            alert("incorrect credentials")
          }
        });

      const data = await response.json();
      console.log("data is ", data);
      if (response.status && response.status >= 200 && response.status < 300) {
        console.log("ifff entered");
        alert("Form submitted successfully");
      } else {
        console.log("else entered");
        alert(`Failed to submit form: ${data.message}`);
      }

      //const data = await response.json();
      //alert("Form submitted successfully");
    } catch (error) {
      //alert(error.message);
      console.log("main catch block entered");
      console.log(error);
    }
  };
  const history = useHistory();
  const handleButtonClick = () => {
    //onFormSwitch('register');
    // navigate('/register');
    history.push("/signup");
  };
  return (
    <div className="flex-cont">
      <div className="auth-form-container">
        <h2 className="heading">Sign In </h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="Email"
            id="email"
            name="email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
          <button className="forgotpass" onClick={handleButtonClick} onKeyDown={handleKeyDown}>
            Forgot password?
          </button>
          <button type="submit" onKeyDown={handleKeyDown}>Log In</button>
        </form>
        <button className="link-btn" onClick={handleButtonClick} onKeyDown={handleKeyDown}>
          Don't have an account? Register here.
        </button>
      </div>
      <div className="bg-image">{/* <img src="./fokuslogo.png" /> */}</div>
    </div>
  );
};

export default Login;
