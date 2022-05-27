import { useEffect, useState } from "react";
import axios from "axios";

const useNfts = () => {
  const [nfts, setNfts] = useState([]);

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

  return nfts;
};

export default useNfts;
