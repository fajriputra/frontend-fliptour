import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import axios from "axios";

import { useSelector } from "react-redux";

import Avatar from "assets/images/user-profile.jpg";
import iconLogout from "assets/images/icons/icon-door.svg";
import Logo from "components/Logo/Logo";
import Button from "components/UI/Button/Button";

function Header(props) {
  const auth = useSelector((state) => state.auth);

  const { isLogged } = auth;

  const handleLogout = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_HOST}/auth/logout`);
      localStorage.removeItem("firstLogin");
      window.location.href = "/";
    } catch (error) {
      window.location.href = "/";
    }
  };

  const userLink = () => {
    return (
      <>
        <div className="line">|</div>
        <h5 className="auth-user">
          Hi, <span className="text-capitalize">{auth?.user?.name}!</span>
        </h5>
        <div className="right-col">
          <div className="auth-image">
            <img src={Avatar} alt="avatar" className="img-cover" />
          </div>
        </div>
        <div className="btn-logout" onClick={handleLogout}>
          <img src={iconLogout} alt="logout icon" className="img-cover" />
        </div>
      </>
    );
  };

  const getNavLinksClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapse = () => setIsCollapsed(!isCollapsed);

  if (props.isCentered) {
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="mx-auto">
                <Logo />
              </div>
            </nav>
          </div>
        </header>
      </Fade>
    );
  }

  return (
    <Fade delay={300}>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Logo />

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded={!isCollapsed ? true : false}
              aria-label="Toggle navigation"
              onClick={handleCollapse}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`${isCollapsed ? "collapse" : ""} navbar-collapse`}>
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item${getNavLinksClass("/")}`}>
                  <Button className="nav-link" type="link" href="/">
                    Home
                  </Button>
                </li>
                <li className={`nav-item${getNavLinksClass("/categories")}`}>
                  <Button className="nav-link" type="link" href="/categories">
                    Categories
                  </Button>
                </li>
                <li className={`nav-item${getNavLinksClass("/testimonials")}`}>
                  <Button className="nav-link" type="link" href="/testimonials">
                    Testimonials
                  </Button>
                </li>
                <li className={`nav-item${getNavLinksClass("/news")}`}>
                  <Button className="nav-link" type="link" href="/news">
                    News
                  </Button>
                </li>
              </ul>
              {isLogged ? (
                userLink()
              ) : (
                <Button className="btn btn-login" type="link" href="/login">
                  Login
                </Button>
              )}
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}

export default Header;
