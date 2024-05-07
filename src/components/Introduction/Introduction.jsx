import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import useAppContext from "../../store/AppContext";
import { useTranslation } from 'react-i18next';
import styles from "./Introduction.module.css";
import img from "../../assets/profile-img.jpg"

const Introduction = () => {
  const { store } = useAppContext();
  const targetRef = useRef < HTMLDivElement > (null);
  const [t] = useTranslation('global');

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacityDesktop = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const opacityMobile = useTransform(scrollYProgress, [0, 0.14], [1, 0], {
    clamp: false,
  });

  const opacity = store.isSmallScreen ? opacityMobile : opacityDesktop;


  return (

    <motion.section style={{ opacity }} ref={{ targetRef }} className={styles.intro_div}>
      <div className={styles.intro_container}>
        <div className={styles.texts_container}>
        <h2 className={styles.welcome_message}><mark className={styles.remarked}><strong>{t('introduction.title')}</strong></mark></h2>
        <p className={styles.intro_textito}>{t('introduction.text-1')} <strong>Lucas Solari</strong>, {t('introduction.text')}</p>
          </div>
        <div className={styles.img_container}>
          <img className={`${styles.imgg}  object-fit-cover w-100 h-100`} src={img} alt="" />
        </div>
      </div>
    </motion.section>

  )
}

export default Introduction;