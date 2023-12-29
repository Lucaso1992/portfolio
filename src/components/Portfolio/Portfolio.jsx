import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import styles from "./Portfolio.module.css";

import img1 from "../../assets/star-wars.png";
import img2 from "../../assets/we-contain.png";
import img3 from "../../assets/cosmos.png";
import img4 from "../../assets/agenda.png";

const Portfolio = () => {
  const [matches, setMatches] = useState(false);

  const useMediaQuery = (query) => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }

      const mediaQueryListener = () => {
        setMatches(media.matches);
      };

      if (typeof media.addEventListener === "function") {
        media.addEventListener("change", mediaQueryListener);
      } else {
        media.addListener(mediaQueryListener);
      }

      return () => {
        if (typeof media.removeEventListener === "function") {
          media.removeEventListener("change", mediaQueryListener);
        } else {
          media.removeListener(mediaQueryListener);
        }
      };
  };

  const isSmall = () => useMediaQuery("(min-width: 320px)");
  const isMedium = () => useMediaQuery("(min-width: 768px)");

  const targetRef = useRef<HTMLDivElement>(null);

  // Scroll para pantallas Desktop
  const { scrollYProgress: scrollYProgressDesktop } = useScroll({
    target: targetRef,
    offset: ["end end", "start start"],
  });

  // Scroll para Mobile
  const { scrollYProgress: scrollYProgressMobile } = useScroll({
    target: targetRef,
    offset: ["end end", "start end"],
  });

  // Opacidad para pantallas Desktop
  const opacityDesktop = useTransform(scrollYProgressDesktop, [0, 0.5], [1, 0]);

  // Opacidad para Mobile
  const opacityMobile = useTransform(scrollYProgressMobile, [0.48, 0.57], [1, 0]);

  const portfolioStyle = {};

  if (isSmall()) {
    portfolioStyle.opacity = opacityMobile;
  } else if (isMedium()) {
    portfolioStyle.opacity = opacityDesktop;
  }

  return (
    <motion.section style={{ opacity: portfolioStyle.opacity }} ref={{targetRef}} className={styles.portfolio_container}>
      <h2 id="portfolio" className={styles.portfolio_title}>
        <strong> Some of my works</strong>
      </h2>
      <div className={styles.works_logo_container}>
        <a href="https://www.wecontain.com.ar/" target="_blank" className={styles.anchor}>
          <div className={styles.works_logo}>
            <div className={styles.wecontain_container}>
              <img src={img2} className={styles.img_logo} alt="we-contain" />
            </div>
            <p className={styles.works_texts}>
              <strong>Design and development of a corporate website for a container rental company.</strong>
            </p>
          </div>
        </a>
        <a href="https://cosmos-app-1234.onrender.com/" target="_blank" className={styles.anchor}>
          <div className={styles.works_logo}>
            <div className={styles.cosmos_container}>
              <img src={img3} className={styles.img_logo} alt="cosmos" />
            </div>
            <p className={styles.works_texts}>
              <strong> FrontEnd Development of a Dating Web App connecting people through astrology.</strong>
            </p>
          </div>
        </a>
        <a href="https://star-wars-reloaded.vercel.app/" target="_blank" className={styles.anchor}>
          <div className={styles.works_logo}>
            <div className={styles.starwars_container}>
              <img src={img1} className={styles.img_logo} alt="star-wars" />
            </div>
            <p className={styles.works_texts}>
              <strong>FrontEnd development, connected with external API. Allows to Login and add favorite characters.</strong>
            </p>
          </div>
        </a>
        <a href="https://add-contacts-xi.vercel.app/" target="_blank" className={styles.anchor}>
          <div className={styles.works_logo}>
            <div className={styles.agenda_container}>
              <img src={img4} className={styles.img_logo} alt="agenda" />
            </div>
            <p className={styles.works_texts}>
              <strong>Agenda app connected to an external API. Create, edit or delete your contacts list. </strong>
            </p>
          </div>
        </a>
      </div>
    </motion.section>
  );
};

export default Portfolio;
