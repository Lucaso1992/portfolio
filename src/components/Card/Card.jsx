import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

import { FaPlus } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import styles from "./Card.module.css"

const Card = ({ technologies, containerName, key, img, description, title, github, web }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true)
    }
  }

  return (
    <div className={styles.flip_card}>
      <motion.div className={styles.flip_card_inner} initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}>

        <div className={styles.flip_card_front}>
          <div className={styles.links_div}>
          <FaPlus className={styles.plus} onClick={handleFlip} />
          <Link to={github} target="_blank" className={styles.button_github}>
              <FaGithub />
            </Link>
          <Link to={web} target="_blank" ><FaExternalLinkAlt className={styles.button_web}/></Link>
          </div>
          <div className={styles[containerName]}>
            <Link to={web} target="_blank"><img src={img} className={styles.img_logo} alt={key}/></Link>
          </div>
          <p className={styles.work_title}><strong>{title}</strong></p>
          <div className={styles.tech_stack}>
            {technologies}
          </div>
        </div>

        <div className={styles.flip_card_back} onClick={handleFlip}>
          <p className={styles.works_texts}><strong>{description}</strong></p>
        </div>
      </motion.div>
    </div>
  )
}

export default Card;