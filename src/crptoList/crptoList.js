import React from "react";
function crptoList(props) {
  return (
    <>
      <ul>
        {props.crypto.map((list) => (
          <li
            key={list.id}
            style={{ cursor: "pointer", padding: 20 + "px", width: 20 + "em" }}
          >
            <img src={list.image} style={{ height: 50 + "px" }} />
            {list.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default crptoList;
