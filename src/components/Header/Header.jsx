import styles from "./Header.module.scss";

import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import useMediaQuery from "@/hooks/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/theme/themeSlice";
import TypeIt from "typeit-react";
import ThemeButton from "../ThemeButton/ThemeButton";

const Header = () => {
  const location = useLocation();

  const theme = useSelector((state) => state.theme.theme);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    
    <header className={styles.header}>
       <div className={styles.header__content}>
        <button
          onChange={() => dispatch(toggleTheme())}
          className={styles.header__button_theme}
        >

          {isOpen ? "Black Spidey" : <ThemeButton/> }   {/* `${theme} Theme` */}
        </button >
        <nav
          className={
            isOpen ? styles.navbar + " " + styles.active : styles.navbar
          }
        >
          <ul className={styles.navbar__list}>
            <li
              className={
                location.pathname === "/"
                  ? styles.navbar__list_item + " " + styles.active
                  : styles.navbar__list_item
              }
            >
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/"
                className={styles.navbar__list_link}
              >
                _hello
              </NavLink>
            </li>
            <li
              className={
                location.pathname === "/about"
                  ? styles.navbar__list_item + " " + styles.active
                  : styles.navbar__list_item
              }
            >
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/about"
                className={styles.navbar__list_link}
              >
                _about-me
              </NavLink>
            </li>
            <li
              className={
                location.pathname === "/projects"
                  ? styles.navbar__list_item + " " + styles.active
                  : styles.navbar__list_item
              }
            >
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/projects"
                className={styles.navbar__list_link}
              >
                _projects
              </NavLink>
            </li>
          </ul>
        </nav>
        {isMobile ? (
          <button
            onClick={() => {
              console.log(isOpen);
              if (isOpen) {
                document.body.style.overflowY = "visible"
              } else {
                document.body.style.overflowY = "hidden"
              }

              setIsOpen((prev) => !prev)
            }}
            className={styles.header__button_menu}
          >
            {isOpen ? (
              <img src="/src/assets/icons/menu-close.svg" alt="Menu Close" />
            ) : (
              <img src="/src/assets/icons/menu.svg" alt="Menu" />
            )}
          </button>
        ) : (
          <Link to="/" className={styles.header__link}>
            _black-spidey
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
