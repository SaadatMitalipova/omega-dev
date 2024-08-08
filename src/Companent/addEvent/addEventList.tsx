import React, { useState } from "react";
import Footer from "../../Companent/Footer/Footer";
import "..//addVacancy/addVacancy.css";
import { Link, useNavigate } from "react-router-dom";
import { VscClose } from "react-icons/vsc";
import AddEvent from "./addEvent";
function AddEventList() {
  document.addEventListener("DOMContentLoaded", () => {
    const description = document.getElementById(
      "description"
    ) as HTMLTextAreaElement;
    const descriptionLength = document.getElementById(
      "description-length"
    ) as HTMLSpanElement;
    const saveButton = document.getElementById(
      "save-button"
    ) as HTMLButtonElement;
    const form = document.getElementById("vacancy-form") as HTMLFormElement;

    description.addEventListener("input", () => {
      descriptionLength.textContent = `Длина текста: ${description.value.length} символов, минимально допустимое значение 200 символов`;
    });

    saveButton.addEventListener("click", () => {
      alert("Сохранено");
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (description.value.length < 200) {
        alert("Описание вакансии должно быть не менее 200 символов.");
      } else {
        alert("Форма отправлена");
        form.reset();
        descriptionLength.textContent =
          "Длина текста: 0 символов, минимально допустимое значение 200 символов";
      }
    });
  });
  const navigate = useNavigate();

  function logoHeader() {
    navigate("/");
  }

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  function toggleBurgerMenu() {
    setIsBurgerOpen(!isBurgerOpen);
  }

  return (
    <>
      <div className="container">
        <div className="add-content">
          <div className="header-addVacancy">
            <div className="header-logo-add">
              <img
                className="img-logo"
                onClick={logoHeader}
                src="https://devkg.com/js/img/logo.458f2cd.svg"
                alt=""
              />
            </div>
            <div className="header__nav-add">
              <Link className="LinkNav" to="/vacancies">
                Вакансии
              </Link>
              <Link className="LinkNav" to="/events">
                Мероприятия
              </Link>
              <Link className="LinkNav" to="/video">
                Видео
              </Link>
            </div>
            <div className="header__menu-and-clicker">
              <div className="header__burger" onClick={toggleBurgerMenu}>
                <div className={`hamburger ${isBurgerOpen ? "is-active" : ""}`}>
                  <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                  </div>
                </div>
              </div>
              <div className={`burger-menu ${isBurgerOpen ? "active" : ""}`}>
                <nav className="burger-menu__list">
                  <Link to="/" onClick={toggleBurgerMenu}>
                    <VscClose />
                  </Link>
                  <Link to="/vacancies" onClick={toggleBurgerMenu}>
                    Вакансии
                  </Link>
                  <Link to="/events" onClick={toggleBurgerMenu}>
                    Мероприятия
                  </Link>
                  <Link to="/video" onClick={toggleBurgerMenu}>
                    Видео
                  </Link>
                  <Link to="/organizations" onClick={toggleBurgerMenu}>
                    Организации
                  </Link>
                  <Link to="/community" onClick={toggleBurgerMenu}>
                    Сообщество
                  </Link>
                </nav>
              </div>
            </div>
            <Link className="LinkNav goOut" to="/">
              <span>Выйти</span>
            </Link>
          </div>
          <AddEvent />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AddEventList;
