import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from 'react-i18next';
import Card from "../Card/Card";
import useAppContext from "../../store/AppContext";
import worksData from "./Works";

import styles from "./Portfolio.module.css";

const Portfolio = () => {
  const { store } = useAppContext();
  const [t] = useTranslation('global');
  const targetRef = useRef < HTMLDivElement > (null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });


  const opacityDesktop = useTransform(scrollYProgress, [0.1, 0.24, 0.5], [0, 1, 0]);
  const opacityMobile = useTransform(scrollYProgress, [0, 0.13], [0, 1], {
    clamp: false,
  });

  const opacity = store.isSmallScreen ? opacityMobile : opacityDesktop;

  return (
    <motion.section style={{ opacity }} ref={{ targetRef }} className={styles.portfolio_container}>
      <h2 id="portfolio" data-aos="fade-up" data-aos-duration="1000" className={styles.portfolio_title}>
        <strong>{t('works.title')}</strong>
      </h2>
      <div className={styles.works_logo_container} data-aos="fade-up" data-aos-duration="1000">
        {worksData.map((work) => (
          <Card
            technologies={work.technologies}
            containerName={work.containerName}
            key={work.key}
            img={work.img}
            description={store.english ? work.description : work.description_espanol}
            title={work.title}
            github={work.github}
            web={work.web}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Portfolio;
