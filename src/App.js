import "./styles.css";
import { useState, useEffect } from "react";
import CrptoList from "./crptoList/crptoList";
import CrptoDashboard from "./crptoDashboard/crptoDashboard";

export default function App() {
  let [cryptoList, setcryptoList] = useState([]);

  let [cryptoData, setcryptoData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10"
    )
      .then((res) => res.json())
      .then((data) => setcryptoList(data));
  }, []);

  return (
    <div className="App">
      <h1>Hello Sampath welcome to your new thought</h1>

      <CrptoList crypto={cryptoList} />

      <CrptoDashboard
        coinName={cryptoList.coinName}
        imageName={cryptoList.imageName}
      />
    </div>
  );
}
