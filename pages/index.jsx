import styles from "../components/Index/Index.module.scss";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  const fetch_nfts = async () => {
    let res = await axios.post(
      "https://cors-anywhere.herokuapp.com/https://nft.belair.finance/api/dummy/nfts"
    );
    console.log(res.data);
    trycatch((error) => console.error("FETCH ERROR:", error));
  };

  useEffect(() => {
    (async () => {
      await fetch_nfts();
    })();
  }, []);

  const displayNfts = ({ data }) => {
    const nft = data.nft[0];
    const description = data.description;
    const owner = data.owner;
  };

  return (
    <div className={styles.index}>
      <div className={styles.container}>
        <div className={styles.nft}></div>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore a
          asperiores culpa neque fugit temporibus, harum veniam vitae eveniet ad
          sapiente adipisci odit aperiam recusandae reprehenderit pariatur quos
          fugiat ullam.
        </div>
        <div className={styles.owner}></div>
        <div className={styles.collection}></div>
      </div>
    </div>
  );
}
