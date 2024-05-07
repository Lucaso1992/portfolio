import styles from "./Navbar.module.css";
import TraductorButton from "../Traductor-Button/TraductorButton";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const [t] = useTranslation('global');

  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
    <div className="container-fluid">
        <TraductorButton/>
        <button className={`${styles.toggler} navbar-dark navbar-toggler`} type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className=" navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                    <a className={`${styles.nav_items_one} nav-link`} href="#">
                    <strong className={styles.strong_items}>{t('navbar.one')}</strong>
                    </a>
                </li>
                <li className="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                    <a className={`${styles.nav_items} nav-link`} href="#portfolio">
                    <strong className={styles.strong_items}>{t('navbar.two')}</strong>
                    </a>
                </li>
                <li className="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                    <a className={`${styles.nav_items} nav-link`} href="#about">
                    <strong className={styles.strong_items}>{t('navbar.three')}</strong>
                    </a>
                </li>
                <li className="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                    <a className={`${styles.nav_items} nav-link me-4`} href="#contact">
                    <strong className={styles.strong_items}>{t('navbar.four')}</strong>   
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
  );
};

export default Navbar;
