import styles from "./Projects.module.scss";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filter, getRepositories } from "@/store/github/githubSlice";
import { Link } from "react-router-dom";

import useMediaQuery from "@/hooks/useMediaQuery";
import Loader from "../../components/Loader/Loader";

import react from "/src/assets/icons/react.svg"
import figma from "/src/assets/icons/figma.svg"
import close from "/src/assets/icons/close.svg"

export default function Projects() {
  const repositories = useSelector((state) => state.github.repositories);
  const isLoading = useSelector((state) => state.github.isLoading);
  const dispatch = useDispatch();

  const isMobile = useMediaQuery("(max-width: 768px)"); //TODO explain

  useEffect(() => {
    setTimeout(() => {
      dispatch(getRepositories());
    }, 500); 
  }, []);

  return (
    <>
      <section className={styles.section__one}>
        <div className={styles.section__one_content}>
          <div className={styles.section__one_top}>
            <h3 className={styles.section__one_top_title + " " + styles.active}>
            <svg width="9" height="7" viewBox="0 0 9 7" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.74998 6.65186L0.499969 0.651856L9 0.651855L4.74998 6.65186Z"/>
            </svg>
              projects
            </h3>
            {!isMobile ? (
              <h3 className={styles.section__one_top_title}>
                React; Layouts
                <img src={close} alt="Close" />
              </h3>
            ) : null}
          </div>
          <div className={styles.section__one_bottom}>
            <div className={styles.section__one_bottom_left}>
              <div className={styles.section__one_bottom_left_block}>
                <input
                  onClick={() => dispatch(filter("reactJs"))}
                  type="checkbox"
                  className={styles.section__one_bottom_left_input}
                />
                <div
                  className={
                    styles.section__one_bottom_left_information +
                     " " +
                     styles.active
                  }
                >
                  <img
                    src={react}
                    alt="React/JavaScript"
                  />
                  React/JavaScript
                </div>
              </div>
              <div className={styles.section__one_bottom_left_block}>
                <input
                  checked
                  onClick={() => dispatch(filter("layouts"))}
                  type="checkbox"
                  className={styles.section__one_bottom_left_input}
                />
                <div className={styles.section__one_bottom_left_information}>
                  <img
                    className={styles.section__one_bottom_left_information_img}
                    src={figma}
                    alt="Figma"
                  />
                  Layouts
                </div>
              </div>
            </div>
            {repositories ? (
              <div className={styles.section__one_bottom_right}>
                {repositories?.map((repository) => (
                  <div
                    key={repository.id}
                    className={styles.section__one_bottom_right_block}
                  >
                    <img
                      className={styles.section__one_bottom_right_img}
                      src={repository.img}
                      alt=""
                    />
                    <div
                      className={styles.section__one_bottom_right_information}
                    >
                      <p className={styles.section__one_bottom_right_text}>
                        //{repository.name}
                      </p>
                      <a
                        target="_blank"
                        href={`https://${repository.link}`}
                        className={styles.section__one_bottom_right_button}
                        >
                        view-project
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
