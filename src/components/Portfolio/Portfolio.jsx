import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import styles from "./Portfolio.module.css";

import img1 from "../../assets/star-wars.png";
import img2 from "../../assets/we-contain.png";
import img3 from "../../assets/cosmos.png";
import img4 from "../../assets/agenda.png";

const Portfolio = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  const useMediaQuery = (query) => {
    return window.matchMedia(query);
  };

  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const smallScreenListener = useMediaQuery("(max-width: 767px)");
    const mediumScreenListener = useMediaQuery("(min-width: 768px)");

    const handleSmallScreenChange = () => {
      setIsSmallScreen(smallScreenListener.matches);
    };

    const handleMediumScreenChange = () => {
      setIsMediumScreen(mediumScreenListener.matches);
    };

    smallScreenListener.addEventListener("change", handleSmallScreenChange);
    mediumScreenListener.addEventListener("change", handleMediumScreenChange);

    return () => {
      smallScreenListener.removeEventListener("change", handleSmallScreenChange);
      mediumScreenListener.removeEventListener("change", handleMediumScreenChange);
    };
  }, []);

  const { scrollYProgress: scrollYProgressDesktop } = useScroll({
    target: targetRef,
    offset: ["end end", "start start"],
  });

  const { scrollYProgress: scrollYProgressMobile } = useScroll({
    target: targetRef,
    offset: ["end end", "start end"],
  });

  const opacityDesktop = useTransform(scrollYProgressDesktop, [0, 0.5], [1, 0]);
  const opacityMobile = useTransform(scrollYProgressMobile, [0.48, 0.57], [1, 0]);

  const opacity = isSmallScreen ? opacityMobile : opacityDesktop;

  return (
    <motion.section style={{ opacity }} ref={{targetRef}} className={styles.portfolio_container}>
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
