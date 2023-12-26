import styles from "./Portfolio.module.css";

import img1 from "../../assets/star-wars.png"

const Portfolio = () => {
    return (
        <div className={styles.portfolio_container}>
            <h2 id="portfolio" className={styles.portfolio_title}><strong>Some of my work</strong></h2>
            <div className={styles.works_logo_container}>
                <a href="https://star-wars-reloaded.vercel.app/" target="_blank" className={styles.anchor}><div className={styles.works_logo}>
                    <div className={styles.starwars_container}>
                        <img src={img1} className={styles.img_logo} alt="star-wars" />
                    </div>
                    <p className={styles.works_texts}><strong>FrontEnd project, connected with external API. Login with JWT Tokens</strong></p>
                </div>
                </a>
                <div className={styles.works_logo}></div>
                <div className={styles.works_logo}></div>
                <div className={styles.works_logo}></div>
            </div>
        </div>
    )
}

export default Portfolio