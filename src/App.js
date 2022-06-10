import "./App.css";
import React, { useState } from "react";
import Cells from "./components/Cells/Cells";
import Colors from "./components/Colors/Colors";

function App() {
  const [color, setColor] = useState("#ffffff");
  const [value, setValue] = useState([]);

  return (
    <>
      <Colors setColor={setColor} color={color} setValue={setValue} />
      <Cells
        cellsCount={5}
        color={color}
        setColor={setColor}
        value={value}
        setValue={setValue}
      />
    </>
  );
}

export default App;
