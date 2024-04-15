import styles from "./About.module.scss";
// import { grayVector,greenFolder,redFolder,blueFolder,htmlIcon,cssIcon,jsIcon,reactIcon,sassIcon,tsIcon,gitIcon,mailIcon,phoneIcon } from "../../utils/imgExport.js";
import grayVector from "../../assets/icons2/gray-vector.svg";
import whiteVector from "../../assets/icons2/personal-info.svg";
import greenFolder from "../../assets/icons2/green-folder.svg";
import redFolder from "../../assets/icons2/red-folder.svg";
import blueFolder from "../../assets/icons2/blue-folder.svg";
import htmlIcon from "../../assets/icons2/html-icon.svg";
import cssIcon from "../../assets/icons2/css-icon.svg";
import jsIcon from "../../assets/icons2/javascript-icon.svg";
import reactIcon from "../../assets/icons2/react-js-icon.svg";
import sassIcon from "../../assets/icons2/sass-icon.svg";
import tsIcon from "../../assets/icons2/typescript-icon.svg";
import gitIcon from "../../assets/icons2/git-icon.svg";
import mailIcon from "../../assets/icons2/mail-icon.svg";
import phoneIcon from "../../assets/icons2/phone-icon.svg";
import { useState } from "react";

import ProgressBar from "@ramonak/react-progress-bar";
import useMediaQuery from "../../hooks/useMediaQuery";
import TypeIt from "typeit-react";

