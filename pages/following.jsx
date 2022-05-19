import styles from "../Following/Following.module.scss";
import Header from "../components/Layout/Header/Header";
import Navbar from "../components/Layout/Navbar/Navbar";

const following = () => {
  return (
    <div className={styles.followingFeed}>
      <Header />
      <Navbar />
      <div className={styles.main}></div>
    </div>
  );
};

export default following;
