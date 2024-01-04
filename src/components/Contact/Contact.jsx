import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import useAppContext from "../../store/AppContext";

import styles from "./Contact.module.css";

const Contact = () => {
    const { store } = useAppContext();
    const targetRef = useRef < HTMLDivElement > (null);

    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start start", "end start"],
    });
  
  
    const opacityDesktop = useTransform(scrollYProgress, [0.6, 0.75], [0, 1]);
    const opacityMobile = useTransform(scrollYProgress, [0.6, 0.75], [0, 1], {
      clamp: false,
    });
    
      const opacity = store.isSmallScreen ? opacityMobile : opacityDesktop;
    return( 
        <motion.section id="contact" style={{opacity}} ref={{ targetRef }} className={styles.contact_container}>
            <h2 className={styles.contact_title}>Contact</h2>
        </motion.section>
    )
}

export default Contact;