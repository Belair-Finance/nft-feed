import styles from "./Navbar.module.scss";
import Profiles from "./Profiles";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.home}>
        <a href="/">
          <i className="fa-solid fa-house-chimney"></i>
        </a>
      </div>
      <div className={styles.followingFeed}>
        <a href="/">
          <i className="fa-solid fa-users"></i>
        </a>
      </div>
      <div className={styles.following}>
        <Profiles />
      </div>
    </div>
  );
};

export default Navbar;
