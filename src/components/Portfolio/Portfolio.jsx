import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Card from "../Card/Card";
import useAppContext from "../../store/AppContext";
import worksData from "./Works";

import styles from "./Portfolio.module.css";

const Portfolio = () => {
  const { store } = useAppContext();
  const targetRef = useRef < HTMLDivElement > (null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });


  const opacityDesktop = useTransform(scrollYProgress, [0.1, 0.24, 0.5], [0, 1, 0]);
  const opacityMobile = useTransform(scrollYProgress, [0, 0.08], [0, 1], {
    clamp: false,
  });

  const opacity = store.isSmallScreen ? opacityMobile : opacityDesktop;

  return (
<motion.section style={{ opacity }} ref={{targetRef}} className={styles.portfolio_container}>
    <h2 id="portfolio" className={styles.portfolio_title}>
      <strong>MY WORKS</strong>
    </h2>
    <div className={styles.works_logo_container}>
      {worksData.map((work) => (
        <Card
          technologies={work.technologies}
          containerName={work.containerName}
          key={work.key}
          img={work.img}
          description={work.description}
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