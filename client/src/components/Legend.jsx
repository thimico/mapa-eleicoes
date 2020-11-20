import React from "react";

const Legend = ({ legendItems }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
      }}
    >
        <div
            style={{
                display: "flex",
                alignItems: "center",
                margin: "20px",
            }}><h3>Distribuição de votos por partido nas unidades político administrativas</h3></div>
      {legendItems.map((item) => (
        <div
          key={item.title}
          style={{
            backgroundColor: item.color,
            flex: 1,
            display: "flex",
            alignItems: "center", // vertical
            justifyContent: "center", // horiztontal
            color: item.textColor != null ? item.textColor : "black",
            fontWeight: "bolder",
            fontSize: "1em",
            height: "10vh",
          }}
        >
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
