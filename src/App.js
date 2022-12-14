import { React } from "react";
import "./App.css";
import Test01 from "./components/test01";
import Test02 from "./components/test02";

function App() {
  return (
    <div>
      <div>
        <div className="head">
          <h2 className="text"> Card01 </h2>
        </div>
        <Test01 />
      </div>
      <div>
        <div className="head">
          <h2 className="text"> Card02 </h2>
        </div>
        <Test02 />
      </div>
    </div>
  );
}

export default App;
