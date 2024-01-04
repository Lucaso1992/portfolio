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
    return( 
        <motion.section id="about" style={{opacity}} ref={{ targetRef }} className={styles.about_container}>
            <h2 className={styles.about_title}>About me Lorem ipsum dolor sit amet Lorem ipsum  Lorem ipsum dolor sit amet
             consectetur adipisicing elit. Ab voluptates eligendi, possimus deserunt nihil fuga debitis 
             veniam quibusdam! Eius obcaecati eum perferendis, incidunt odit doloremque neque ad harum
              sunt illum quaerat, ut recusandae assumenda ab enim quam est reiciendis suscipit id quidem 
              vitae? Illum incidunt fugit ratio</h2>
        </motion.section>
    )
}

export default AboutMe;