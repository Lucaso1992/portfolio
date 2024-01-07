import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import useAppContext from "../../store/AppContext";

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
          <h2>About me</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim facere optio minima delectus pariatur quasi, amet aliquam. Recusandae modi molestiae eveniet doloribus consequatur nemo sequi et fuga, fugit tenetur! Adipisci ut aspernatur libero. Reprehenderit ea deserunt, saepe odit laboriosam nam accusamus perspiciatis odio soluta dolorem architecto sunt nulla iure totam?</p>
          <h2>Education</h2>
          <p>Full Stack Developer</p>
          <p>Web Development</p>
        </div>

        <div className={styles.second_div}>
          <h2>Tech Stack</h2>
          <p>React JavaSCript HTML CSS </p>
          <h2>Extras</h2>
          <p>GitHub Bootstrap Jest Motion </p>
        </div>
      </div>
    </motion.section>
  )
}

export default AboutMe;