import "./styles.css";
import { useState, useEffect } from "react";
import CrptoList from "./crptoList/crptoList";
import CrptoDashboard from "./crptoDashboard/crptoDashboard";
import crptoList from "./crptoList/crptoList";

export default function App() {
  let [cryptoList, setcryptoList] = useState([]);

  let [cryptoData, setcryptoData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10"
    )
      .then((res) => res.json())
      .then((data) => {
        setcryptoList(data);
        setcryptoData(data[0]);
      });
  }, []);

  const clickHandler = (crptoData) => {
    setcryptoData(crptoData);
    console.log(crptoData);
  };

  return (
    <div
      className="App"
      style={{ display: "flex", gap: "5em", padding: "20px" }}
    >
      <CrptoList crypto={cryptoList} clickCapture={clickHandler} />

      <CrptoDashboard dashboardData={cryptoData} />
    </div>
  );
}
