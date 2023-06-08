import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./aba.css";

const Register = ({ onFormSwitch }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const history = useHistory();

  const handleSignInClick = () => {
    history.push("/");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    /*if (name === "" || password === "" || confirmPassword === "") {
      alert("Please fill in all the fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("The passwords do not match");
      return;
    } */

    try {
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("then entered");
          console.log(data, "userRegister");
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

  return (
    <div className="container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1 className="heading">Sign Up</h1>

        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        />

        <div className="button-container">
          <button type="submit" className="signupbtn">
            Sign Up
          </button>

          <button className="signup-link" onClick={handleSignInClick}>
            Already have an account? Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;

/* const Register = ({ onFormSwitch }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
 
    if (name === "" || password === "" || confirmPassword === "") {
      alert("Please fill in all the fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("The passwords do not match");
      return;
    }

    // TODO: connect to backend to submit the form

    alert("Form submitted successfully");
  };

   const handleButtonClick = () => {
    onFormSwitch('login');
    navigate('/login');
  };

  return (
    <div className="container">
      <h1>test</h1>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)} 
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          name="psw-confirm"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        />

        <div className="button-container">
          <button type="submit" className="signupbtn">
            Sign Up
          </button>

          <button
            className="signup-link"
            onClick= {handleButtonClick}
          >
            Already have an account? Sign In
          </button>
        </div>
      </form>
    </div>
  );
}; 

export default Register;

*/
