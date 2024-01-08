import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import useAppContext from "../../store/AppContext";
import { PiStudentFill } from "react-icons/pi";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import { SiFramer } from "react-icons/si";

import styles from "./About-me.module.css";

const AboutMe = () => {
  const { store } = useAppContext();
  const targetRef = useRef < HTMLDivElement > (null);


  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });


  const opacityDesktop = useTransform(scrollYProgress, [0.35, 0.5, 0.7], [0, 1, 0]);
  const opacityMobile = useTransform(scrollYProgress, [0.35, 0.5, 0.7], [0, 1, 0], {
    clamp: false,
  });

  const opacity = store.isSmallScreen ? opacityMobile : opacityDesktop;
  return (
    <motion.section id="about" style={{ opacity }} ref={{ targetRef }} className={styles.about_div}>
      <div className={styles.about_container}>
        <div className={styles.first_div}>
          <h2 className={styles.about_titles}><strong> About me</strong></h2>
          <p className={styles.aboutme_intro}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim facere optio minima delectus pariatur quasi, amet aliquam. Recusandae modi molestiae eveniet doloribus consequatur nemo sequi et fuga, fugit tenetur! Adipisci ut aspernatur libero. Reprehenderit ea deserunt, saepe odit laboriosam nam accusamus perspiciatis odio soluta dolorem architecto sunt nulla iure totam?</p>
          <h2 className="mt-2"><strong>Education</strong></h2>
          <div className="d-flex flex-row align-items-center mt-2">
            <PiStudentFill className={styles.about_icons} />
            <p className={`${styles.tech_texts} ms-3`}>Full Stack Developer</p>
          </div>
          <p className={styles.education_texts}>4Geeks Academy, Spain</p>
          <div className="d-flex flex-row mt-2">
            <PiStudentFill className={styles.about_icons} />
            <p className={`${styles.tech_texts} ms-3`}>Web Development</p>
          </div>
          <p className={styles.education_texts}>Coder House, Argentina</p>
        </div>

        <div className={styles.second_div}>
          <div>
            <h2 className={styles.about_titles_icons}><strong>Tech Stack</strong></h2>
            <div className={styles.tech_container}>
              <div className="d-flex flex-column">
                <FaReact className={styles.about_icons} />
                <p className={styles.icons_text}>React</p>
              </div>

              <div className="d-flex flex-column">
                <IoLogoJavascript className={styles.about_icons} />
                <p className={styles.icons_text}>JavaScript</p>
              </div>

              <div className="d-flex flex-column">
                <FaCss3Alt className={styles.about_icons} />
                <p className={styles.icons_text}>CSS</p>
              </div>

              <div className="d-flex flex-column">
                <FaHtml5 className={styles.about_icons} />
                <p className={styles.icons_text}>HTML</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className={styles.about_titles_icons}> <strong>Extras</strong></h2>
            <div className={styles.tech_container}>
              <div className="d-flex flex-column">
                <FaGithub className={styles.about_icons} />
                <p className={styles.icons_text}>GitHub</p>
              </div>

              <div className="d-flex flex-column">
                <FaBootstrap className={styles.about_icons} />
                <p className={styles.icons_text}>Bootstrap</p>
              </div>

              <div className="d-flex flex-column">
                <SiJest className={styles.about_icons} />
                <p className={styles.icons_text}>Jest</p>
              </div>

              <div className="d-flex flex-column">
                <SiFramer className={styles.about_icons} />
                <p className={styles.icons_text}>Motion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default AboutMe;