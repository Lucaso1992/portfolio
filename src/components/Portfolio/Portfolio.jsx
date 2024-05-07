import { useContext } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import Card from "../Card/Card";
import useAppContext from "../../store/AppContext";
import worksData from "./Works";

import styles from "./Portfolio.module.css";

const Portfolio = () => {
  const { store } = useAppContext();
  const [t] = useTranslation('global');

  return (
    <motion.section className={styles.portfolio_container}>
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
