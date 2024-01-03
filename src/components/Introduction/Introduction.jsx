import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import useAppContext from "../../store/AppContext";

import styles from "./Introduction.module.css";

import img from "../../assets/profile-img.jpg"

const Introduction = () => {
      const { store } = useAppContext();
      const targetRef = useRef<HTMLDivElement>(null);

      const { scrollYProgress: scrollYProgressDesktop } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
      });

      const { scrollYProgress: scrollYProgressMobile } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"], 
      });

      const opacityDesktop = useTransform(scrollYProgressDesktop, [0, 0.5], [1, 0]);
      const opacityMobile = useTransform(scrollYProgressMobile, [0, 0.25], [1, 0], {
        clamp: false, 
      });
    
      const opacity = store.isSmallScreen ? opacityMobile : opacityDesktop;


    return (

        <motion.section style={{ opacity }} ref={{ targetRef }} className={styles.intro_container}>
            <div className={styles.intro_text_container}>
                <h2 className={styles.welcome_message}><mark className={styles.remarked}><strong>Hi there! Welcome</strong></mark></h2>
                <p className={styles.intro_textito}>My name is <strong>Lucas Solari</strong>, I´m a Front-End Developer. Design and usability
                    enthusiast, I enjoy crafting high-quality web solutions and delivering outstanding user experiences.
                    Have a look at my works and if you have any querry, feel free to reach out!</p>
            </div>
            <div className={styles.img_container}>
                <img className={`${styles.imgg}  object-fit-cover w-100 h-100`} src={img} alt="" />
            </div>
        </motion.section>

    )
}

export default Introduction;