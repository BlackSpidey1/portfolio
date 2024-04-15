import styles from "./Footer.module.scss";
import facebook from "/src/assets/icons/facebook.svg"
import github from '/src/assets/icons/github.svg'
import instagram from '/src/assets/icons/instagram.svg'

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <h3 className={styles.footer__title}>find me in:</h3>
        <ul className={styles.footer__list}>
          <li className={styles.footer__list_item}>
            <a href="https://www.instagram.com/black.spidey22" className={styles.footer__list_link}>
              <img className={styles.footer__list_link_insta} src={instagram} alt="Instagram" />
            </a>
          </li>
          <li className={styles.footer__list_item}>
            <a href="https://www.facebook.com/profile.php?id=61554308520494" className={styles.footer__list_link}>
              <img src={facebook} alt="Facebook" />
            </a>
          </li>
        </ul>
        <button className={styles.footer__button}>
          <span>@durdosha.uz@gmail.com</span>
          <img src={github} alt="Github" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
