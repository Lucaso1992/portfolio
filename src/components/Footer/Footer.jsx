import styles from "./Footer.module.css"

const Footer = ({sectionColors}) => {
    // const currentColor = sectionColors.find(
    //     ({ start, end }) => window.scrollY >= start && window.scrollY < end
    //   )?.color || "whitesmoke";

    // style={{ boxShadow: `0 0 6px ${currentColor}` }}

    return(
        <div className={styles.footer_container}>
            <p className={styles.footer_text}>Copyright © - Alquimia Tech</p>
        </div>
    )
}

export default Footer;