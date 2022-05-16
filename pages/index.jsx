import styles from "../components/Index/Index.module.scss";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  const fetch_nfts = async () => {
    let res = await axios.post(
      "https://cors-anywhere.herokuapp.com/https://nft.belair.finance/api/dummy/nfts"
    );
    console.log(res.data);
  };

  useEffect(() => {
    (async () => {
      await fetch_nfts();
    })();
  }, []);

  return <div className={styles.index}>Home</div>;
}
