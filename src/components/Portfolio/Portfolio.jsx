import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import useAppContext from "../../store/AppContext";
import worksData from "./Works";

import styles from "./Portfolio.module.css";

const Portfolio = () => {
  const { store } = useAppContext();
  const targetRef = useRef < HTMLDivElement > (null);

  const { scrollYProgress: scrollYProgressDesktop } = useScroll({
    target: targetRef,
    offset: ["end end", "start start"],
  });

  const { scrollYProgress: scrollYProgressMobile } = useScroll({
    target: targetRef,
    offset: ["end end", "start end"],
  });

  const opacityDesktop = useTransform(scrollYProgressDesktop, [0, 0.5], [1, 0]);
  const opacityMobile = useTransform(scrollYProgressMobile, [0.4, 0.66], [1, 0], {
    clamp: false,
  });

  const opacity = store.isSmallScreen ? opacityMobile : opacityDesktop;

  return (
    <motion.section style={{ opacity }} ref={{ targetRef }} className={styles.portfolio_container}>
      <h2 id="portfolio" className={styles.portfolio_title}>
        <strong> Some of my works</strong>
      </h2>
      <div className={styles.works_logo_container}>
        {worksData.map((work) => (
          <a key={work.key} href={work.link} target="_blank" className={styles.anchor}>
            <div className={styles.works_logo}>
              <div className={styles[work.containerName]}>
                <img src={work.img} className={styles.img_logo} alt={work.key} />
              </div>
              <p className={styles.works_texts}>
                <strong>{work.description}</strong>
              </p>
              <div className={styles.technologies}>
                {work.technologies}
              </div>
            </div>
          </a>
        ))}
      </div>
    </motion.section>
  );
};

export default Portfolio;