import React from "react";
import "../css/test02.css";

const data = [
  { id: 1, name: "E" },
  { id: 2, name: "F" },
  { id: 3, name: "G" },
  { id: 4, name: "H" },
];

function Test02() {
  return (
    <div className="adjust">
      {data.map((e) => {
        return (
          <div key={e.id}>
            <div className="card">
              <div className="name">{e.name}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Test02;
