import Head from "next/head";
import styles from "./Layout.module.scss";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link
          href="https://pro.fontawesome.com/releases/v6.0.0-beta3/css/all.css"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.app}>
        <Header />

        <div className={styles.main}>
          <Navbar />
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