export default function About() {
  const progressBars = [
    {
      id: 1,
      title: "html",
      max: 100,
      value: 90,
      span: "90%",
      img: htmlIcon,
    },
    {
      id: 2,
      title: "css",
      max: 100,
      value: 90,
      span: "90%",
      img: cssIcon,
    },
    {
      id: 3,
      title: "scss",
      max: 100,
      value: 85,
      span: " 85%",
      img: sassIcon,
    },
    {
      id: 4,
      title: "JavaScript",
      max: 100,
      value: 75,
      span: " 75%",
      img: jsIcon,
    },
    {
      id: 5,
      title: "git",
      max: 100,
      value: 75,
      span: "75%",
      img: gitIcon,
    },
    {
      id: 6,
      title: "react",
      max: 100,
      value: 70,
      span: "70%",
      img: reactIcon,
    },
    {
      id: 7,
      title: "TypeScript",
      max: 100,
      value: 65,
      span: "65%",
      img: tsIcon,
    },
  ];

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <section className={styles.section__one}>
        <div className={styles.section__one_left}>
          <svg
            width="9"
            height="7"
            viewBox="0 0 9 7"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.74998 6.65186L0.499969 0.651856L9 0.651855L4.74998 6.65186Z" />
          </svg>
          <h3 className={styles.section__one_left_title}>portfolio</h3>
          <ul className={styles.section__one_left_lists}>
            <li className={styles.section__one_left_list}>
              <img
                className={styles.section__one_left_list_grayVector}
                src={grayVector}
                alt=""
              />
              <img
                className={styles.section__one_left_list_redFolder}
                src={redFolder}
                alt=""
              />
              <p className={styles.section__one_left_list_bio}>node_modules</p>
            </li>
            <li className={styles.section__one_left_list}>
              <img
                src={grayVector}
                alt=""
                className={styles.section__one_left_list_grayVector}
              />
              <img
                src={greenFolder}
                alt=""
                className={styles.section__one_left_list_greenFolder}
              />
              <p className={styles.section__one_left_list_interests}>
                public
              </p>
            </li>
            <li className={styles.section__one_left_list}>
              <img
                src={grayVector}
                alt=""
                className={styles.section__one_left_list_grayVector}
              />
              <img
                src={blueFolder}
                alt=""
                className={styles.section__one_left_list_blueFolder}
              />
              <p className={styles.section__one_left_list_education}>
                src
              </p>
            </li>
          </ul>
          <svg
            width="9"
            height="7"
            viewBox="0 0 9 7"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.74998 6.65186L0.499969 0.651856L9 0.651855L4.74998 6.65186Z" />
          </svg>
          <h3 className={styles.section__one_left_contacts}>contacts</h3>
          <ul className={styles.section__one_left_lists2}>
            <a
              href="email:durdosha.uz@gmail.com"
              className={styles.section__one_left_lists2_link}
            >
              <span>
                <img src={mailIcon} alt="" />
              </span>
              durdosha.uz@gmail.com
            </a>
            <a
              href="tel:+998970038623"
              className={styles.section__one_left_lists2_link}
            >
              <span>
                <img src={phoneIcon} alt="" />
              </span>
              +998970038623
            </a>
          </ul>
        </div>
        <div className={styles.section__one_center}>
          <div className={styles.section__one_center_module}>
            <p className={styles.section__one_center_module_text}>
              personal-info
            </p>
          </div>
          <div className={styles.section__one_center_info}>
            <div className={styles.section__one_center_info_numbers_box}>
              <p className={styles.section__one_center_module_numbers}>1</p>
              <p className={styles.section__one_center_module_numbers}>2</p>
              <p className={styles.section__one_center_module_numbers}>3</p>
              <p className={styles.section__one_center_module_numbers}>4</p>
              <p className={styles.section__one_center_module_numbers}>5</p>
              <p className={styles.section__one_center_module_numbers}>6</p>
              <p className={styles.section__one_center_module_numbers}>7</p>
              <p className={styles.section__one_center_module_numbers}>8</p>
              <p className={styles.section__one_center_module_numbers}>9</p>
              <p className={styles.section__one_center_module_numbers}>10</p>
              <p className={styles.section__one_center_module_numbers}>11</p>
              <p className={styles.section__one_center_module_numbers}>12</p>
              <p className={styles.section__one_center_module_numbers}>13</p>
              <p className={styles.section__one_center_module_numbers}>14</p>
              <p className={styles.section__one_center_module_numbers}>15</p>
              <p className={styles.section__one_center_module_numbers}>16</p>
            </div>
            <TypeIt
              options={{
                loop: false,
                speed: 0.1, //100
                deleteSpeed: 0.2,
                startDelay: 0.5, //400
                cursor: false,
              }}
            >
              <div className={styles.section__one_center_info_about}>
                <p className={styles.section__one_center_info_about_text}>
                  Greetings! I'm Durdona, a recent graduate of the Proweb
                  Educational Center. My journey into the world of programming
                  began not long ago when I discovered the allure it held. I
                  wasted no time and dived straight into learning. Having just
                  completed courses in interface processing, I am enthusiastic
                  and eager to apply my knowledge to real-world projects.
                </p>
                <p className={styles.section__one_center_info_about_text}>
                  My primary objective is to secure a full-time position in the
                  field of web development. Despite my current lack of
                  professional experience, I am driven by a passion for learning
                  and dedicated to advancing my skills in frontend development.
                  Eager to contribute to a team, I am ready to tackle the
                  challenges presented by the dynamic and ever-evolving world of
                  web development.
                </p>
                <p className={styles.section__one_center_info_about_text}>
                  Feel free to reach out to me to discuss collaboration or
                  potential opportunities.I'm excited about the prospect of
                  contributing to innovative projects and continuing my growth
                  as a frontend developer|
                </p>
              </div>
            </TypeIt>
          </div>
        </div>
        <div className={styles.section__one_right}> {/* всем дать max-content */}
          <div className={styles.section__one_right_box}>
            <h3 className={styles.section__one_right_title}>My Skills</h3>
            <div className={styles.section__one_right_box_skills}>
              {progressBars.map((bar) => (
                <div
                  key={bar.id}
                  className={styles.section__one_right_box_skills_progress}
                  >
                  <div className={styles.section__one_right_box_skills_progress_cont}>
                    <span className={styles.section__one_right_box_skills_progress_cont_number}>
                      {bar.id}
                    </span>
                    <img className={ styles.section__one_right_box_skills_progress_cont_icon}
                      src={bar.img}
                      alt=""
                    />
                  </div>
                  <div className={styles.section__one_right_box_skills_progress_cont2}>
                    <ProgressBar
                      maxCompleted={bar.max}
                      completed={bar.value}
                      customLabel={bar.span}
                      bgColor="rgb(67, 217, 173)"
                      width={isMobile ? 150 : 300}
                      height={30}
                      baseBgColor="transparent"
                      className={
                        styles.section__one_right_box_skills_progress_cont2_bar
                      }
                      animateOnRender={true}
                      transitionTimingFunction="ease-in-out"
                      completedClassName={
                        styles.section__one_right_box_skills_progress_cont2_bar_completed
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
