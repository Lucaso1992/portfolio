import styles from "./Navbar.module.css";

const Navbar = ({currentColor}) => {
    // const currentColor = sectionColors.find(
    //     ({ start, end }) => window.scrollY >= start && window.scrollY < end
    //   )?.color || "whitesmoke";

    // style={{ boxShadow: `0 0 6px ${currentColor}` }}

  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
    <div className="container-fluid">
        <button className="navbar-dark navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className=" navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                    <a className={`${styles.nav_items_one} nav-link`} href="#">
                    <strong className={styles.strong_items}>Home</strong>
                    </a>
                </li>
                <li className="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                    <a className={`${styles.nav_items} nav-link`} href="#portfolio">
                    <strong className={styles.strong_items}>Portfolio</strong>
                    </a>
                </li>
                <li className="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                    <a className={`${styles.nav_items} nav-link`} href="#about">
                    <strong className={styles.strong_items}>About me</strong>
                    </a>
                </li>
                <li className="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                    <a className={`${styles.nav_items} nav-link me-4`} href="#contact">
                    <strong className={styles.strong_items}>Contact</strong>   
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
  );
};

export default Navbar;
