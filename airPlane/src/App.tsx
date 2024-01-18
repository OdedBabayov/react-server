import { useState, useEffect } from "react";
import Buttons from "./Components/Buttons";
import Visual from "./Components/Visual";

function App() {
  const [btn, setBtn] = useState("visual");
  const [backData, setBackData] = useState({
    altitude: 0,
    his: 0,
    ADI: 0,
  });

  useEffect(() => {
    const fetcData = async () => {
      const res = await fetch("http://localhost:3000/");
      const data = await res.json();
      setBackData(data);
    };
    fetcData();
  }, []);

  return (
    <div className="mainContainer">
      <Buttons func={setBtn}></Buttons>
      {btn == "visual" ? (
        <Visual //if "visual" button pushed"
          altitude={backData.altitude}
          his={backData.his}
          adi={backData.ADI}
        ></Visual>
      ) : (
        //if "test" button pushed"
        <p>
          altitude = {backData.altitude} HIS = {backData.his} and ADI =
          {backData.ADI}
        </p>
      )}
    </div>
  );
}

export default App;
