import styles from "../components/Index/Index.module.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [nfts, setNfts] = useState([]);
  const [nftTitle, setNftTitle] = useState("");

  const fetch_nfts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    console.log(response.data);
    setNfts(response.data);
  };

  useEffect(async () => {
    await fetch_nfts();
  }, []);

  // function getNfts() {
  //   axios({
  //     method: "get",
  //     url: "https://cors-anywhere.herokuapp.com/nft.belair.finance/api/dummy/nfts",
  //   })
  //     .then((res) => showOutput(res))
  //     .catch((err) => console.log(err));
  // }
  // function showOutput(res) {
  //   document.getElementById("res").innerHTML = `
  //   <div className={styles.nfts}>
  //       <div className={styles.container}>
  //         <div className={styles.nft}></div>
  //         <div className={styles.nftTitle}><h2>${res.name}</h2></div>
  //         <div className={styles.description}>
  //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore a
  //           asperiores culpa neque fugit temporibus, harum veniam vitae eveniet
  //           ad sapiente adipisci odit aperiam recusandae reprehenderit pariatur
  //           quos fugiat ullam.
  //         </div>
  //         <div className={styles.owner}></div>
  //         <div className={styles.collection}></div>
  //   </div>
  //   `;
  // }

  //FIRST WAY
  // let [nfts, setNfts] = useState([]);
  // useEffect(async () => {
  //   try {
  //     let response = await axios.get(
  //       "https://cors-anywhere.herokuapp.com/nft.belair.finance/api/dummy/nfts"
  //     );
  //     let data = await response.json();
  //     setNfts(data);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // }, []);
  // // If you want to access the updated state then use this.
  // useEffect(() => {
  //   let newState = nfts.map((e) => e); // map your state here
  //   setNfts(newState); // and then update the state
  //   console.log(newState);
  // }, [getNfts]);

  //SECOND WAY
  // const fetch_nfts = async () => {
  //   let response = await axios.post(
  //     "https://cors-anywhere.herokuapp.com/nft.belair.finance/api/dummy/nfts"
  //   );
  //   let data = await response.json();
  //   let newState = data.map((e) => e);// mapping state
  //   setNfts(newState);
  //   console.log(newState);
  //   // console.log(response.data);
  // };

  //THIRD WAY
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       let response = await axios.post(
  //         "https://cors-anywhere.herokuapp.com/nft.belair.finance/api/dummy/nfts"
  //       );
  //       if (!response.ok) {
  //         throw new Error(`Error! status: ${response.status}`);
  //       }
  //       let data = await response.json();
  //       let newState = data.map((e) => e); // mapping state
  //       setNfts(newState);
  //       console.log(newState);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //     // await fetch_nfts();
  //   })();
  // }, []);

  return (
    <div className={styles.index}>
      <div className={styles.nfts}>
        <div className={styles.container}>
          {nfts?.map((nft, index) => (
            <div className={styles.nft} key={index}>
              <h4>{nft.id}</h4>
              <h3>{nft.title}</h3>
              <h5>{nft.completed}</h5>
            </div>
          ))}
          <div className={styles.nft}>
            <h3>{nfts.title}</h3>
          </div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore a
            asperiores culpa neque fugit temporibus, harum veniam vitae eveniet
            ad sapiente adipisci odit aperiam recusandae reprehenderit pariatur
            quos fugiat ullam.
          </div>
          <div className={styles.owner}></div>
          <div className={styles.collection}></div>
        </div>
      </div>
    </div>
  );
}
