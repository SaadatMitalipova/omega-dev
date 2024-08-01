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
  const [confirmPassword, setConfirmPassword] = useState("");

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
      navigate('/addVacancy');

    } catch (error) {
      alert("Signup bolbodu");
    }

  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="login-content">
          <div className="login">
            <h1>Зарегистрироваться</h1>
            <form onSubmit={handleSignup}>
              <input
                type="text"
                id="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                name="username"
                placeholder="Email пользователя"
              />

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Подтвердите пароль"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button className="btn-login" type="submit">
              Зарегистрироваться
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
              <h1 className="title-NotLoggedIn">Зарегистрирован</h1>
              <a
                style={{
                  fontSize: 16,
                  paddingTop: 10,
                }}
                href="/login"
              >
                {" "}
                Войти
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

// const [username, setUsername] = useState("");
// const [password, setPassword] = useState("");

// const handleSignup = () => {
//   if (password !== confirmPassword) {
//     alert("Passwords do not match");
//     return;
//   }
//   alert("Signup successful");
// };

// <div>
//   <h2>Signup</h2>

//   <button onClick={handleSignup}>Signup</button>
// </div>;
