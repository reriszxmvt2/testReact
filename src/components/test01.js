import React from "react";
import "../css/test01.css";

const data = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
  { id: 4, name: "D" },
];

function Test01() {
  return (
    <div className="adjust1">
      {data.map((e) => {
        return (
          <div key={e.id}>
            <div className="card1">
              <div className="name1">{e.name}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Test01;
