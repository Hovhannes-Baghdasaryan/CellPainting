import "./App.css";
import React, { useState } from "react";
import Cells from "./components/Cells/Cells";
import Colors from "./components/Colors/Colors";
import { arr } from "./utils/matrix";

function App() {
  const [color, setColor] = useState("#ffffff");
  const [value, setValue] = useState([]);

  return (
    <>
      <Colors setColor={setColor} color={color} setValue={setValue} />
      <Cells value={value} setValue={setValue} arr={arr} color={color} />
    </>
  );
}

export default App;
