import styles from "./Footer.module.css"

const Footer = ({sectionColors}) => {
    const currentColor = sectionColors.find(
        ({ start, end }) => window.scrollY >= start && window.scrollY < end
      )?.color || "whitesmoke";
    return(
        <div className={styles.footer_container} style={{ boxShadow: `0 0 6px ${currentColor}` }}>
            <p className={styles.footer_text}>Copyright © - Alquimia Tech</p>
        </div>
    )
}

export default Footer;