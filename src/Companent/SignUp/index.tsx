import { useState } from "react";
import "..//Login/login.css";
import Cookies from "js-cookie";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const loginAPI = "http://3.38.98.134/auth/signup";

const Signup = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(loginAPI, {
        userName: userName,
        password: password,
      });
      if (response.data.success) {
        Cookies.set("token", response.data.token, { expires: 7 });
        navigate("/");
      }
      alert(response.data.message);
    } catch (error) {
      console.error("Signup kilganda error chikti", error);
      alert("Signup bolbodu");
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="login-content">
          <div className="login">
            <h1>Signup</h1>
            <form onSubmit={handleSignup}>
              <input
                type="text"
                id="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                name="username"
                placeholder="Username"
              />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="Password"
              />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="Confirm password"
              />
              <button className="btn-login" type="submit">
                Signup
              </button>
            </form>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1>Logged</h1>
              <a
                style={{
                  fontSize: 20,
                  paddingTop: 10,
                }}
                href="/login"
              >
                {" "}
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Signup;
