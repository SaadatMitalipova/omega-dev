import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SlArrowRightCircle } from "react-icons/sl";
import { VscClose } from "react-icons/vsc";
import "./Header.css";
import ToComeIn from "../../pages/ToComeIn/ToComeIn";

function Header() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const navigate = useNavigate();

  function logoHeader() {
    navigate("/");
  }

  function toggleBurgerMenu() {
    setIsBurgerOpen(!isBurgerOpen);
  }
  const [modal, setModal] = useState(false);
  function openModal() {
    setModal(true);
  }
  function closeModal() {
    setModal(false);
  }

  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <div className="header-logo">
            <img
              onClick={logoHeader}
              src="https://devkg.com/js/img/logo.458f2cd.svg"
              alt=""
            />
          </div>

          <div className="header__nav">
            <Link className="LinkNav" to="/vacancies">Вакансии</Link>
            <Link className="LinkNav" to="/events">Мероприятия</Link>
            <Link className="LinkNav" to="/video">Видео</Link>
            <Link className="LinkNav" to="/organizations">Организации</Link>
            <Link className="LinkNav" to="/community">Сообщество</Link>
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
            <div
              style={{
                display: modal ? "block" : "none",
              }}
            >
              <ToComeIn closeModal={closeModal} />
            </div>
            <div className="header__enter">
              {modal ? (
                <button onClick={closeModal} className="products">
                  close
                </button>
              ) : (
                <button onClick={openModal} className="products">
                  <span>
                    <SlArrowRightCircle />
                  </span>
                  <p>Войти</p>
                </button>
              )}
            </div>
            <div className="header__enter__two">
              {modal ? (
                <button onClick={closeModal} className="products">
                  close
                </button>
              ) : (
                <button onClick={openModal} className="products">
                  <span>
                    <SlArrowRightCircle />
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

