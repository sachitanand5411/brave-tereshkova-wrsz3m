import React from "react";
import "../styles.css";

function crptoList(props) {
  return (
    <div className="sidebar">
      <ul>
        {props.crypto.map((list) => (
          <li
            key={list.id}
            className="listClasee"
            onClick={() => {
              props.clickCapture(list);
            }}
          >
            <img src={list.image} style={{ height: 50 + "px" }} />
            {list.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default crptoList;
