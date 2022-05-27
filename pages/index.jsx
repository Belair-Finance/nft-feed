import { useEffect } from "react";
import styles from "../components/Index/Index.module.scss";
import useNfts from "../hooks/useNfts";

export default function Home() {
  const nfts = useNfts();

  return (
    <div className={styles.index}>
      {nfts?.map((nft, index) => (
        <div className={styles.nft} key={index}>
          <div className={styles.wrapper}>
            <h4>Amount {nft.amount}</h4>
            <h3 className={styles.nft_name}>{nft.name}</h3>
            <div className={styles.owners}>
              <h4 className={styles.nft_owner}>
                Owner {nft.owner_of.slice(31)}
              </h4>
              <img
                src="https://source.boringavatars.com/marble/30/${nft.owner}?colors=512653,822a9d,6a86e9,61b2f4,e75168"
                alt=""
              />
              <div className={styles.like}></div>
            </div>
            <h4 className={styles.nft_symbol}>{nft.symbol}</h4>
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
