import styles from "../components/Index/Index.module.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [nfts, setNfts] = useState([]);
  const [nftTitle, setNftTitle] = useState("");

  const fetch_nfts = async () => {
    const response = await axios.get(
      "https://cors-anywhere.herokuapp.com/nft.belair.finance/api/dummy/nfts"
      // "https://jsonplaceholder.typicode.com/todos"
    );
    console.log(response.data);
    setNfts(response.data);
  };

  useEffect(() => {
    (async () => {
      await fetch_nfts();
    })();
  }, []);

  return (
    <div className={styles.index}>
      {nfts?.map((nft, index) => (
        <div className={styles.nft} key={index}>
          <div className={styles.wrapper}>
            <h4>{nft.amount}</h4>
            <h3>{nft.name}</h3>
            <div
              className={styles.nft_image}
              style={{ backgroundImage: `url(${nft.image})` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
